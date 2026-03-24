"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, Send } from "lucide-react";
import { CustomSelect } from "@/components/ui/CustomSelect";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [enquiryFor, setEnquiryFor] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#413F4C]">

      {/* Hero */}
      <div
        className="relative w-full h-[420px] mt-[80px] bg-cover bg-center flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 1vw), 0 100%)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Silicon Real Estate</p>
          <h1 className="text-white uppercase tracking-widest font-bold text-3xl md:text-5xl drop-shadow-lg mb-4">
            Contact Us
          </h1>
          <div className="w-12 h-[2px] mx-auto bg-[#020D2F] mb-6"></div>
          <p className="text-white/80 font-medium text-base md:text-lg leading-snug max-w-2xl mx-auto">
            Our businesses are designed and built with people at the centre.<br className="hidden md:block" />
            Whether you have a question, a requirement, or want to explore an opportunity, we would love to connect.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-8">
        <nav className="flex flex-wrap items-center text-sm text-[#413F4C]/60 font-medium">
          <Link href="/" className="hover:text-[#020D2F] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#020D2F] font-bold">Contact Us</span>
        </nav>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Left: Office Info */}
          <div className="lg:col-span-2 space-y-8">

            {/* Head Office */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#413F4C]/60 mb-4">Head Office</h3>
              <div className="flex gap-4 items-start">
                <span className="mt-1 w-9 h-9 rounded-full bg-[#020D2F]/20 flex items-center justify-center text-[#020D2F] shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-bold text-[#413F4C] text-base leading-tight mb-1">Silicon Real Estate</p>
                  <p className="text-[#413F4C]/70 font-medium text-sm leading-snug">
                    Prestige Towers, 3rd Floor,<br />
                    Race Course Road, Indore,<br />
                    Madhya Pradesh — 452 001, India
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#413F4C]/10 w-full" />

            {/* Phone */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#413F4C]/60 mb-4">For Sales</h3>
              <div className="flex gap-4 items-start">
                <span className="mt-1 w-9 h-9 rounded-full bg-[#020D2F]/20 flex items-center justify-center text-[#020D2F] shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <a href="tel:18001213344" className="font-bold text-[#413F4C] hover:text-[#020D2F] transition-colors text-base">1800 121 3344</a>
                  <p className="text-[#413F4C]/60 font-medium text-sm mt-0.5">Toll Free · Mon — Sat, 9am — 7pm</p>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#413F4C]/10 w-full" />

            {/* Email */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#413F4C]/60 mb-4">Email Us</h3>
              <div className="flex gap-4 items-start">
                <span className="mt-1 w-9 h-9 rounded-full bg-[#020D2F]/20 flex items-center justify-center text-[#020D2F] shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">General Enquiries</p>
                    <a href="mailto:info@siliconrealestate.co.in" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-accent/40 hover:border-accent transition-colors text-sm">
                      info@siliconrealestate.co.in
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Grievances</p>
                    <a href="mailto:grievance@siliconrealestate.co.in" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-accent/40 hover:border-accent transition-colors text-sm">
                      grievance@siliconrealestate.co.in
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#413F4C]/10 w-full" />

            {/* Social */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#413F4C]/60 mb-4">Follow Us</h3>
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-[#413F4C]/20 hover:border-[#020D2F] hover:bg-[#020D2F] hover:text-[#413F4C] text-[#413F4C]/50 flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-2">Send Us a Message</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#413F4C] mb-3">Get in Touch</h2>
              <div className="w-10 h-[2px] bg-[#413F4C] mb-4"></div>
              <p className="text-[#413F4C]/70 font-medium text-sm leading-snug">Fill in the form below and our team will get back to you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-foreground placeholder-transparent transition-colors"
                    placeholder="First Name *"
                    required
                  />
                  <label htmlFor="firstName" className="absolute left-0 top-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">First Name *</label>
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground placeholder-transparent transition-colors"
                    placeholder="Last Name *"
                    required
                  />
                  <label htmlFor="lastName" className="absolute left-0 top-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Last Name *</label>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground placeholder-transparent transition-colors"
                    placeholder="Email Address *"
                    required
                  />
                  <label htmlFor="email" className="absolute left-0 top-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Email Address *</label>
                </div>
                <div className="relative group">
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground placeholder-transparent transition-colors"
                    placeholder="Phone Number *"
                    required
                  />
                  <label htmlFor="phone" className="absolute left-0 top-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Phone Number *</label>
                </div>
              </div>

              {/* Enquiry For €” Custom Select */}
              <CustomSelect
                id="enquiryFor"
                label="Enquiry For"
                options={[
                  { value: "residential", label: "Residential Property" },
                  { value: "commercial", label: "Commercial Property" },
                  { value: "plot", label: "Plot / Land" },
                  { value: "investment", label: "Investment Advice" },
                  { value: "other", label: "Other" },
                ]}
                value={enquiryFor}
                onChange={setEnquiryFor}
                required
                theme="light"
              />

              {/* Message */}
              <div className="relative group">
                  <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="peer w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-foreground placeholder-transparent transition-colors resize-none"
                  placeholder="Your Message"
                />
                <label htmlFor="message" className="absolute left-0 top-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Your Message</label>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="group relative bg-gradient-to-r from-[#020D2F] to-[#413F4C] text-white/90 hover:from-[#413F4C] hover:to-[#413F4C] hover:text-white font-bold py-4 px-12 tracking-widest uppercase transition-all duration-500 inline-flex items-center gap-3"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="w-full mt-6">
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-2">Our Location</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#413F4C] mb-1">Find Us</h2>
          <div className="w-8 h-[2px] bg-[#413F4C] mb-3"></div>
          <p className="text-[#413F4C]/70 font-medium text-sm">Visit our office in Indore, Madhya Pradesh</p>
        </div>
        <div className="w-full h-[420px] relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Silicon Real Estate Office Location"
          />
        </div>
      </section>

      {/* Bottom CTA parallax */}
      <section
        className="relative py-28 bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1080/E6E9EE/9AA0A6.png?text=Dream+Homes')",
          clipPath: "polygon(0 2vw, 100% 0, 100% 100%, 0 100%)"
        }}
      >
        <div className="absolute inset-0 bg-[#161a1d]/88" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-white mb-6 tracking-wide">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-white/60 mb-10 md:text-base font-light max-w-xl mx-auto">
            Explore our portfolio of premium residential and commercial properties across Madhya Pradesh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="group relative bg-white text-black hover:text-white font-bold py-3.5 px-10 overflow-hidden tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2 justify-center"
            >
              <span className="relative z-10">Explore Projects</span>
              <div className="absolute inset-0 h-full w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
            </Link>
            <a
              href="tel:18001213344"
              className="group relative bg-transparent border border-white/40 text-white font-bold py-3.5 px-10 overflow-hidden tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2 justify-center"
            >
              <Phone className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Call Us Now</span>
              <div className="absolute inset-0 h-full w-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}


