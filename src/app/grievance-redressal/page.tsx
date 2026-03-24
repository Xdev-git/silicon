import { Metadata } from "next";
import Link from "next/link";
import { LegalPageForm } from "@/components/legal/LegalPageForm";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Grievance Redressal | Silicon Real Estate",
  description: "Grievance Redressal policy for Silicon Real Estate.",
};

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy", active: false },
  { name: "Terms & Conditions", href: "/terms-of-use", active: false },
  { name: "Disclaimer", href: "/disclaimer", active: false },
  { name: "Cookie Policy", href: "/cookies", active: false },
  { name: "Grievance Redressal", href: "/grievance-redressal", active: true },
  { name: "RERA Disclosure", href: "/rera-disclosure", active: false },
];

export default function GrievanceRedressalPage() {
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
            Grievance Redressal
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
          <span className="text-[#020D2F] font-bold">Grievance Redressal</span>
        </nav>

        {/* Content Section */}
        <div className="space-y-8 text-foreground/90 leading-relaxed md:text-base">

          {/* Intro */}
          <section>
            <p className="mb-4">
              <strong>Silicon Real Estate</strong> is committed to providing accurate information and reliable services through its website{" "}
              <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-accent/50 hover:border-accent transition-colors">
                https://siliconrealestate.co.in
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>.
            </p>
            <p className="mb-4">
              If any user has complaints, concerns, or grievances regarding the content available on this website or believes that any information on the website violates applicable laws or personal rights, they may report the matter to the designated Grievance Officer.
            </p>
            <p className="mb-2 font-semibold">This includes complaints related to:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>Website content or information</li>
              <li>Violation of applicable laws or regulations</li>
              <li>Misuse of personal information</li>
              <li>Inaccurate or misleading content</li>
              <li>Any abuse of the services offered through this website</li>
            </ul>
            <p className="bg-primary/5 p-4 border border-dotted border-border/80">
              This mechanism is provided in accordance with the Information Technology Act, 2000 and other applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Submission of Grievance</h2>
            <p className="mb-6">Users wishing to submit a grievance should provide the following information:</p>

            <div className="space-y-5">
              <div className="border border-dotted border-border/80 p-5">
                <h3 className="text-lg font-bold mb-2">1. Written Complaint</h3>
                <p>A written complaint describing the nature of the grievance.</p>
              </div>

              <div className="border border-dotted border-border/80 p-5">
                <h3 className="text-lg font-bold mb-3">2. Contact Details</h3>
                <p className="mb-3">The complaint should include:</p>
                <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Postal address (if applicable)</li>
                </ul>
                <p className="mt-3 text-muted-foreground text-sm italic">These details will help us contact you if additional information is required.</p>
              </div>

              <div className="border border-dotted border-border/80 p-5">
                <h3 className="text-lg font-bold mb-3">3. Declaration</h3>
                <p className="mb-3">The complaint should include a declaration confirming that:</p>
                <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug">
                  <li>You are the affected party or authorized to submit the complaint.</li>
                  <li>The information provided in the complaint is accurate and complete.</li>
                  <li>No relevant information has been intentionally concealed.</li>
                </ul>
                <p className="mt-3 text-muted-foreground text-sm italic">Supporting documents may be attached where necessary.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Grievance Officer</h2>
            <p className="mb-6">In accordance with applicable regulations, grievances may be addressed to the designated Grievance Officer.</p>
            <div className="bg-secondary/20 p-8 border border-dotted border-border/80 shadow-sm max-w-md">
              <h4 className="text-xl font-bold text-foreground mb-1">Grievance Officer</h4>
              <h4 className="text-2xl font-bold text-foreground mb-2">Silicon Real Estate</h4>
              <p className="mb-6 text-muted-foreground">Indore, Madhya Pradesh, India</p>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</span>
                    <a href="mailto:grievance@siliconrealestate.co.in" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-accent/50 hover:border-accent transition-colors">
                      grievance@siliconrealestate.co.in
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

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Response Time</h2>
            <p className="mb-4">Silicon Real Estate will review and respond to grievances within a reasonable period of time after receiving the complaint.</p>
            <p>The company will make reasonable efforts to resolve genuine concerns as promptly as possible.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">Policy Updates</h2>
            <p className="mb-4">Silicon Real Estate reserves the right to update or modify this Grievance Redressal policy as required by law or business practices.</p>
            <p>Users are encouraged to review this page periodically for updates.</p>
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



