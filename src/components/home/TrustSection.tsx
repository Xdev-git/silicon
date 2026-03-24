"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-start gap-12 md:gap-16">

          {/* Left Column */}
          <div className="flex-shrink-0 text-center md:text-left flex flex-col justify-center">
            <h2 className="leading-[1.1] tracking-tight">
              <span className="block text-[#BC9F81] dark:text-white mb-1 tracking-widest uppercase drop-shadow-sm">Trust</span>
              <span className="block text-black text-3xl md:text-4xl font-medium uppercase tracking-[0.15em]">It&apos;s what</span>
              <span className="block text-black text-3xl md:text-4xl font-bold uppercase tracking-[0.15em]">we build</span>
            </h2>
          </div>

          {/* Separator */}
          <div className="hidden md:block w-px bg-zinc-300 dark:bg-zinc-800 self-stretch mx-4"></div>

          {/* Mobile Separator */}
          <div className="md:hidden h-px w-full max-w-xs bg-zinc-300 dark:bg-zinc-800"></div>

          {/* Right Column */}
          <div className="flex-1 max-w-3xl flex flex-col justify-center text-center md:text-left">
            <h3 className="text-black dark:text-white font-bold text-sm md:text-base uppercase tracking-wider mb-4">
              Premium real estate developers delivering homes over 30 years in India
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-md font-medium leading-tight mb-2">
              Built on the bedrock of <span className="text-black dark:text-white font-bold">30+ years of trust, innovation and knowledge-leadership</span>, the Silicon Group is one of India&apos;s leading Property Development, Management and Consulting organizations in India.
            </p>

            <div className="flex justify-center md:justify-start mt-4">
              <Link href="/about" className="group inline-flex items-center gap-3 text-black dark:text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:text-[#BC9F81]">
                <span className="translate-y-px">Know More</span>
                <div className="w-8 h-8 rounded-full bg-[#BC9F81] flex items-center justify-center transition-all duration-300 shadow-sm group-hover:bg-[#413F4C] group-hover:translate-x-1 group-hover:shadow-md">
                  <ArrowRight className="w-4 h-4 text-[#413F4C] transition-colors duration-300 group-hover:text-[#BC9F81]" />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
