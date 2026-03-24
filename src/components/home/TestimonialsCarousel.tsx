"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Tina & James Heart",
    content: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services."
  },
  {
    name: "Mary van den Reich",
    content: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services."
  },
  {
    name: "Paul & Susan Taylor",
    content: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services."
  },
  {
    name: "Rohit & Priya Sharma",
    content: "Silicon Group made our dream home a reality. Their attention to detail and commitment to quality is truly unmatched."
  },
  {
    name: "Ananya Mehta",
    content: "Exceptional service and outstanding properties. I couldn't be happier with my investment in a Silicon Group project."
  }
];

export function TestimonialsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section
      className="relative py-20 md:py-28 bg-fixed bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-zinc-900/75" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
            What Our <span className="text-white underline decoration-white/30 underline-offset-8">Clients Think</span>
          </h2>
          <div className="w-10 h-[2px] bg-white mx-auto mt-4"></div>
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6 md:-ml-10">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6 md:pl-10"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between hover:bg-white/10 transition-colors duration-300">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-white fill-white" />
                      ))}
                    </div>
                    {/* Quote text */}
                    <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 italic">
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>

                  {/* Attribution */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-lg border border-white/30">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold tracking-wide">
                        {t.name}
                      </p>
                      <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Client</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


