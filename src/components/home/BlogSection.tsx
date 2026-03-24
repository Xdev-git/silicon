"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogSection() {
  const articles = [
    {
      title: "The Future of Sustainable Urban Living",
      category: "Architecture",
      date: "March 15, 2026",
      image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Sustainable+Living",
      excerpt: "Exploring how modern development integrates with natural ecosystems to create self-sustaining communities."
    },
    {
      title: "Interior Design Trends Defining 2026",
      category: "Design",
      date: "February 28, 2026",
      image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Design+Trends",
      excerpt: "Minimalism meets warmth in the latest residential interior design philosophies."
    },
    {
      title: "Why Silicon Valley is Rethinking Office Spaces",
      category: "Commercial",
      date: "January 14, 2026",
      image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Office+Spaces",
      excerpt: "The shift from open-plan spaces to hybrid collaborative ecosystems."
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="tracking-tight mb-4 text-zinc-900 dark:text-white">Latest Insights</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Stay updated with the latest news, trends, and perspectives from our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/3]">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center text-xs uppercase tracking-wider font-semibold space-x-2 text-zinc-500 mb-3">
                <span className="text-primary">{article.category}</span>
                <span>&bull;</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/blog" className="group relative inline-flex items-center justify-center gap-3 bg-white text-black hover:text-black font-bold py-4 px-10 overflow-hidden border border-zinc-200 tracking-widest uppercase transition-all duration-300 hover:scale-[1.02]">
            <span className="relative z-10 transition-colors duration-300">Read All Articles</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 h-full w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
