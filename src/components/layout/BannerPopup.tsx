"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export function BannerPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the banner has been shown in this session
    const hasSeenBanner = sessionStorage.getItem("hasSeenBanner");

    if (!hasSeenBanner) {
      // Set a timer to show the banner after 2.5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenBanner", "true");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-background shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black text-white rounded-full transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Banner Content */}
        <Link href="/projects/horizon-tower" onClick={() => setIsOpen(false)} className="block group">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image 
              src="https://placehold.co/1200x675/E6E9EE/9AA0A6.png?text=New+Launch+-+Horizon+Tower" 
              alt="Horizon Tower - New Launch"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
