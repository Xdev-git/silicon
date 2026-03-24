import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function OurPurposeSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px] lg:h-[700px] bg-[#F3EEEB]">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
        <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto lg:mr-16 relative z-10 group">
          {/* New Left Image */}
          <div className="relative w-half h-36 md:h-48 mb-10 overflow-hidden shadow-lg border border-white/20 hidden sm:block">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Our Core Purpose" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>

          <h4 className="text-[#020D2F] text-sm md:text-base font-bold uppercase tracking-widest mb-4 inline-block">
            Our Purpose
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#413F4C] mb-6">
            Do good. <span className="text-[#020D2F]">Do well.</span>
          </h2>
          <div className="w-10 h-[2px] bg-[#413F4C] mb-6"></div>
          <p className="text-[#413F4C]/90 text-base md:text-lg leading-snug font-medium max-w-[420px]">
            Silicon is committed to elevating the living experience while emphasising the importance of creating a positive impact on the environment and society.
          </p>
        </div>
      </div>

      {/* Right Images Area */}
      <div className="w-full lg:w-1/2 flex h-[500px] lg:h-full">
        {/* First Image Column */}
        <div className="w-1/2 h-full relative group overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop"
            alt="Our Story"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Subtle gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

          <Link href="/about" className="absolute bottom-8 lg:bottom-12 left-6 lg:left-10 flex flex-col gap-3 transition-all z-10 w-full pr-6">
            <span className="text-white/70 text-xs font-bold uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Discover
            </span>
            <div className="flex items-center gap-3 w-full">
              <span className="text-white text-2xl lg:text-3xl font-bold tracking-tight pb-0.5 transition-colors">
                Our Story
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <ChevronRight className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
            </div>
          </Link>
        </div>

        {/* Second Image Column */}
        <div className="w-1/2 h-full relative group overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop"
            alt="Our Impact"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

          <Link href="/our-impact" className="absolute bottom-8 lg:bottom-12 left-6 lg:left-10 flex flex-col gap-3 transition-all z-10 w-full pr-6">
            <span className="text-white/70 text-xs font-bold uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Explore
            </span>
            <div className="flex items-center gap-3 w-full">
              <span className="text-white text-2xl lg:text-3xl font-bold tracking-tight pb-0.5 transition-colors">
                Our Impact
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <ChevronRight className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}


