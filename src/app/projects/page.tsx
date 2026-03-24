"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Silicon City",
    location: "Rau, Indore",
    type: "Residential Township",
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Silicon+City",
    slug: "silicon-city"
  },
  {
    title: "Silicon Nakshatra",
    location: "Khandwa Road, Indore",
    type: "Premium Apartments",
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Silicon+Nakshatra",
    slug: "silicon-nakshatra"
  },
  {
    title: "Silicon Signature",
    location: "AB Road, Indore",
    type: "Commercial Hub",
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Silicon+Signature",
    slug: "silicon-signature"
  },
  {
    title: "Silicon Avenue",
    location: "Bypass Road, Indore",
    type: "Commercial Spaces",
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Silicon+Avenue",
    slug: "silicon-avenue"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <section 
        className="relative w-full h-[400px] mt-[80px] bg-cover bg-center flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-accent"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1080/E6E9EE/9AA0A6.png?text=Our+Projects')",
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 2vw), 0 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/5" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-black/60 font-semibold mb-4">
            Shaping Indore's Skyline
          </p>
          <h1 className="text-black mb-6 leading-tight">
            Our Projects
          </h1>
          <div className="w-20 h-[2px] mx-auto bg-black/20"></div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <nav className="flex items-center text-sm text-muted-foreground font-medium">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-accent font-bold uppercase tracking-wider">Projects</span>
        </nav>
      </div>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <Link 
              key={i} 
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden bg-zinc-900 aspect-[16/9]"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">
                  {project.type}
                </p>
                <h2 className="text-white text-3xl md:text-4xl font-serif mb-4 flex items-center gap-4">
                  {project.title}
                  <ArrowRight className="w-6 h-6 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </h2>
                <p className="text-white/60 text-sm tracking-widest uppercase">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

