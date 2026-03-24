"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, Search, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";
import { CustomSelect } from "@/components/ui/CustomSelect";

const CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];
const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    let result = BLOG_POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === "latest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <section 
        className="relative w-full h-[400px] mt-[80px] bg-cover bg-center flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-accent"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1080/E6E9EE/9AA0A6.png?text=Blog+Insights')",
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 2vw), 0 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/5" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-black/60 font-semibold mb-4">
            Knowledge & Perspectives
          </p>
          <h1 className="text-black mb-6 leading-tight">
            The Silicon Blog
          </h1>
          <div className="w-20 h-[2px] mx-auto bg-black/20"></div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <nav className="flex items-center text-sm text-muted-foreground font-medium">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-accent font-bold uppercase tracking-wider">Blog</span>
        </nav>
      </div>

      {/* Filters & Search */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-end border-b border-border pb-10">
          <div className="w-full lg:max-w-md">
            <label className="block text-xs font-semibold uppercase tracking-widest mb-3 text-muted-foreground">
              Search Articles
            </label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Keywords..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2.5 pl-0 pr-10 text-foreground transition-colors placeholder:text-muted-foreground/50"
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
            </div>
          </div>

          <div className="flex flex-wrap gap-6 w-full lg:w-auto">
            <div className="min-w-[180px]">
              <CustomSelect 
                id="category"
                label="Category"
                theme="light"
                options={CATEGORIES.map(c => ({ value: c, label: c }))}
                value={selectedCategory}
                onChange={(val) => {
                  setSelectedCategory(val);
                  setCurrentPage(1);
                }}
              />
            </div>
            <div className="min-w-[180px]">
              <CustomSelect 
                id="sort"
                label="Sort By"
                theme="light"
                options={[
                  { value: "latest", label: "Latest First" },
                  { value: "oldest", label: "Oldest First" }
                ]}
                value={sortBy}
                onChange={(val) => {
                  setSortBy(val);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {paginatedPosts.map((post) => (
              <article key={post.id} className="group flex flex-col h-full bg-transparent transition-all duration-300">
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </Link>
                
                <div className="flex flex-col flex-1">
                  <time className="text-sm font-sans text-muted-foreground/80 mb-4 tracking-tighter">
                    {new Date(post.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}
                  </time>

                  <h3 className="mb-4 leading-[1.2] group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-muted-foreground/80 text-[13px] leading-relaxed mb-8 line-clamp-3 font-sans">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-block text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-all duration-300 border-b border-accent/20 hover:border-accent pb-1"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-border">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters to find what you&apos;re looking for.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 text-accent font-bold uppercase tracking-widest text-xs border-b border-accent/30 hover:border-accent transition-all"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-3">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="group/pbtn relative w-12 h-12 flex items-center justify-center border border-border overflow-hidden disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <span className="relative z-10 transition-colors group-hover/pbtn:text-white group-disabled/pbtn:group-hover/pbtn:text-foreground">
                <ChevronRight className="w-5 h-5 rotate-180" />
              </span>
              <div className="absolute inset-0 bg-accent scale-x-0 group-hover/pbtn:scale-x-100 transition-transform origin-left duration-300 ease-out group-disabled/pbtn:hidden"></div>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`group/pbtn relative w-12 h-12 flex items-center justify-center border font-bold text-sm overflow-hidden transition-all ${
                  currentPage === page 
                  ? "bg-accent border-accent text-white" 
                  : "border-border"
                }`}
              >
                <span className={`relative z-10 transition-colors ${currentPage !== page ? "group-hover/pbtn:text-white" : ""}`}>
                  {page.toString().padStart(2, '0')}
                </span>
                {currentPage !== page && (
                  <div className="absolute inset-0 bg-accent scale-x-0 group-hover/pbtn:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                )}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="group/pbtn relative w-12 h-12 flex items-center justify-center border border-border overflow-hidden disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <span className="relative z-10 transition-colors group-hover/pbtn:text-white group-disabled/pbtn:group-hover/pbtn:text-foreground">
                <ChevronRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-accent scale-x-0 group-hover/pbtn:scale-x-100 transition-transform origin-left duration-300 ease-out group-disabled/pbtn:hidden"></div>
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
