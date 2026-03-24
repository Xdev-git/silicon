import { Metadata } from "next";
import Link from "next/link";
import { LegalPageForm } from "@/components/legal/LegalPageForm";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Silicon",
  description: "Privacy Policy and Data Protection guidelines for Silicon Real Estate.",
};

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy", active: true },
  { name: "Terms & Conditions", href: "/terms-of-use", active: false },
  { name: "Disclaimer", href: "/disclaimer", active: false },
  { name: "Cookie Policy", href: "/cookies", active: false },
  { name: "Grievance Redressal", href: "/grievance-redressal", active: false },
  { name: "RERA Disclosure", href: "/rera-disclosure", active: false },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <div className="w-12 h-[2px] mx-auto bg-[#020D2F]"></div>
        </div>
      </div>

      {/* 2. Sub menu just below hero image with no border, minimum bottom shadow */}
      <div className="w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] relative z-20">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3  font-semibold uppercase tracking-wider">
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

        {/* Breadcrumbs below sub-menu layout */}
        <nav className="flex flex-wrap items-center text-sm text-[#413F4C]/60 font-medium mb-8">
          <Link href="/" className="hover:text-[#020D2F] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#020D2F] font-bold">Privacy Policy</span>
        </nav>

        {/* Content Section - Cozy and Compact (reduced space-y and line-height) */}
        <div className="space-y-8 text-[#413F4C]/80 font-medium leading-snug">

          <section>
            <p className="mb-4">
              <strong>Silicon Real Estate</strong> ("we", "our", or "us") is committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, process, and protect personal data when you visit our website <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">https://siliconrealestate.co.in <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a> or interact with our services.
            </p>
            <p className="mb-4">
              This policy is designed in accordance with the Digital Personal Data Protection Act, 2023 (India) and other applicable regulations.
            </p>
            <p className="bg-black/5 p-4 border border-dotted border-black/10">
              By accessing our website or submitting personal information, you agree to the terms outlined in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">1. Information We Collect</h2>
            <p className="mb-6">We may collect personal information when you interact with our website or services.</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#020D2F] mb-2">Information You Provide</h3>
                <p className="mb-2 ">You may voluntarily provide information including:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-dotted border-border/80  p-5">
                    <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug">
                      <li>Name</li>
                      <li>Phone number</li>
                      <li>Email address</li>
                      <li>City or residential address</li>
                      <li>Property preferences</li>
                      <li>Budget range</li>
                      <li>Any additional details submitted through enquiry forms</li>
                    </ul>
                  </div>
                  <div className="border border-dotted border-border/80 p-5">
                    <p className="mb-3  font-semibold">This information may be collected when you:</p>
                    <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug">
                      <li>Submit enquiry forms</li>
                      <li>Request brochures or project details</li>
                      <li>Schedule site visits</li>
                      <li>Contact us through email or phone</li>
                      <li>Register for updates or marketing communication</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#020D2F] mb-2">Information Collected Automatically</h3>
                <p className="mb-2 ">When you visit <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">https://siliconrealestate.co.in <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>, certain technical information may be collected automatically such as:</p>
                <ul className="list-disc pl-5 space-y-1  mb-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Navigation path through the website</li>
                </ul>
                <p className=" text-muted-foreground italic">This data helps us improve website functionality and user experience.</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#020D2F] mb-2">Information from Third Parties</h3>
                <p className="mb-2 ">We may receive information about you from trusted third parties including:</p>
                <ul className="list-disc pl-5 space-y-1  mb-2">
                  <li>Channel partners or real estate consultants</li>
                  <li>Marketing partners</li>
                  <li>Advertising platforms</li>
                  <li>Social media platforms</li>
                </ul>
                <p className=" text-muted-foreground italic">Such information may be combined with the data you provide directly.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">2. Purpose of Data Collection</h2>
            <p className="mb-3">We collect and process personal information for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 ">
              <li>Responding to customer enquiries</li>
              <li>Providing project information and brochures</li>
              <li>Scheduling property site visits</li>
              <li>Communicating project updates or offers</li>
              <li>Improving website functionality and services</li>
              <li>Marketing and promotional activities</li>
              <li>Compliance with legal or regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">3. Consent</h2>
            <p className="mb-3">
              By submitting personal information through our website or representatives, you consent to the collection and use of your information for the purposes described in this Privacy Policy.
            </p>
            <p>
              You may withdraw your consent at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">4. Sharing of Personal Information</h2>
            <p className="mb-3">
              Your personal information may be shared with trusted third parties when necessary, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5  mb-4">
              <li>Channel partners and sales representatives</li>
              <li>Marketing and advertising partners</li>
              <li>Technology service providers</li>
              <li>Legal or regulatory authorities when required by law</li>
            </ul>
            <div className="bg-secondary/30 p-4 border border-dotted border-border/80 space-y-3 ">
              <p>
                <strong>Silicon Real Estate does not sell personal information to third parties.</strong>
              </p>
              <p>
                Sensitive information such as financial or identity documents will only be processed when required for legitimate transactions and legal compliance.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="mb-3">
              Our website may use cookies and similar technologies to improve browsing experience and analyze website traffic.
            </p>
            <p className="mb-2  font-semibold">Cookies help us:</p>
            <ul className="list-disc pl-5 space-y-1  mb-3">
              <li>Understand how visitors interact with the website</li>
              <li>Improve website performance</li>
              <li>Provide personalized content or advertisements</li>
            </ul>
            <p className="mb-3 ">Users can control cookie preferences through their browser settings.</p>
            <p className="">
              More details can be found in our <Link href="/cookies" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">Cookie Policy <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">6. Data Security</h2>
            <p className="mb-3">
              We implement reasonable technical and organizational security measures to protect personal information from:
            </p>
            <ul className="list-disc pl-5 space-y-1.5  mb-3">
              <li>Unauthorized access</li>
              <li>Data breaches</li>
              <li>Loss or theft</li>
              <li>Misuse or alteration</li>
            </ul>
            <p className=" text-muted-foreground italic">
              However, no method of internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">7. Data Retention</h2>
            <p className="mb-3">
              Personal information will only be retained for as long as necessary to fulfill the purposes outlined in this policy, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5  mb-3">
              <li>Customer communication</li>
              <li>Business operations</li>
              <li>Legal compliance</li>
            </ul>
            <p className="">
              Once data is no longer required, it will be securely deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">8. Your Rights</h2>
            <p className="mb-3 ">Under applicable laws, users may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5  mb-4">
              <li>Request access to their personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of personal data</li>
              <li>Withdraw consent for data processing</li>
              <li>Raise complaints regarding data handling</li>
            </ul>
            <p className=" font-medium">
              Requests can be submitted using the contact information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">9. Third-Party Websites</h2>
            <p className="mb-3">
              Our website may contain links to external websites. Silicon Real Estate is not responsible for the privacy practices or content of those websites.
            </p>
            <p>
              Users are encouraged to review the privacy policies of external websites before sharing personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">10. Updates to this Privacy Policy</h2>
            <p className="mb-3">
              Silicon Real Estate may update this Privacy Policy periodically to reflect changes in legal requirements or business practices.
            </p>
            <p>
              Updated versions will be published on <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">https://siliconrealestate.co.in <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">11. Contact Information</h2>
            <p className="mb-6 mt-6">For questions regarding this Privacy Policy or personal data handling, please contact:</p>
            <div className="bg-secondary/20 p-8 border border-dotted border-border/80 shadow-sm max-w-md">
              <h4 className="text-2xl font-bold text-foreground mb-2">Silicon Real Estate</h4>
              <p className="mb-6 text-muted-foreground">Indore, Madhya Pradesh, India</p>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</span>
                    <a href="mailto:info@siliconrealestate.co.in" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">info@siliconrealestate.co.in <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                  </div>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Website</span>
                    <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">https://siliconrealestate.co.in <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                  </div>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 6. Contact Section on Parallax Background */}
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



