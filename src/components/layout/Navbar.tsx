"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import { SideMenu } from "./SideMenu";
import { usePathname } from "next/navigation";

// ─── Project cards shown in the "Our Projects" mega-menu ────────────────────
const projects = [
  {
    name: "Silicon Water Front",
    slug: "silicon-water-front",
    img: "https://placehold.co/400x533/E6E9EE/9AA0A6.png?text=Water+Front",
  },
  {
    name: "Sampada",
    slug: "sampada",
    img: "https://placehold.co/400x533/E6E9EE/9AA0A6.png?text=Sampada",
  },
  {
    name: "Sampurna",
    slug: "sampurna",
    img: "https://placehold.co/400x533/E6E9EE/9AA0A6.png?text=Sampurna",
  },
  {
    name: "Swastika",
    slug: "swastika",
    img: "https://placehold.co/400x533/E6E9EE/9AA0A6.png?text=Swastika",
  },
];

// ─── Journey links shown in the "Our Journey" mega-menu ─────────────────────
const journeyLinks = [
  {
    label: "About Silicon",
    href: "/about",
    desc: "Discover our origins and milestones, tracing Silicon's path to becoming Indore's most trusted developer.",
    img: "https://placehold.co/400x300/E6E9EE/9AA0A6.png?text=About+Silicon",
  },
  {
    label: "Our Impact",
    href: "/our-impact",
    desc: "Learn about our commitment to sustainable development and enriching the communities we serve.",
    img: "https://placehold.co/400x300/E6E9EE/9AA0A6.png?text=Impact",
  },
  {
    label: "Chairman's Message",
    href: "/about/chairmans-message",
    desc: "A personal message from our Chairman on trust, quality, and our vision for Indore's future.",
    img: "https://placehold.co/400x300/E6E9EE/9AA0A6.png?text=Chairman",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const pathname = usePathname();
  const isInnerPage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = isInnerPage || scrolled;
  const headerClass = solid
    ? "bg-[#F3EEEB] text-[#413F4C] shadow-sm py-3 transition-colors duration-300"
    : "bg-transparent text-[#413F4C] lg:text-white py-5 transition-colors duration-300";

  const linkHover = solid
    ? "hover:text-[#C1A661]"
    : "hover:text-accent";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerClass} h-[76px]`}>
        <div className="container mx-auto px-6 flex items-center justify-between gap-8 h-full">

          {/* ── LEFT: Mega-menu triggers ───────────────────────── */}
          <div className="hidden lg:flex items-center gap-8 text-md font-medium h-full">

            {/* Our Projects */}
            <div className="group h-full flex items-center">
              <button className={`flex items-center gap-1 transition-colors ${linkHover} py-6`}>
                Our Projects <ChevronDown className="w-6 h-6 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Mega dropdown wrapper - Fixed to screen width, uses a transparent top border as an invisible hover bridge */}
              <div className="fixed top-[56px] left-0 w-full border-t-[20px] border-t-transparent bg-clip-padding opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                <div className="w-full bg-[#F3EEEB] text-[#413F4C] shadow-2xl">
                  <div className="container mx-auto px-6 py-8">
                    <p className="text-md font-bold uppercase tracking-[0.2em] text-[#413F4C]/70 mb-6">Our Projects</p>
                    <div className="grid grid-cols-4 gap-4">
                      {projects.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/projects/${p.slug}`}
                          className="group/card flex flex-col gap-2"
                        >
                          <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-50 border border-zinc-200 rounded-sm">
                            <Image
                              src={p.img}
                              alt={p.name}
                              fill
                              className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <span className="text-xl font-bold uppercase text-[#413F4C] group-hover/card:opacity-75 transition-colors leading-tight">
                            {p.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-[#413F4C]/10">
                      <Link
                        href="/projects"
                        className="text-md font-bold uppercase tracking-widest text-[#413F4C]/80 hover:text-[#413F4C] transition-colors"
                      >
                        View All Projects →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Journey */}
            <div className="group h-full flex items-center">
              <button className={`flex items-center gap-1 transition-colors ${linkHover} py-6`}>
                Our Journey <ChevronDown className="w-6 h-6 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Mega dropdown wrapper - Fixed to screen width, uses a transparent top border as an invisible hover bridge */}
              <div className="fixed top-[56px] left-0 w-full border-t-[20px] border-t-transparent bg-clip-padding opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                <div className="w-full bg-[#F3EEEB] text-[#413F4C] shadow-2xl">
                  <div className="container mx-auto px-6 py-8">
                    <p className="text-md font-bold uppercase tracking-wider text-[#413F4C]/70 mb-6">Our Journey</p>
                    <div className="grid grid-cols-3 gap-6">
                      {journeyLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group/card flex flex-col gap-3"
                        >
                          <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-50 border border-zinc-200 rounded-sm">
                            <Image
                              src={item.img}
                              alt={item.label}
                              fill
                              className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div>
                            <p className="text-xl font-bold text-[#413F4C] group-hover/card:opacity-75 transition-opacity mb-1">
                              {item.label} →
                            </p>
                            <p className="text-sm text-[#413F4C]/80 leading-snug">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CENTER: Logo ────────────────────────────────── */}
          <div className="flex-1 flex justify-center lg:flex-none lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <svg
                className="w-7 h-7 group-hover:scale-105 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="font-bold text-xl tracking-widest uppercase">Silicon</span>
            </Link>
          </div>

          {/* ── RIGHT: Links + CTA + hamburger ────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-6 text-md font-medium">
            <Link href="/nri-corner" className={`transition-colors ${linkHover}`}>NRI Corner</Link>
            <Link href="/blog" className={`transition-colors ${linkHover}`}>Blog</Link>
            <Link href="/downloads" className={`transition-colors ${linkHover}`}>Downloads</Link>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className={`relative overflow-hidden flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.05] group/cta ${solid
                ? "bg-gradient-to-r from-[#020D2F] to-[#413F4C] text-white shadow-md"
                : "bg-[#020D2F] text-[#F3EEEB] hover:bg-[#413F4C]"
                }`}
            >
              {solid && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#413F4C] to-[#020D2F] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500 ease-in-out z-0"></div>
              )}
              <div className="relative z-10 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                Contact Us
              </div>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsSideMenuOpen(true)}
              className={`flex items-center gap-2 hover:opacity-70 transition-opacity`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile: hamburger only */}
          <button
            onClick={() => setIsSideMenuOpen(true)}
            className="lg:hidden flex items-center gap-2 hover:opacity-70 transition-opacity"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <SideMenu open={isSideMenuOpen} setOpen={setIsSideMenuOpen} />
    </>
  );
}


