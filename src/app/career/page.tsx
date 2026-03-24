"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronRight, Plus, Minus, Users, TrendingUp, Heart, Star, Target, Lightbulb, Send } from "lucide-react";
import { CustomSelect } from "@/components/ui/CustomSelect";

const values = [
  {
    icon: Heart,
    title: "People First",
    desc: "We put our team, customers, and communities at the very centre of everything we do.",
    color: "#BC9F81",
    bg: "#F3EEEB",
    num: "01",
  },
  {
    icon: TrendingUp,
    title: "Growth Driven",
    desc: "Continuous learning, mentorship programmes and internal mobility keep every team member growing.",
    color: "#BC9F81",
    bg: "#F3EEEB",
    num: "02",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We challenge conventions and leverage technology to redefine the real estate experience.",
    color: "#BC9F81",
    bg: "#F3EEEB",
    num: "03",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Cross-functional teamwork and open communication form the backbone of how we solve problems.",
    color: "#BC9F81",
    bg: "#F3EEEB",
    num: "04",
  },
  {
    icon: Target,
    title: "Purpose Driven",
    desc: "Every project we build is more than bricks and mortar — it is a home, a community, a legacy.",
    color: "#BC9F81",
    bg: "#F3EEEB",
    num: "05",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards of quality, integrity and professionalism.",
    color: "#BC9F81",
    bg: "#F3EEEB",
    num: "06",
  },
];

const vacancies = [
  {
    title: "Senior Sales Manager",
    department: "Sales & Business Development",
    location: "Indore, Madhya Pradesh",
    type: "Full Time",
    experience: "5–8 years",
    desc: "Lead our residential sales team, build relationships with high-net-worth clients, and drive revenue growth across our flagship projects in Madhya Pradesh.",
  },
  {
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Indore, Madhya Pradesh",
    type: "Full Time",
    experience: "2–4 years",
    desc: "Own our digital presence across social media, SEO, paid campaigns, and email marketing. Work closely with the creative team to craft compelling narratives.",
  },
  {
    title: "Site Engineer – Civil",
    department: "Engineering & Construction",
    location: "Indore, Madhya Pradesh",
    type: "Full Time",
    experience: "3–6 years",
    desc: "Oversee on-site construction activities, ensure compliance with engineering drawings and safety standards, and coordinate with contractors and vendors.",
  },
  {
    title: "CRM Executive",
    department: "Customer Relations",
    location: "Indore, Madhya Pradesh",
    type: "Full Time",
    experience: "1–3 years",
    desc: "Manage post-sale customer journeys, handle queries, and ensure a seamless experience from booking to handover. Proficiency in CRM tools required.",
  },
  {
    title: "Executive / Senior Executive – Purchase",
    department: "Procurement",
    location: "Indore, Madhya Pradesh",
    type: "Full Time",
    experience: "2–5 years",
    desc: "Manage vendor relationships, procurement processes, purchase orders and inventory tracking across multiple construction sites.",
  },
];

