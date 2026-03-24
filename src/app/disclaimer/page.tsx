import { Metadata } from "next";
import Link from "next/link";
import { LegalPageForm } from "@/components/legal/LegalPageForm";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | Silicon Real Estate",
  description: "Disclaimer for Silicon Real Estate website.",
};

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy", active: false },
  { name: "Terms & Conditions", href: "/terms-of-use", active: false },
  { name: "Disclaimer", href: "/disclaimer", active: true },
  { name: "Cookie Policy", href: "/cookies", active: false },
  { name: "Grievance Redressal", href: "/grievance-redressal", active: false },
  { name: "RERA Disclosure", href: "/rera-disclosure", active: false },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white pb-0 font-sans text-[#413F4C]">

      {/* Hero Image */}
      <div
        className="relative w-full h-[380px] mt-[80px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 1vw), 0 100%)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        <div className="relative z-10">
          <h1 className="text-white uppercase tracking-widest font-bold mb-4 drop-shadow-lg text-2xl md:text-4xl">
            Disclaimer
          </h1>
          <div className="w-12 h-[2px] mx-auto bg-[#020D2F]"></div>
        </div>
      </div>

      {/* Sub menu */}
      <div className="w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] relative z-20">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 font-semibold uppercase tracking-wider">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`duration-200 transition-colors ${link.active
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-[#413F4C]/60 font-medium hover:text-[#413F4C]"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-10">

        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center text-sm text-muted-foreground font-medium mb-8">
          <Link href="/" className="hover:text-[#020D2F] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#020D2F] font-bold">Disclaimer</span>
        </nav>

        {/* Content Section */}
        <div className="space-y-8 text-foreground/90 leading-relaxed md:text-base">

          {/* Intro */}
          <section>
            <p className="mb-4">
              <strong>Effective Date: March 10, 2026</strong>
            </p>
            <p className="mb-4">
              The information provided on{" "}
              <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-accent/50 hover:border-accent transition-colors">
                https://siliconrealestate.co.in
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>{" "}
              ("Website") regarding Silicon Real Estate, its projects, property offerings, plans, layouts, and related details is subject to change without prior notice.
            </p>
            <p className="bg-black/5 p-4 border border-dotted border-black/10">
              While reasonable efforts are made to ensure that the information presented on the website is accurate and updated, Silicon Real Estate does not guarantee that the content reflects the most recent amendments, approvals, or project details at all times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Project Information</h2>
            <p className="mb-4">All information relating to projects, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>Project descriptions</li>
              <li>Floor plans</li>
              <li>Layouts</li>
              <li>Amenities</li>
              <li>Specifications</li>
              <li>Pricing and availability</li>
            </ul>
            <p className="mb-4 italic text-muted-foreground">is provided for general informational and illustrative purposes only.</p>
            <p className="mb-4">
              Architectural drawings, renderings, images, and artist impressions displayed on the website are conceptual representations intended to illustrate the proposed development.
            </p>
            <p>Actual construction, design, materials, specifications, and features may vary from those shown.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Illustrative Images</h2>
            <p className="mb-4">Images displayed on the website may include visual elements such as:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>Furniture</li>
              <li>Interior dÃ©cor</li>
              <li>Lighting fixtures</li>
              <li>Landscaping</li>
              <li>Decorative accessories</li>
            </ul>
            <p>These items are used solely for representation purposes and may not be included in the actual property unless specifically mentioned in the Agreement for Sale.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Changes to Project Details</h2>
            <p className="mb-4">Silicon Real Estate reserves the right to alter, modify, revise, or update:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>Project layouts</li>
              <li>Building plans</li>
              <li>Specifications</li>
              <li>Features or amenities</li>
            </ul>
            <p className="mb-4 italic text-muted-foreground">as required and subject to approvals from relevant authorities and regulatory bodies.</p>
            <p>Such changes may occur without prior notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">No Legal or Investment Advice</h2>
            <p className="mb-4">The information available on this website is provided in good faith for general guidance only.</p>
            <p className="mb-2 font-semibold">It should not be interpreted as:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>A legal offer</li>
              <li>A contractual commitment</li>
              <li>Professional legal advice</li>
              <li>Financial or investment advice</li>
            </ul>
            <p>Prospective buyers and investors are advised to independently verify all information and consult legal, financial, or real estate professionals before making any investment decision.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Limitation of Liability</h2>
            <p className="mb-4">Silicon Real Estate, its directors, employees, representatives, or affiliates shall not be liable for any loss, damage, or expense arising from:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>Reliance on information available on this website</li>
              <li>Errors or omissions in website content</li>
              <li>Any actions taken based on website information</li>
            </ul>
            <p>Use of the website and its content is entirely at the user&apos;s own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All website content including text, graphics, images, logos, layout, and design elements are the intellectual property of Silicon Real Estate or its licensors and are protected under applicable copyright and intellectual property laws.
            </p>
            <p className="mb-4">No part of this website may be copied, reproduced, republished, modified, or distributed without prior written permission from Silicon Real Estate.</p>
            <p>Printing or downloading content for personal use does not grant rights for commercial reproduction or distribution.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Third-Party Links</h2>
            <p className="mb-4">This website may contain links to external websites for informational purposes.</p>
            <p className="mb-4">Silicon Real Estate does not control and is not responsible for the content, policies, or practices of third-party websites.</p>
            <p>Users accessing such links do so at their own discretion.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Updates to Disclaimer</h2>
            <p className="mb-4">Silicon Real Estate reserves the right to update or modify this Disclaimer at any time without prior notice.</p>
            <p>Users are encouraged to review this page periodically for updates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Contact Information</h2>
            <p className="mb-6 mt-6">For any questions regarding this Disclaimer, please contact:</p>
            <div className="bg-secondary/20 p-8 border border-dotted border-border/80 shadow-sm max-w-md">
              <h4 className="text-2xl font-bold text-foreground mb-2">Silicon Real Estate</h4>
              <p className="mb-6 text-muted-foreground">Indore, Madhya Pradesh, India</p>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</span>
                    <a href="mailto:info@siliconrealestate.co.in" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">
                      info@siliconrealestate.co.in
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Website</span>
                    <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">
                      https://siliconrealestate.co.in
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Contact Section on Parallax Background */}
      <section
        className="relative py-32 bg-fixed bg-center bg-cover mt-12 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          clipPath: "polygon(0 2vw, 100% 0, 100% 100%, 0 100%)"
        }}
      >
        <div className="absolute inset-0 bg-[#413F4C]/95" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest">Get in Touch</h2>
          <p className="text-white/60 mb-12 md:text-base max-w-2xl mx-auto font-light">
            Please submit your contact information and one of our sales associates will be in touch with you shortly
          </p>
          <LegalPageForm />
        </div>
      </section>
    </main>
  );
}



