"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function FeaturedProjectSection() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row bg-white dark:bg-zinc-900  overflow-hidden relative">

          {/* Left Side: Image */}
          <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[550px]">
            {/* The project image - using a suitable architectural/real-estate placeholder since we don't have the exact image asset */}
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
              alt="Sattva La Vita"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark gradient for text readability at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            {/* Bottom Text Overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <p className="text-sm font-medium text-zinc-200">RERA Received: PRM/KA/RERA/1251/446/PR/ 041223/006446</p>
              <p className="text-sm font-medium text-zinc-200 mt-1">Off Hennur Road, Bangalore</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white">
            {/* Status Badge */}
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-br from-[#BC9F81] to-[#AD9266] text-[#413F4C] text-xs font-bold px-3 py-1.5 uppercase tracking-wide">
                Under Construction
              </span>
            </div>

            {/* Project Title */}
            <h2 className="text-black text-3xl md:text-4xl font-bold mb-6 font-sans">
              Sattva <span className="text-[#BC9F81]">La Vita</span>
            </h2>

            {/* Intro Subtitle */}
            <p className="text-zinc-600 text-lg  md:text-xl font-bold mb-6 leading-snug">
              Sattva La Vita offers the ultimate luxury living in Hennur, Bengaluru&apos;s thriving suburb.
            </p>

            {/* Full Description */}
            <p className="text-zinc-500 text-sm md:text-base font-medium leading-snug mb-10 max-w-xl">
              Spread across 3 acres, it features 63 elegant Row Houses, each spanning 3,260 sq. ft. with 4 bedrooms, a gym, an entertainment zone, and a private terrace. Enjoy spacious backyards, independent walls for privacy, and two-car parking. Located just 30 minutes from the airport, with top IT parks, malls, and hospitals nearby. A stunning clubhouse, pool, and serene green spaces redefine premium community living.
            </p>

            {/* CTA Button */}
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
