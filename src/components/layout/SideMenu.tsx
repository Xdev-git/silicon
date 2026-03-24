"use client";

import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function SideMenu({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-[85vw] sm:w-[400px] p-0 flex flex-col text-[#413F4C] border-l-0 shadow-2xl [&>button]:border-0 [&>button]:ring-0 [&>button]:outline-none [&>button]:opacity-100 [&>button]:text-[#413F4C] [&>button]:z-[60] overflow-hidden z-[100]"
        style={{ background: 'linear-gradient(to bottom, #BC9F81 0%, #BC9F81 35%, #AD9266 100%)' }}
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">Main Navigation Side Menu</SheetDescription>

        {/* Background Image Layer matching the reference layout */}
        <div className="absolute inset-0 z-0 opacity-[0.08] mix-blend-overlay pointer-events-none">
          <Image
            src="https://placehold.co/400x800/E6E9EE/9AA0A6.png?text=Side+Menu+Bg"
            alt="Cityscape background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex flex-col mt-16 pb-10">

            {/* Our Projects */}
            <SideSection label="Our Projects" />
            <SideLink href="/projects/silicon-water-front" setOpen={setOpen} pathname={pathname}>Silicon Water Front</SideLink>
            <SideLink href="/projects/sampada" setOpen={setOpen} pathname={pathname}>Sampada</SideLink>
            <SideLink href="/projects/sampurna" setOpen={setOpen} pathname={pathname}>Sampurna</SideLink>
            <SideLink href="/projects/swastika" setOpen={setOpen} pathname={pathname}>Swastika</SideLink>
            <SideLink href="/projects" setOpen={setOpen} pathname={pathname}>All Projects</SideLink>

            {/* Our Journey */}
            <SideSection label="Our Journey" />
            <SideLink href="/about" setOpen={setOpen} pathname={pathname}>About Silicon</SideLink>
            <SideLink href="/our-impact" setOpen={setOpen} pathname={pathname}>Our Impact</SideLink>
            <SideLink href="/about/chairman-message" setOpen={setOpen} pathname={pathname}>Chairman's Message</SideLink>
            <SideLink href="/career" setOpen={setOpen} pathname={pathname}>Career</SideLink>

            {/* Resources */}
            <SideSection label="Resources" />
            <SideLink href="/nri-corner" setOpen={setOpen} pathname={pathname}>NRI Corner</SideLink>
            <SideLink href="/blog" setOpen={setOpen} pathname={pathname}>Blog</SideLink>
            <SideLink href="/downloads" setOpen={setOpen} pathname={pathname}>Downloads</SideLink>
            <SideLink href="/buyers-guide" setOpen={setOpen} pathname={pathname}>Buyers Guide</SideLink>
            <SideLink href="/emi-calculator" setOpen={setOpen} pathname={pathname}>EMI Calculator</SideLink>

            {/* Contact */}
            <SideSection label="Get in Touch" />
            <SideLink href="/contact" setOpen={setOpen} pathname={pathname}>Contact Us</SideLink>
          </div>
        </div>

      </SheetContent>
    </Sheet>


  );
}


function SideSection({ label }: { label: string }) {
  return (
    <div className="px-8 pt-7 pb-2">
      <p className="text-[18px] font-bold uppercase tracking-widest text-[#413F4C]/70">{label}</p>
      <div className="w-10 h-[2px] bg-black/20 mt-3 mb-6"></div>
    </div>
  );
}

function SideLink({
  href,
  setOpen,
  children,
  pathname,
}: {
  href: string;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  pathname: string;
}) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`block w-full px-8 py-4 border-b border-[#413F4C]/10 font-sans text-base text-md font-medium tracking-wide transition-all duration-300 ${isActive
        ? "bg-[#413F4C]/5 text-[#413F4C] font-bold"
        : "text-[#413F4C]/90 hover:bg-[#413F4C]/10 hover:text-[#413F4C]"
        }`}
    >
      {children}
    </Link>
  );
}

