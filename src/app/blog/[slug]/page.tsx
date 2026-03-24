import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, Clock, User, ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import { getPostBySlug, getSuggestedPosts, getNavigationPosts } from "@/data/blogData";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const suggestedPosts = getSuggestedPosts(post.slug, 3);
  const { prev, next } = getNavigationPosts(post.slug);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Article Hero */}
      <header className="relative w-full min-h-[500px] mt-[80px] overflow-hidden flex flex-col justify-end pb-20">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full">
          {/* Breadcrumbs (Light) */}
          <nav className="flex items-center text-xs text-white/60 mb-8 font-semibold uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2" />
            <span className="text-primary truncate">{post.category}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-6 text-white/70 text-xs font-semibold uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:text-muted-foreground prose-blockquote:border-primary prose-blockquote:bg-muted/30 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share Buttons Mockup */}
            <div className="mt-16 pt-10 border-t border-border flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Share Article</span>
                <div className="flex gap-2">
                  {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 flex items-center justify-center border border-border hover:bg-accent hover:text-white hover:border-accent transition-all">
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] bg-muted px-4 py-2 text-foreground">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Previous / Next Article Navigation */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 border-t border-border">
              {prev ? (
                <Link 
                  href={`/blog/${prev.slug}`}
                  className="group p-8 border-b md:border-b-0 md:border-r border-border hover:bg-muted/50 transition-all flex flex-col"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4 flex items-center gap-2">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    Previous Article
                  </span>
                  <p className="font-serif font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <div className="p-8 border-b md:border-b-0 md:border-r border-border opacity-30 cursor-not-allowed">
                   <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4 flex items-center gap-2">
                    <ArrowLeft className="w-3 h-3" />
                    Previous Article
                  </span>
                  <p className="font-serif font-bold text-lg leading-tight">No earlier posts</p>
                </div>
              )}

              {next ? (
                <Link 
                  href={`/blog/${next.slug}`}
                  className="group p-8 hover:bg-muted/50 transition-all flex flex-col text-right items-end"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4 flex items-center gap-2">
                    Next Article
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <p className="font-serif font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    {next.title}
                  </p>
                </Link>
              ) : (
                <div className="p-8 border-border opacity-30 cursor-not-allowed text-right items-end flex flex-col">
                   <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4 flex items-center gap-2">
                    Next Article
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <p className="font-serif font-bold text-lg leading-tight">End of collection</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar / Info */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-12">
              {/* Newsletter Call to Action */}
              <div className="bg-foreground text-background p-10 overflow-hidden relative">
                <div className="relative z-10">
                  <h4 className="text-2xl font-serif font-bold mb-4">Stay informed</h4>
                  <p className="text-sm text-background/60 mb-8 leading-relaxed">
                    Subscribe to our newsletter to receive the latest insights and property updates directly in your inbox.
                  </p>
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full bg-background/10 border-b border-background/20 focus:border-background outline-none py-3 px-0 text-background text-sm transition-colors placeholder:text-background/30"
                    />
                    <button className="group/btn relative w-full bg-primary text-primary-foreground font-bold py-3 uppercase tracking-widest text-[11px] overflow-hidden transition-all duration-300">
                      <span className="relative z-10 transition-colors group-hover/btn:text-white">Subscribe Now</span>
                      <div className="absolute inset-0 bg-accent scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                    </button>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Suggested Articles */}
      <section className="bg-muted/20 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-bold mb-3">Recommended</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase">Suggested Reading</h2>
            </div>
            <Link 
              href="/blog"
              className="group/insights flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-all duration-300"
            >
              View All Insights
              <span className="relative w-8 h-8 rounded-full border border-[#243464]/30 flex items-center justify-center overflow-hidden transition-all duration-300">
                <span className="relative z-10 transition-colors duration-300 group-hover/insights:text-white">
                  <ArrowRight className="w-3 h-3" />
                </span>
                <div className="absolute inset-0 bg-accent scale-x-0 group-hover/insights:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {suggestedPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group block bg-transparent transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col">
                  <time className="text-sm font-sans text-muted-foreground/80 mb-3 tracking-tighter">
                    {new Date(post.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}
                  </time>
                  <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors leading-snug line-clamp-2 mb-4">
                    {post.title}
                  </h3>
                  <div className="mt-auto">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-all duration-300 border-b border-foreground/20 group-hover:border-primary pb-0.5">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