export default function CareerPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedPosition, setSelectedPosition] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (position?: string) => {
    if (position) {
      // Slugify: lowercase, replace spaces and special chars with hyphens, remove double hyphens
      const slug = position.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setSelectedPosition(slug);
    }
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#413F4C]">

      {/* Hero */}
      <div
        className="relative w-full h-[480px] mt-[80px] bg-cover bg-center flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 1vw), 0 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#BC9F81] mb-4">
            Find the career of your dreams
          </p>
          <h1 className="text-white uppercase tracking-widest font-bold drop-shadow-lg text-3xl md:text-5xl">
            We&apos;re more than<br className="hidden md:block" /> just a workplace.<br />
            We&apos;re a family.
          </h1>
          <div className="w-12 h-[2px] mx-auto bg-[#BC9F81] mt-8"></div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-8">
        <nav className="flex flex-wrap items-center text-sm text-[#413F4C]/60 font-medium">
          <Link href="/" className="hover:text-[#BC9F81] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#BC9F81] font-bold">Career</span>
        </nav>
      </div>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC9F81] mb-4">Join Our Team</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#413F4C] mb-4">
              Help Us Build the <span className="text-[#BC9F81]">Future of Real Estate</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#413F4C] mb-6"></div>
            <p className="text-[#413F4C]/70 font-medium leading-snug text-base">
              Join the Silicon team, where passion meets purpose. Be part of a dynamic, growth-driven culture that values innovation, collaboration, and personal development while crafting dream homes for our customers.
            </p>
            <div className="mt-10 flex flex-wrap gap-10">
              {[["50+", "Team Members"], ["10+", "Active Projects"], ["15+", "Years Legacy"]].map(([num, label]) => (
                <div key={label} className="border-l-2 border-[#BC9F81] pl-4">
                  <p className="text-3xl font-bold text-[#BC9F81]">{num}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#413F4C]/70 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="w-full aspect-[4/3] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('https://placehold.co/800x600/E6E9EE/9AA0A6.png?text=Our+Team')" }}
          />
        </div>
      </section>

      {/* Why Join Us */}
      <section
        className="relative py-24 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/E6E9EE/9AA0A6.png?text=Office+Environment')" }}
      >
        <div className="absolute inset-0 bg-[#161a1d]/90" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC9F81] mb-4">Why Silicon</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Life at Silicon Real Estate</h2>
            <div className="w-10 h-[2px] bg-[#BC9F81] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc, color, bg, num }) => (
              <div
                key={title}
                className="group relative bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ borderLeft: `4px solid ${color}` }}
              >
                <div className="absolute top-4 right-5 text-5xl font-black opacity-[0.04] text-[#413F4C] select-none">{num}</div>
                <div className="p-8">
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: bg, color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#413F4C] mb-3 group-hover:text-[#BC9F81] transition-colors">{title}</h3>
                  <p className="text-[#413F4C]/70 font-medium text-sm leading-snug">{desc}</p>
                  <div className="mt-5 w-6 h-[2px] transition-all duration-300 group-hover:w-12" style={{ backgroundColor: color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 bg-[#F3EEEB]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

          {/* Left image */}
          <div className="hidden lg:block lg:col-span-2">
            <div
              className="w-full aspect-[3/4] bg-cover bg-center sticky top-28"
              style={{ backgroundImage: "url('https://placehold.co/600x800/E6E9EE/9AA0A6.png?text=Silicon+Careers')" }}
            />
          </div>

          {/* Right — Vacancy list */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#BC9F81] mb-4">Open Roles</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#413F4C] mb-3">Current Vacancies</h2>
            <div className="w-10 h-[2px] bg-[#413F4C] mb-8"></div>

            <div className="space-y-0 divide-y divide-[#413F4C]/10">
              {vacancies.map((job, i) => (
                <div key={i} className="group">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                  >
                    <div>
                      <p className="font-bold text-[#413F4C] text-base group-hover:text-[#BC9F81] transition-colors">
                        {job.title}
                      </p>
                      <p className="text-sm text-[#413F4C]/60 font-medium mt-0.5">
                        {job.department} · {job.type}
                      </p>
                    </div>
                    <span className="shrink-0 w-8 h-8 border border-[#413F4C]/20 group-hover:border-[#BC9F81] group-hover:bg-[#BC9F81] group-hover:text-[#413F4C] text-[#413F4C]/50 flex items-center justify-center transition-all duration-200">
                      {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {openIndex === i && (
                    <div className="pb-6 pr-12 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-dotted border-border/70 px-3 py-1.5">
                          📍 {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-dotted border-border/70 px-3 py-1.5">
                          🕐 {job.experience} exp.
                        </span>
                      </div>
                      <p className="text-[#413F4C]/70 font-medium text-sm leading-snug mb-5">{job.desc}</p>
                      <button
                        onClick={() => scrollToForm(job.title)}
                        className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-[#BC9F81] to-[#AD9266] text-[#413F4C] font-bold py-2.5 px-8 tracking-widest uppercase text-xs transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                      >
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm text-[#413F4C]/70 font-medium border border-[#413F4C]/10 bg-[#F3EEEB] p-4">
              Don&apos;t see a role that fits? Send your CV to{" "}
              <a href="mailto:careers@siliconrealestate.co.in" className="text-[#BC9F81] hover:text-[#413F4C] font-bold inline-flex items-center gap-1 border-b border-dotted border-[#BC9F81]/50 hover:border-[#413F4C] transition-colors">
                careers@siliconrealestate.co.in
              </a>{" "}
              and we&apos;ll keep your profile on file for future opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section
        ref={formRef}
        className="relative py-28 bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1080/E6E9EE/9AA0A6.png?text=Apply+Now')",
          clipPath: "polygon(0 2vw, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[#161a1d]/92" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="mb-12">
            <h2 className="inline-block border-b border-white/20 pb-4 text-white mb-6 tracking-wide">
              Let&apos;s <span className="underline underline-offset-8 decoration-[#E6E9EE]">work together</span>
            </h2>
            <p className="text-white/60 md:text-base font-light max-w-xl mx-auto">
              Interested in working with us? Fill out the form below and we will be in touch shortly!
            </p>
          </div>

          <form className="text-left space-y-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
              {/* Full Name */}
              <div className="relative group">
                <input type="text" id="fullName" className="peer w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-white placeholder-transparent transition-colors" placeholder="Full Name *" required />
                <label htmlFor="fullName" className="absolute left-0 top-2 text-xs font-semibold text-white/50 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white/70 cursor-text">Full Name *</label>
              </div>

              {/* Email */}
              <div className="relative group">
                <input type="email" id="email" className="peer w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-white placeholder-transparent transition-colors" placeholder="Email Address *" required />
                <label htmlFor="email" className="absolute left-0 top-2 text-xs font-semibold text-white/50 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white/70 cursor-text">Email Address *</label>
              </div>

              {/* Phone */}
              <div className="relative group">
                <input type="tel" id="career-phone" className="peer w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-white placeholder-transparent transition-colors" placeholder="Phone Number *" required />
                <label htmlFor="career-phone" className="absolute left-0 top-2 text-xs font-semibold text-white/50 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white/70 cursor-text">Phone Number *</label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Position Applying For */}
              <CustomSelect
                id="position"
                label="Position Applying For"
                options={[
                  { value: "senior-sales-manager", label: "Senior Sales Manager" },
                  { value: "digital-marketing-executive", label: "Digital Marketing Executive" },
                  { value: "site-engineer-civil", label: "Site Engineer – Civil" },
                  { value: "crm-executive", label: "CRM Executive" },
                  { value: "executive-senior-executive-purchase", label: "Executive / Senior Executive – Purchase" },
                  { value: "other", label: "Other / General Application" },
                ]}
                value={selectedPosition}
                onChange={setSelectedPosition}
                required
                theme="dark"
              />

              {/* CV Upload Mockup */}
              <div className="relative group">
                <div className="flex items-center gap-4 border-b border-white/20 py-2">
                  <span className="text-sm text-white/30 truncate flex-1">Upload your CV (PDF/DOC)</span>
                  <label className="shrink-0 cursor-pointer bg-white/10 hover:bg-white/20 text-white text-[10px] uppercase tracking-widest px-3 py-1 transition-colors border border-white/20">
                    Browse
                    <input type="file" className="hidden" />
                  </label>
                </div>
                <label className="absolute left-0 -top-4 text-xs font-semibold text-white/60 uppercase tracking-widest transition-all">Curriculum Vitae *</label>
              </div>
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea id="career-message" rows={4} className="peer w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-white placeholder-transparent transition-colors resize-none" placeholder="Cover Letter / Message"></textarea>
              <label htmlFor="career-message" className="absolute left-0 top-2 text-xs font-semibold text-white/50 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white/70 cursor-text">Cover Letter / Message</label>
            </div>

            <div className="text-center pt-8">
              <button type="submit" className="group relative bg-white text-black hover:text-white font-bold py-4 px-20 overflow-hidden tracking-widest uppercase transition-all duration-300">
                <span className="relative z-10 inline-flex items-center gap-2">
                  Submit Application
                  <Send className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
              </button>
            </div>
          </form>
        </div>
      </section>

    </main>
  );
}
