"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1993, label: "Year\nEstablished" },
  { value: 206, label: "Projects\nCompleted" },
  { value: 870, label: "Contractors\nAppointed" },
  { value: 26, label: "Awards\nWon" },
];

function useCountUp(target: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return count;
}

function StatItem({ value, label, started }: { value: number; label: string; started: boolean }) {
  const count = useCountUp(value, 1800, started);

  return (
    <div className="flex flex-col items-center justify-center text-center px-8 md:px-16 py-6 sm:py-0 flex-1">
      <span className="text-4xl md:text-6xl font-serif font-bold text-black tracking-tight leading-none mb-2">
        {count.toLocaleString("en-IN")}
      </span>
      <span className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-medium whitespace-pre-line leading-snug mt-1">
        {label}
      </span>
    </div>
  );
}

export function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-800 py-10 md:py-12"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 dark:divide-zinc-800">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
