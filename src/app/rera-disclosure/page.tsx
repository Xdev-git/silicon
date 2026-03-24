import { Metadata } from "next";
import Link from "next/link";
import { LegalPageForm } from "@/components/legal/LegalPageForm";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "RERA Disclosure | Silicon Real Estate",
  description: "RERA Disclosure and Regulatory Compliance for Silicon Real Estate.",
};

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy", active: false },
  { name: "Terms & Conditions", href: "/terms-of-use", active: false },
  { name: "Disclaimer", href: "/disclaimer", active: false },
  { name: "Cookie Policy", href: "/cookies", active: false },
  { name: "Grievance Redressal", href: "/grievance-redressal", active: false },
  { name: "RERA Disclosure", href: "/rera-disclosure", active: true },
];

export default function RERADisclosurePage() {
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
            RERA Disclosure
          </h1>
          <div className="w-12 h-[2px] mx-auto bg-[#BC9F81]"></div>
        </div>
      </div>

      {/* Sub menu */}
      <div className="w-full bg-white dark:bg-zinc-950 shadow-[0_2px_10px_rgba(0,0,0,0.04)] relative z-20">
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
          <Link href="/" className="hover:text-[#BC9F81] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#BC9F81] font-bold">RERA Disclosure</span>
        </nav>

        {/* Content Section */}
        <div className="space-y-8 text-foreground/90 leading-relaxed md:text-base">

          {/* Intro */}
          <section>
            <p className="mb-4">
              In accordance with the provisions of the Real Estate (Regulation and Development) Act, 2016 (RERA) and the rules and regulations notified thereunder, <strong>Silicon Real Estate</strong> is committed to providing transparent and accurate information regarding its real estate projects.
            </p>
            <p className="bg-black/5 p-4 border border-dotted border-black/10">
              This website{" "}
              <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-accent/50 hover:border-accent transition-colors">
                https://siliconrealestate.co.in
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>{" "}
              is intended to provide general information about the projects undertaken or marketed by Silicon Real Estate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Regulatory Compliance</h2>
            <p className="mb-4">
              All real estate projects promoted, marketed, or advertised by Silicon Real Estate that fall within the scope of the Real Estate (Regulation and Development) Act, 2016 will be registered with the appropriate State Real Estate Regulatory Authority (RERA) before being marketed or sold.
            </p>
            <p>
              Project details including approvals, plans, specifications, and registration information will be made available in accordance with the applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Project Registration Details</h2>
            <p className="mb-4">
              The official RERA registration number, approvals, and relevant project details will be displayed on the respective project pages once the project is registered under the applicable state RERA authority.
            </p>
            <p>
              Users and prospective buyers are advised to verify the registration details of any project directly on the official RERA website of the respective state.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Madhya Pradesh RERA Authority</h2>
            <p className="mb-4">
              For projects located in Madhya Pradesh, registration and regulatory compliance fall under the Madhya Pradesh Real Estate Regulatory Authority (MP RERA).
            </p>
            <div className="border border-dotted border-border/80 p-5 mb-4 inline-block">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">Official Website</p>
              <a href="https://rera.mp.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-accent/50 hover:border-accent transition-colors">
                https://rera.mp.gov.in
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
            <p>Users may visit the above website to verify project registration details, approvals, and developer information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">No Offer or Legal Commitment</h2>
            <p className="mb-4">The information provided on this website is for general informational purposes only and does not constitute:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>An offer to sell</li>
              <li>A legal agreement</li>
              <li>A binding commitment</li>
            </ul>
            <p>
              Actual project details, specifications, and terms will be governed by the Agreement for Sale, Allotment Letter, and other legally binding documents executed between the parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Verification by Buyers</h2>
            <p className="mb-4">Prospective buyers are advised to independently verify all project information including:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>RERA registration details</li>
              <li>Project approvals</li>
              <li>Layout plans</li>
              <li>Specifications</li>
              <li>Payment schedules</li>
            </ul>
            <p className="italic text-muted-foreground">before making any purchase decision.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Contact Information</h2>
            <p className="mb-6 mt-6">For further information regarding project registration or compliance, please contact:</p>
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
                    <a href="mailto:info@siliconrealestate.co.in" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-accent/50 hover:border-accent transition-colors">
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
                    <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-accent/50 hover:border-accent transition-colors">
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
