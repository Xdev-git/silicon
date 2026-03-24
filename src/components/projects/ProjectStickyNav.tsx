"use client";

import { useEffect, useState } from "react";

export function ProjectStickyNav() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "highlights", "amenities", "plans"];
      let current = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "highlights", label: "Highlights" },
    { id: "amenities", label: "Amenities" },
    { id: "plans", label: "Master Plan" }
  ];

  return (
    <div className="fixed left-0 bottom-24 z-[60] bg-white/95 backdrop-blur shadow-[4px_0_15px_-3px_rgba(0,0,0,0.1)] flex flex-col py-6 hidden xl:flex border-r border-accent/40">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`
            relative w-12 h-32 flex items-center justify-center rotate-180
            text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300
            ${activeSection === item.id ? "text-accent" : "text-zinc-400 hover:text-zinc-800"}
          `}
          style={{ writingMode: 'vertical-rl' }}
        >
          {item.label}
          {activeSection === item.id && (
            <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-accent"></div>
          )}
        </button>
      ))}
    </div>
  );
}
