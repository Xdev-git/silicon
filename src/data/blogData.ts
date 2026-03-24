export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "redefining-luxury-living-in-indore",
    title: "Redefining Luxury Living in Indore: The Silicon Standard",
    excerpt: "Explore how Silicon Real Estate is setting new benchmarks for premium residential projects in Central India.",
    content: `
      <p>Indore's real estate landscape is undergoing a massive transformation. No longer just a commercial hub, the city is now demanding high-end residential experiences that rival those in Tier-1 metros.</p>
      <h2>The Shift Towards Premium</h2>
      <p>At Silicon, we've observed a significant shift in what homeowners look for. It's no longer just about the square footage; it's about the lifestyle, the community, and the attention to detail. Our latest projects focus on biophilic design, smart home integration, and sustainable architecture.</p>
      <blockquote>"Luxury is not a price point, it's an experience of uncompromising quality and thoughtful design."</blockquote>
      <p>From expansive green spaces to state-of-the-art clubhouses, every element is curated to provide a sense of refined living. We believe that a home is more than just walls; it's a sanctuary where you build memories for a lifetime.</p>
    `,

    date: "2024-03-05",
    category: "Real Estate",
    image: "https://placehold.co/1200x800/eeeeee/999999.png?text=Luxury+Living",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "sustainable-architecture-trends-2024",
    title: "Sustainable Architecture Trends to Watch in 2024",
    excerpt: "Sustainability is no longer an option but a necessity. Learn about the green building practices we use.",
    content: `
      <p>The construction industry is one of the largest contributors to carbon emissions. In 2024, the focus has shifted entirely towards minimizing the environmental footprint of new developments.</p>
      <h2>Materials and Methods</h2>
      <p>We are increasingly using recycled materials, low-VOC paints, and energy-efficient lighting systems. Solar panels and rainwater harvesting are now standard features across our projects.</p>
      <p>Beyond the technical aspects, we design for longevity. A building that lasts longer is inherently more sustainable than one that needs frequent repairs or early demolition.</p>
    `,

    date: "2024-02-28",
    category: "Architecture",
    image: "https://placehold.co/1200x800/eeeeee/333333.png?text=Sustainability",
    readTime: "4 min read",
  },
  {
    id: "3",
    slug: "navigating-your-home-buying-journey",
    title: "Navigating Your Home Buying Journey: A Step-by-Step Guide",
    excerpt: "First-time home buyer? This guide covers everything from budgeting to legal documentation.",
    content: `
      <p>Buying a home is one of the most significant decisions you'll ever make. It can be overwhelming, but with the right guidance, it becomes a rewarding journey.</p>
      <h2>Step 1: Define Your Budget</h2>
      <p>Before looking at properties, understand your financial capability. Consider not just the purchase price but also registration fees, GST, and future maintenance costs.</p>
      <h2>Step 2: Location is Key</h2>
      <p>Proximity to work, schools, and healthcare facilities should be prioritized. Research the infrastructure development planned for the area.</p>
    `,
    date: "2024-02-15",
    category: "Guide",
    image: "https://placehold.co/1200x800/eeeeee/666666.png?text=Building+Future",
    readTime: "7 min read",
  },
  {
    id: "4",
    slug: "the-future-of-commercial-spaces",
    title: "The Future of Commercial Spaces: Beyond the Office",
    excerpt: "How the concept of work is changing and what it means for office building design in the next decade.",
    content: `
      <p>The way we work has changed forever. The traditional office is evolving into a 'hub' for collaboration rather than just a place to sit with a laptop.</p>
      <h2>Flexibility and Wellness</h2>
      <p>Modern commercial spaces must prioritize employee wellness. This includes better air quality, access to natural light, and informal breakout zones.</p>
      <p>Hybrid work models mean that offices need to be more versatile, supporting both focused work and large team meetings seamlessly.</p>
    `,
    date: "2024-01-20",
    category: "Commercial",
    image: "https://placehold.co/1200x800/eeeeee/999999.png?text=Modern+Office",
    readTime: "6 min read",
  },
  {
    id: "5",
    slug: "investment-opportunities-in-central-india",
    title: "Investment Opportunities in Central India Real Estate",
    excerpt: "Why Indore and surrounding regions are becoming the new hotspots for real estate investors.",
    content: `
      <p>Central India is witnessing unprecedented growth. Improved connectivity, industrial corridors, and a burgeoning IT sector are driving real estate prices up.</p>
      <h2>Why Indore?</h2>
      <p>With its high ranking in cleanliness and ease of living, Indore is attracting professionals from across the country. The ROI on both residential and commercial properties remains strong.</p>
    `,
    date: "2024-01-10",
    category: "Investment",
    image: "https://placehold.co/1200x800/eeeeee/111111.png?text=Investment",
    readTime: "5 min read",
  },
];

export function getPosts(page: number = 1, limit: number = 6, sortBy: 'latest' | 'oldest' = 'latest') {
  const sorted = [...BLOG_POSTS].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortBy === 'latest' ? dateB - dateA : dateA - dateB;
  });

  const start = (page - 1) * limit;
  return {
    posts: sorted.slice(start, start + limit),
    total: BLOG_POSTS.length,
    totalPages: Math.ceil(BLOG_POSTS.length / limit),
  };
}

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find(p => p.slug === slug);
}

export function getSuggestedPosts(currentSlug: string, count: number = 3) {
  return BLOG_POSTS
    .filter(p => p.slug !== currentSlug)
    .slice(0, count);
}

export function getNavigationPosts(currentSlug: string) {
  const index = BLOG_POSTS.findIndex(p => p.slug === currentSlug);
  return {
    prev: index > 0 ? BLOG_POSTS[index - 1] : null,
    next: index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1] : null,
  };
}
