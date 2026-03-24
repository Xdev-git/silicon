"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Homebuyers+Choice",
    date: "13/05/25",
    title: "Top 5 Reasons Why Homebuyers Are Choosing the Southern Bypass in Kolkata",
    excerpt: "Top location, great connectivity, modern amenities — the Southern Bypass is becoming Kolkata's hottest real estate choice. Find out the top 5 reasons!",
    slug: "#"
  },
  {
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Maximize+Space",
    date: "13/05/25",
    title: "How to Maximize Space in any Apartment or House",
    excerpt: "Living in Kolkata? Discover clever ways to elevate your home effortlessly!",
    slug: "#"
  },
  {
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Renting+vs+Owning",
    date: "13/05/25",
    title: "Renting vs. Owning: Does Buying a Home Actually Save Your Money?",
    excerpt: "Rent or buy in Kolkata? Find out what truly saves you more!",
    slug: "#"
  },
  {
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Mixed-Use+Project",
    date: "01/04/25",
    title: "Silicon Group Unveils Landmark Mixed-Use Project in NCR",
    excerpt: "A game-changing development combining retail, offices, and luxury residences in one iconic address.",
    slug: "#"
  },
  {
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Residential+Plot",
    date: "22/03/25",
    title: "5 Things to Check Before Buying a Residential Plot",
    excerpt: "Plots are an excellent investment, but only if you know what to look for. Our experts share must-check points before you sign.",
    slug: "#"
  }
];

export function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3800, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-zinc-900 ">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#413F4C] mb-4">
              Latest from <span className="text-[#BC9F81]">Our Blog</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#413F4C]"></div>
          </div>
          <Link
            href="/blog"
            className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#413F4C] transition-colors hidden sm:block mt-8 md:mt-0"
          >
            Explore All Posts →
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6 lg:-ml-8">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-6 lg:pl-8"
                >
                  <div className="flex flex-col h-full bg-white group/card cursor-pointer hover:-translate-y-2 transition-transform duration-500 shadow-sm border border-[#413F4C]/5">
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover/card:bg-transparent transition-colors duration-500"></div>
                      <div className="absolute top-4 left-4 bg-[#BC9F81] text-[#413F4C] text-[12px] font-bold uppercase tracking-tight px-3 py-1.5 shadow-md">
                        {article.date}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6 md:p-8 bg-white border-t-0">
                      <h3 className="text-xl font-bold text-[#413F4C] leading-snug mb-4 line-clamp-2 group-hover/card:text-[#BC9F81] transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-md text-[#413F4C]/70 font-medium leading-snug line-clamp-3 mb-6 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mt-auto">
                        <Link
                          href={article.slug}
                          className="text-xs font-bold uppercase tracking-widest text-[#413F4C] group-hover/card:text-[#BC9F81] transition-colors w-fit custom-underline relative"
                        >
                          Read Article →
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#BC9F81] group-hover/card:w-full transition-all duration-300"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-[35%] -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white border border-[#413F4C]/10 shadow-lg rounded-full text-[#413F4C] hover:bg-[#BC9F81] hover:text-white hover:border-[#BC9F81] transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-[35%] -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white border border-[#413F4C]/10 shadow-lg rounded-full text-[#413F4C] hover:bg-[#BC9F81] hover:text-white hover:border-[#BC9F81] transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/blog" className="text-sm font-medium text-accent underline underline-offset-4">
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
