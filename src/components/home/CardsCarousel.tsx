"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export function CardsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      title: "The Horizon Tower",
      location: "Downtown NY",
      image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Horizon+Tower",
      link: "/projects/horizon-tower",
    },
    {
      title: "Serenity Villas",
      location: "Malibu, CA",
      image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Serenity+Villas",
      link: "/projects/serenity-villas",
    },
    {
      title: "Vertex Commercial",
      location: "Silicon Valley",
      image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Vertex",
      link: "/projects/vertex",
    },
    {
      title: "Oasis Residences",
      location: "Miami, FL",
      image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Oasis",
      link: "/projects/oasis",
    },
    {
      title: "Lumina Point",
      location: "Chicago, IL",
      image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Lumina",
      link: "/projects/lumina",
    }
  ];

  useEffect(() => {
    if (!api) return;

    // Set initial center explicitly (we add +1 because of how snapping aligns on a 3-item view)
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      // Keep track of the slide that feels most "center" visually
      const index = api.selectedScrollSnap();
      setCurrent(index + 1); // +1 offset for visual centering in a 3-card desktop grid
    });
  }, [api]);

  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900">Featured <span className="text-[#020D2F]">Projects</span></h2>
            <div className="w-10 h-[2px] bg-[#413F4C] mt-3 mb-2 mx-auto"></div>
            <p className="text-zinc-500 text-xl font-normal max-w-xl mx-auto">
              Explore our portfolio of award-winning architectural masterpieces across the globe.
            </p>
          </div>
        </div>

        <div className="relative isolate px-8 md:px-12">
          {/* Fading edges to make the center card pop more */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-zinc-50 to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-zinc-50 to-transparent"></div>

          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 gap-4 py-8 items-center min-h-[550px]">
              {projects.map((project, index) => {
                // Determine if this is the "active/center" visual card using a modulo to support looping
                const isActive = (index % projects.length) === (current % projects.length);

                return (
                  <CarouselItem
                    key={index}
                    className={`pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-700 ease-in-out relative ${isActive ? "z-20" : "z-10"}`}
                  >
                    <Link href={project.link} className="block group h-full">
                      <div
                        className={`overflow-hidden rounded-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center relative
                          ${isActive
                            ? "scale-[1.05] md:scale-110 opacity-100 z-20 mx-2 md:-mx-[15%]"
                            : "scale-95 md:scale-90 opacity-40 z-10 mx-2 hover:opacity-80"}
                        `}
                      >
                        <div className={`relative w-full overflow-hidden transition-all duration-700 ${isActive ? "h-[450px]" : "h-[350px]"}`}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`object-cover w-full h-full transition-transform duration-1000 ${isActive ? "scale-105" : "scale-100"}`}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700
                            ${isActive
                              ? "from-black/90 via-black/30 to-transparent opacity-80"
                              : "from-black/100 via-black/60 to-black/30"}
                          `} />
                          <div className={`absolute left-8 right-8 transition-all duration-700
                            ${isActive ? "bottom-8 opacity-100 translate-y-0" : "bottom-4 opacity-50 translate-y-4"}
                          `}>
                            <p className="text-zinc-300 text-sm mb-2 uppercase tracking-widest font-bold">{project.location}</p>
                            <h3 className="text-white text-3xl font-bold tracking-tight">{project.title}</h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious className="-left-12 top-1/2 z-30" />
              <CarouselNext className="-right-12 top-1/2 z-30" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}



