"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://placehold.co/1920x1080/E6E9EE/9AA0A6.png?text=Aesthetically+Driven",
    title: "Aesthetically Driven",
    subtitle: "Experience spaces that inspire and elevate your lifestyle.",
  },
  {
    image: "https://placehold.co/1920x1080/E6E9EE/9AA0A6.png?text=Masterfully+Crafted",
    title: "Masterfully Crafted",
    subtitle: "Architectural brilliance meeting unparalleled comfort.",
  },
  {
    image: "https://placehold.co/1920x1080/E6E9EE/9AA0A6.png?text=Sustainable+Living",
    title: "Sustainable Living",
    subtitle: "Homes designed for the future with nature in mind.",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09be1587?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Prime Locations",
    subtitle: "Strategic spots offering connectivity and tranquility.",
  }
];

export function HeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for the scroll indicator
      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Slides mapping */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear ${
              index === currentIndex ? "scale-105" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </div>
      ))}
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50 z-10 pointer-events-none" />
      
      {/* Central Text Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto drop-shadow-md">
        <h2 
          key={`title-${currentIndex}`} 
          className="text-white mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
        >
          {slides[currentIndex].title}
        </h2>
        <p 
          key={`subtitle-${currentIndex}`} 
          className="text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-snug animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both"
        >
          {slides[currentIndex].subtitle}
        </p>
      </div>
      
      {/* Bottom Navigation Indicators */}
      <div className="absolute bottom-12 left-0 w-full px-8 md:px-16 flex items-center justify-center z-30 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
