"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  /** "dark" = white labels/borders (for dark parallax sections), "light" = dark labels/borders */
  theme?: "dark" | "light";
}

export function CustomSelect({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
  theme = "dark",
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value);

  const isDark = theme === "dark";
  const borderColor = isDark ? "border-white/20" : "border-border";
  const focusBorderColor = isDark ? "border-white" : "border-foreground";
  const labelColor = isDark ? "text-white/60" : "text-muted-foreground";
  const labelActiveColor = isDark ? "text-white/80" : "text-foreground";
  const textColor = isDark ? "text-white" : "text-foreground";
  const chevronColor = isDark ? "text-white/50" : "text-muted-foreground";
  const dropdownBg = "bg-zinc-900";
  const dropdownText = "text-white";
  const dropdownHover = "hover:bg-white/10";

  return (
    <div className="relative" ref={ref}>
      {/* Label — always visible above */}
      <label
        htmlFor={id}
        className={`block text-xs font-semibold uppercase tracking-widest mb-1 transition-colors ${
          value ? labelActiveColor : labelColor
        }`}
      >
        {label}{required ? " *" : ""}
      </label>

      {/* Trigger */}
      <button
        type="button"
        id={id}
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between border-b ${borderColor} ${
          open ? focusBorderColor : ""
        } py-2 ${textColor} transition-colors cursor-pointer bg-transparent outline-none`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={`text-sm ${selected ? "" : isDark ? "text-white/30" : "text-muted-foreground/40"}`}>
          {selected ? selected.label : "Select an option"}
        </span>
        <ChevronDown
          className={`w-4 h-4 ${chevronColor} transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown list */}
      {open && (
        <div
          className={`absolute left-0 top-full mt-1 w-full ${dropdownBg} border border-white/10 z-50 shadow-xl`}
          role="listbox"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={value === option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm ${dropdownText} ${dropdownHover} transition-colors ${
                value === option.value ? "bg-white/10 font-semibold" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
