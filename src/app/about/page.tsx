import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "About Silicon - Shaping Indore's Skyline",
  description: "Learn about Silicon's history, core values, and our commitment to building premium real estate in Indore.",
};

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "50+", label: "Projects Completed" },
  { value: "10+", label: "Mn. Sq. Ft. Delivered" },
  { value: "5000+", label: "Happy Families" },
];

const pillars = [
  {
    title: "A Legacy of Excellence",
    description:
      "At Silicon, our legacy of excellence is forged by the pioneering spirit of our seasoned team, the partnerships we cultivate with world-class collaborators, and the dynamic processes that consistently propel us beyond conventional boundaries.",
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Excellence",
    imageAlt: "Silicon skyline Indore",
    flip: false,
  },
  {
    title: "Crafting Timeless Elegance",
    description:
      "We hold an unwavering belief that quality is not just a destination, but an ongoing voyage. Each residence we create is meticulously crafted with the same attention to detail as if it were our very own. At Silicon, we nurture a culture of quality, employing innovative technologies and handpicking only the most exquisite materials.",
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Timeless+Elegance",
    imageAlt: "Elegant interior design",
    flip: true,
  },
  {
    title: "Sophistication on a Grand Scale",
    description:
      "Silicon crafts both residential and commercial real estate developments, catering to a discerning spectrum of lifestyle preferences, across several geographies in Madhya Pradesh.",
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Sophistication",
    imageAlt: "Grand lobby interior",
    flip: false,
  },
  {
    title: "Building a Sustainable Legacy",
    description:
      "Our commitment extends beyond the realm of luxury living. We are dedicated to leaving a lasting, positive impact on the environment and society at large. Through innovative design and sustainable practices, we are increasing our carbon footprint and creating residences that stand resilient in the face of future challenges posed by climate change.",
    image: "https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Sustainable+Legacy",
    imageAlt: "Sustainable luxury development",
    flip: true,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#413F4C]">
      <PageHeader
        title="About Silicon"
        breadcrumbs={[{ label: "About" }]}
      />

      {/* ”€”€ About Us: text + stats ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€ */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Eye-brow */}
        <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">
          About Silicon
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#413F4C] mb-4">
          Indore's Most <span className="text-[#020D2F]">Trusted Developer</span>
        </h2>
        <div className="w-10 h-[2px] bg-[#413F4C] mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy block */}
          <div className="space-y-5">
            <p className="text-[#413F4C]/80 font-medium leading-snug">
              Over the last two and a half decades, Silicon has firmly established itself as one
              of the leading and most successful developers of real estate in Indore by imprinting
              its indelible mark across all asset classes. Founded with a vision to transform
              Madhya Pradesh's skyline, every project is a testament to our craftsmanship and
              commitment.
            </p>
            <p className="text-[#413F4C]/80 font-medium leading-snug">
              The company has diversified over time into a number of residential, commercial, and
              mixed-use developments, each of them spearheaded by individuals with adroit capacity.
              Silicon is now synonymous with innovation, quality, and on-time delivery.
            </p>
            <p className="text-[#413F4C]/80 font-medium leading-snug">
              Silicon today has become a name synonymous with trust. We pride ourselves on
              delivering not just beautiful structures but spaces that enrich the everyday lives of
              thousands of families across Indore and beyond.
            </p>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 pt-4 lg:pt-8">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-[#020D2F] pl-6">
                <p className="text-5xl md:text-6xl font-bold text-[#020D2F]">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-[#413F4C]/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ”€”€ OUR STORY tagline ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€ */}
      <section className="py-20 bg-[#F3EEEB]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#413F4C] mb-4">
            Raising Expectations for <span className="text-[#020D2F]">Real Estate</span>
          </h2>
          <div className="w-10 h-[2px] bg-[#413F4C] mx-auto"></div>
        </div>
      </section>

      {/* ”€”€ Alternating pillars ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€ */}
      <section className="pb-28 bg-white">
        {pillars.map((pillar, i) => (
          <div
            key={i}
            className={`flex flex-col md:grid md:grid-cols-2 items-center ${i % 2 === 0 ? "bg-white" : "bg-[#F3EEEB]"}`}
          >
            {/* Image */}
            <div
              className={`relative w-full aspect-[4/3] ${
                pillar.flip ? "md:order-2" : "md:order-1"
              }`}
            >
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div
              className={`px-8 md:px-16 py-16 flex flex-col justify-center ${
                pillar.flip ? "md:order-1" : "md:order-2"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-3">Our Pillars</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#413F4C] mb-4">
                {pillar.title}
              </h3>
              <div className="w-8 h-[2px] bg-[#413F4C] mb-6"></div>
              <p className="text-[#413F4C]/80 font-medium leading-snug">{pillar.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}


