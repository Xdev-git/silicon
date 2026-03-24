import { PageHeader } from "@/components/layout/PageHeader";
import {
  ThumbsUp,
  Briefcase,
  Award,
  Eye,
  Zap,
  CheckCircle,
  Handshake,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Our Impact €“ Values & Sustainability | Silicon",
  description:
    "Discover Silicon's commitment to values, vision, mission, sustainability, and creating a positive impact in Indore.",
};

const values = [
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    desc: "Ensuring customer satisfaction through delivery of true value in all our dealings.",
  },
  {
    icon: Briefcase,
    title: "Ethical Business Practices",
    desc: "Conducting each activity in the business in the most fair and just manner.",
  },
  {
    icon: Award,
    title: "Excellence & Perfection",
    desc: "Creating systems and processes to drive excellence, and to encourage perfection in all we do.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Being transparent in our dealings, so as to set right expectations and promote strong relationships.",
  },
  {
    icon: Zap,
    title: "Change Leadership",
    desc: "Willingness to adopt new processes, practices and technologies to give our customers the best possible products and services.",
  },
  {
    icon: CheckCircle,
    title: "Commitment",
    desc: "Delivering what is promised, ontime, everytime.",
  },
  {
    icon: Handshake,
    title: "Respect For Individuals & Relations",
    desc: "Treating all with dignity, sensitivity and honour.",
  },
  {
    icon: Globe,
    title: "Social Responsibility",
    desc: "Institutionalising sustainable practices; The drive to act for the benefit of society.",
  },
];

const envItems = [
  {
    caption:
      "Our decarbonisation initiatives are designed to lead the transition to a low-carbon future for the real estate industry by demonstrating that growth can be decoupled from increased emissions.",
  },
  {
    caption:
      "Our resilience initiatives focus on water resilience, biodiversity and asset safety; mitigating future climate risks through data modeling and climate-conscious design.",
  },
  {
    caption:
      "The Silicon Net Zero Accelerator is a pioneering platform through which we develop actionable initiatives in five key areas: Embodied Carbon, Passive Design Solutions, Efficient Energy, Renewable Energy, and Green Mobility.",
  },
];

export default function OurImpactPage() {
  return (
    <main className="min-h-screen bg-white text-[#413F4C] font-sans leading-relaxed">
      <PageHeader
        title="Our Impact"
        breadcrumbs={[{ label: "Our Impact" }]}
      />

      {/* ”€”€ Our Values ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€ */}
      <section className="py-20 px-6 md:px-12 lg:px-24 text-center bg-[#F3EEEB] border-b border-[#413F4C]/10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Our Guiding Principles</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#413F4C] mb-4">
          Our <span className="text-[#020D2F]">Values</span>
        </h2>
        <div className="w-10 h-[2px] bg-[#413F4C] mx-auto mb-6"></div>
        <p className="text-[#413F4C]/70 font-medium max-w-2xl mx-auto">
          At Silicon, we are governed by the values that sets our course of action across all our
          business verticals.
        </p>
      </section>

      {/* ”€”€ Vision / Image / Mission 3-panel €” constrained width ”€”€ */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#413F4C]/10">
          {/* Vision */}
          <div className="bg-gradient-to-br from-[#020D2F] to-[#413F4C] text-white px-8 py-10 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#413F4C]/60 mb-3">
              Our Vision
            </p>
            <p className="md:text-base leading-snug font-bold">
              To do better than what we have done and deliver great value to our customers while
              shaping the skyline of Indore.
            </p>
          </div>

          {/* Center Image */}
          <div className="bg-gray-200 min-h-[220px] relative overflow-hidden">
            <img
              src="https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Excellence"
              alt="Excellence"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mission */}
          <div className="bg-[#413F4C] text-white px-8 py-10 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-3">
              Mission
            </p>
            <p className="md:text-base leading-snug font-bold">
              To be a trusted brand in Real Estate and win customer confidence through Trust,
              Quality, and Innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ”€”€ Values that shape us ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€ */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F3EEEB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#413F4C] mb-4">Values That <span className="text-[#020D2F]">Shape Us</span></h2>
            <div className="w-10 h-[2px] bg-[#413F4C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="flex flex-col gap-3 group bg-white p-6 border border-[#413F4C]/10 hover:-translate-y-2 transition-all duration-300 hover:border-[#020D2F]/40 hover:shadow-sm">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#F3EEEB] rounded-full mb-1">
                    <Icon className="w-5 h-5 text-[#020D2F] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold text-[#413F4C] group-hover:text-[#020D2F] transition-colors">{v.title}</h3>
                  <p className="text-xs text-[#413F4C]/70 font-medium leading-snug">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ”€”€ Creating a positive impact ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€ */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#413F4C] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Our Purpose</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Creating a <span className="text-[#020D2F]">Positive Impact</span>
          </h2>
          <div className="w-10 h-[2px] bg-[#020D2F] mx-auto"></div>
          <p className="text-white/70 font-medium leading-snug">
            Silicon is committed to using our capabilities to create a positive impact on the
            environment and on society. As we grow, so does the scale of the impact we can make.
          </p>
          <p className="text-white/70 font-medium leading-snug">
            Through the{" "}
            <strong className="text-[#020D2F]">Silicon Foundation</strong>, we implement
            transformative projects in Education, Women's Empowerment, and Sustainable Urbanization
            to create a positive impact on the environment and society. We are recognized in
            sustainability rankings for the work we do to address the environmental impact of the
            built environment.
          </p>
        </div>
      </section>

      {/* ”€”€ Environmental Impact ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€ */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Sustainability</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#413F4C] mb-4">
              Environmental <span className="text-[#020D2F]">Impact</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#413F4C] mx-auto mb-6"></div>
            <p className="text-[#413F4C]/70 font-medium max-w-2xl mx-auto leading-snug">
              Our approach to sustainable construction focuses on reducing carbon emissions
              (decarbonisation) and on creating assets that will be resilient to future climate
              change (resilience).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {envItems.map((item, i) => (
              <div key={i} className="flex flex-col gap-4 group">
                <div className="w-full aspect-[4/3] relative overflow-hidden">
                  <img
                    src={`https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Impact+${i+1}`}
                    alt={`Impact ${i+1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-[#413F4C]/70 font-medium leading-snug">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}



