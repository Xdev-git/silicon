"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  type: "single" | "multiple";
  collapsible: boolean;
  value: string | string[];
  onValueChange: (value: string) => void;
}>({
  type: "single",
  collapsible: false,
  value: "",
  onValueChange: () => {},
});

export const Accordion = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { type?: "single" | "multiple", collapsible?: boolean }>(
  ({ className, type = "single", collapsible = false, ...props }, ref) => {
    const [value, setValue] = React.useState<string | string[]>(type === "single" ? "" : []);

    const onValueChange = React.useCallback(
      (itemValue: string) => {
        if (type === "single") {
          setValue(prev => (collapsible && prev === itemValue ? "" : itemValue));
        } else {
          setValue(prev => {
            const arr = Array.isArray(prev) ? prev : [];
            return arr.includes(itemValue) ? arr.filter(v => v !== itemValue) : [...arr, itemValue];
          });
        }
      },
      [type, collapsible]
    );

    return (
      <AccordionContext.Provider value={{ type, collapsible, value, onValueChange }}>
        <div ref={ref} className={cn("space-y-1", className)} {...props} />
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

const AccordionItemContext = React.createContext<{ value: string; isOpen: boolean }>({
  value: "",
  isOpen: false,
});

export const AccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
  ({ className, value, ...props }, ref) => {
    const ctx = React.useContext(AccordionContext);
    const isOpen = ctx.type === "single" ? ctx.value === value : (Array.isArray(ctx.value) && ctx.value.includes(value));

    return (
      <AccordionItemContext.Provider value={{ value, isOpen }}>
        <div ref={ref} className={cn("border-b border-border", className)} data-state={isOpen ? "open" : "closed"} {...props} />
      </AccordionItemContext.Provider>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { onValueChange } = React.useContext(AccordionContext);
    const { value, isOpen } = React.useContext(AccordionItemContext);

    return (
      <div className="flex">
        <button
          ref={ref}
          type="button"
          data-state={isOpen ? "open" : "closed"}
          onClick={() => onValueChange(value)}
          className={cn(
            "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            className
          )}
          {...props}
        >
          {children}
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </button>
      </div>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { isOpen } = React.useContext(AccordionItemContext);

    if (!isOpen) return null;

    return (
      <div ref={ref} className={cn("overflow-hidden text-sm transition-all", className)} data-state={isOpen ? "open" : "closed"} {...props}>
        <div className="pb-4 pt-0">{children}</div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";
