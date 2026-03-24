import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  image?: string;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

export function PageHeader({ title, breadcrumbs, image }: PageHeaderProps) {
  const bg = image ?? DEFAULT_IMAGE;

  return (
    <div className="relative pt-32 pb-20 md:pt-44 md:pb-28 lg:pt-56 lg:pb-36 overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src={bg}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />
      {/* Brand gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center flex flex-col items-center justify-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#BC9F81] mb-4">Silicon Real Estate</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 uppercase tracking-widest drop-shadow-lg">
          {title}
        </h1>
        <div className="w-12 h-[2px] bg-[#BC9F81] mb-6"></div>

        <nav className="flex items-center space-x-2 text-xs md:text-sm font-semibold tracking-wide uppercase text-white/70">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mx-1 md:mx-2 text-white/50" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-bold">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
