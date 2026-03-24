"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectOverview({ overview }: { overview: any }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % overview.images.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + overview.images.length) % overview.images.length);
  };

  return (
    <div className="py-24 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center max-w-[1400px] mx-auto">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1 flex flex-col pt-12">
          {/* Vertical Title Line */}
          <div className="w-[1px] h-24 bg-accent mb-6"></div>
          
          {/* Description */}
          <div className="pr-8">
            <h3 className="text-xl md:text-2xl font-serif text-accent font-light leading-none mb-1 uppercase">
              {overview.title}
            </h3>
            <h2 className="text-accent mb-6 uppercase tracking-tight">
              {overview.name}
            </h2>
            <p className="text-zinc-600 leading-relaxed text-[14px]">
              {overview.text}
            </p>
          </div>
        </div>

        {/* Right Content - Framed Image Slider */}
        <div className="order-1 lg:order-2 relative aspect-[4/3] lg:aspect-[1.2/1] w-full max-w-4xl ml-auto mt-12 lg:mt-0">
          
          {/* Custom Gold Frame borders */}
          <div className="absolute -top-4 -left-4 w-[80%] h-[1px] bg-accent hidden lg:block z-0 pointer-events-none"></div>
          <div className="absolute -top-4 -left-4 h-[80%] w-[1px] bg-accent hidden lg:block z-0 pointer-events-none"></div>
          
          <div className="relative w-full h-full z-10 overflow-hidden bg-zinc-100 shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIdx * 100}%)` }}
            >
              {overview.images.map((img: string, idx: number) => (
                <div key={idx} className="relative w-full h-full flex-shrink-0">
                  <Image
                    src={img}
                    alt={`${overview.name} - Slide ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows moved outside overflow-hidden */}
          {overview.images.length > 1 && (
            <div className="absolute -left-5 bottom-12 flex flex-col gap-2 z-20">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-white shadow-lg border border-zinc-200 text-accent flex items-center justify-center hover:bg-zinc-50 transition-all hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 rotate-0" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-white shadow-lg border border-zinc-200 text-accent flex items-center justify-center hover:bg-zinc-50 transition-all hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 rotate-0" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
