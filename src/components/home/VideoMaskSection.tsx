"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function VideoMaskSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    gsap.registerPlugin(ScrollTrigger);

    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "center center",
            scrub: 1
          }
        }
      );
    }

    // Explicitly play video to bypass some browser autoplay restrictions
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video autoplay prevented:", e));
    }
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <section
      ref={containerRef}
      className="relative isolate w-full bg-white overflow-hidden"
    >
      {/* 
        1. Background Video Layer 
      */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-zinc-200">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://placehold.co/2000x1200/E6E9EE/9AA0A6.png?text=Sillicon+Video+Poster"
          className="w-full h-full object-cover opacity-90"
          controls={false} // ensuring it behaves purely as a background
        >
          {/* 
            Using a permanent Google Sample Video as placeholder because stock video CDNs 
            (like Mixkit/Coverr) expire their links every few hours causing 'Access Denied'.
            
            TO CHANGE THIS: Place your own MP4 inside the `public` folder and change src to "/your-video.mp4" 
          */}
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 
        2. Masking Layer
      */}
      <div className="relative w-full bg-white py-1 md:py-5 flex flex-col items-center justify-center mix-blend-screen pointer-events-none z-10">
        <div ref={textRef} className="text-center flex flex-col items-center w-full px-4 leading-none">
          <h2
            className="font-black tracking-[0.02em] uppercase text-black"
            style={{
              fontSize: "clamp(4rem, 18vw, 15rem)",
              lineHeight: "0.85",
            }}
          >
            SILICON
          </h2>
          <p className="text-3xl md:text-5xl font-black tracking-[0.2em] text-black uppercase mt-4 md:mt-8">
            Developing Dreams.
          </p>
        </div>
      </div>
    </section>
  );
}

