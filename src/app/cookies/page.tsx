import { Metadata } from "next";
import Link from "next/link";
import { LegalPageForm } from "@/components/legal/LegalPageForm";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Silicon Real Estate",
  description: "Cookie Policy for Silicon Real Estate website.",
};

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy", active: false },
  { name: "Terms & Conditions", href: "/terms-of-use", active: false },
  { name: "Disclaimer", href: "/disclaimer", active: false },
  { name: "Cookie Policy", href: "/cookies", active: true },
  { name: "Grievance Redressal", href: "/grievance-redressal", active: false },
  { name: "RERA Disclosure", href: "/rera-disclosure", active: false },
];

export default function CookiePolicyPage() {
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
            Cookie Policy
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
          <span className="text-[#BC9F81] font-bold">Cookie Policy</span>
        </nav>

        {/* Content Section */}
        <div className="space-y-8 text-foreground/90 leading-relaxed md:text-base">

          {/* Intro */}
          <section>
            <p className="mb-4">
              <strong>Effective Date: March 10, 2026</strong>
            </p>
            <p className="mb-4">
              This Cookie Policy explains how <strong>Silicon Real Estate</strong> ("we", "our", or "us") uses cookies and similar technologies when you visit our website{" "}
              <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-accent/50 hover:border-accent transition-colors">
                https://siliconrealestate.co.in
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>.
            </p>
            <p className="bg-black/5 p-4 border border-dotted border-black/10">
              By continuing to browse or use our website, you consent to the use of cookies as described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">1. What Are Cookies</h2>
            <p className="mb-4">Cookies are small text files stored on your computer, smartphone, or other device when you visit a website.</p>
            <p className="mb-4">These files help websites recognize your device and remember certain information about your visit. Cookies are widely used to make websites function efficiently and to provide useful information to website owners.</p>
            <p>Cookies used on our website do not harm your device or access personal files stored on your system.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">2. Why We Use Cookies</h2>
            <p className="mb-4">Silicon Real Estate uses cookies to improve website functionality and provide a better browsing experience.</p>
            <p className="mb-2 font-semibold">Cookies help us:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>Understand how visitors interact with the website</li>
              <li>Improve website performance and usability</li>
              <li>Remember user preferences</li>
              <li>Provide relevant advertisements and marketing content</li>
              <li>Analyze website traffic and visitor behavior</li>
            </ul>
            <p>By continuing to use the website, you agree to our use of cookies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">3. Types of Cookies We Use</h2>

            <div className="space-y-5">
              <div className="border border-dotted border-border/80 p-5">
                <h3 className="text-lg font-bold mb-2">Essential Cookies</h3>
                <p>These cookies are necessary for the proper functioning of the website. Without them, certain features of the website may not work correctly.</p>
              </div>
              <div className="border border-dotted border-border/80 p-5">
                <h3 className="text-lg font-bold mb-2">Performance and Analytics Cookies</h3>
                <p>These cookies help us understand how visitors use the website, such as which pages are visited most frequently. This information helps us improve website performance.</p>
              </div>
              <div className="border border-dotted border-border/80 p-5">
                <h3 className="text-lg font-bold mb-2">Functionality Cookies</h3>
                <p>These cookies allow the website to remember user preferences such as language settings or previously entered information.</p>
              </div>
              <div className="border border-dotted border-border/80 p-5">
                <h3 className="text-lg font-bold mb-2">Advertising Cookies</h3>
                <p>Advertising cookies may be used to deliver advertisements that are more relevant to users based on browsing behavior.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">4. Third-Party Cookies</h2>
            <p className="mb-4">Our website may use third-party services that place cookies on your device. These services may include:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>Website analytics providers</li>
              <li>Advertising platforms</li>
              <li>Social media services</li>
            </ul>
            <p className="mb-4">For example, services such as Google Analytics may collect anonymous information about how visitors use the website.</p>
            <p>These third-party cookies are governed by the privacy policies of the respective service providers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">5. Session Cookies and Persistent Cookies</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="border border-dotted border-border/80 p-5">
                <h3 className="text-lg font-bold mb-2">Session Cookies</h3>
                <p>Session cookies are temporary cookies that are deleted automatically when you close your browser.</p>
              </div>
              <div className="border border-dotted border-border/80 p-5">
                <h3 className="text-lg font-bold mb-2">Persistent Cookies</h3>
                <p>Persistent cookies remain stored on your device for a defined period or until manually deleted. These cookies help remember user preferences when returning to the website.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">6. Advertising and Retargeting</h2>
            <p className="mb-4">Silicon Real Estate may use advertising technologies that utilize cookies to display relevant advertisements on other websites.</p>
            <p className="mb-2 font-semibold">These technologies help us:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>Deliver targeted advertising</li>
              <li>Measure marketing campaign performance</li>
              <li>Improve advertising relevance</li>
            </ul>
            <p>Advertisements may appear on third-party platforms based on previous visits to our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">7. Managing Cookies</h2>
            <p className="mb-4">Most web browsers allow users to manage or disable cookies through browser settings.</p>
            <p className="mb-2 font-semibold">Users may choose to:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>Accept all cookies</li>
              <li>Reject cookies</li>
              <li>Delete stored cookies</li>
              <li>Receive notifications when cookies are placed</li>
            </ul>
            <p className="bg-primary/5 p-4 border border-dotted border-border/80">
              Please note that disabling certain cookies may affect the functionality of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">8. Updates to This Cookie Policy</h2>
            <p className="mb-4">Silicon Real Estate may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or website functionality.</p>
            <p>Updated versions will be posted on{" "}
              <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">
                https://siliconrealestate.co.in
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">9. Contact Information</h2>
            <p className="mb-6 mt-6">For questions regarding this Cookie Policy, please contact:</p>
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
