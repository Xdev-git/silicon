import { Metadata } from "next";
import Link from "next/link";
import { LegalPageForm } from "@/components/legal/LegalPageForm";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Silicon",
  description: "Terms and Conditions for using Silicon Real Estate website.",
};

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy", active: false },
  { name: "Terms & Conditions", href: "/terms-of-use", active: true },
  { name: "Disclaimer", href: "/disclaimer", active: false },
  { name: "Cookie Policy", href: "/cookies", active: false },
  { name: "Grievance Redressal", href: "/grievance-redressal", active: false },
  { name: "RERA Disclosure", href: "/rera-disclosure", active: false },
];

export default function TermsOfUsePage() {
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
            Terms & Conditions
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
        <nav className="flex flex-wrap items-center text-sm text-[#413F4C]/60 font-medium mb-8">
          <Link href="/" className="hover:text-[#BC9F81] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#BC9F81] font-bold">Terms & Conditions</span>
        </nav>

        {/* Content Section */}
        <div className="space-y-8 text-foreground/90 leading-relaxed md:text-base">

          {/* Intro */}
          <section>
            <p className="mb-4">
              <strong>Effective Date: March 10, 2026</strong>
            </p>
            <p className="mb-4">
              Welcome to <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">https://siliconrealestate.co.in <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>, a website operated by <strong>Silicon Real Estate</strong>, including its affiliates and associated entities (collectively referred to as “Silicon Real Estate”, “we”, “our”, or “us”).
            </p>
            <p className="bg-black/5 p-4 border border-dotted border-black/10">
              By accessing or using this website, you agree to comply with these Terms and Conditions. If you do not agree with these terms, you should discontinue use of the website immediately.
            </p>
          </section>

          {/* Sections */}
          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">1. Use of the Website</h2>
            <p className="mb-4">These Terms govern your access to and use of the Silicon Real Estate website.</p>
            <p className="mb-2 font-semibold">Use of the website includes:</p>
            <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
              <li>Accessing the website</li>
              <li>Browsing content</li>
              <li>Submitting enquiries or information</li>
              <li>Registering for updates or services</li>
            </ul>
            <p className="mb-4">By continuing to use this website, you confirm that you have read, understood, and accepted these Terms.</p>
            <p>Silicon Real Estate reserves the right to modify these Terms at any time. Updated terms will become effective once published on the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">2. Accuracy of Information</h2>
            <p className="mb-4">Silicon Real Estate makes reasonable efforts to ensure that information on the website is accurate and updated.</p>
            <p className="mb-2 font-semibold">However:</p>
            <div className="border border-dotted border-border/80 p-5 mb-4 max-w-sm">
                <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug">
                  <li>Project details</li>
                  <li>Pricing</li>
                  <li>Specifications</li>
                  <li>Layouts</li>
                  <li>Availability</li>
                </ul>
            </div>
            <p className="mb-4 italic text-muted-foreground">may change from time to time without prior notice.</p>
            <p className="mb-4">Visitors are advised to contact Silicon Real Estate directly to verify project information before making any purchase or investment decision.</p>
            <p>Information on the website is provided for general informational purposes only and should not be considered a legally binding offer.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">3. Privacy Policy</h2>
             <p className="mb-4">
                Use of this website is also governed by our <Link href="/privacy-policy" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">Privacy Policy <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link>, which describes how we collect, use, and protect personal information.
              </p>
              <p>
                By using the website or submitting personal information, you consent to the collection and processing of data as described in our Privacy Policy.
              </p>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">4. Access and Security</h2>
             <p className="mb-4">Access to the website is provided free of charge.</p>
             <p className="mb-4">If users are provided with login credentials or security information, they must treat such information as confidential and must not disclose it to any third party.</p>
             <p>Silicon Real Estate reserves the right to suspend or terminate user access if these Terms are violated.</p>
          </section>

          <section>
              <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">5. Intellectual Property Rights</h2>
              <p className="mb-4">All content on this website is the property of Silicon Real Estate or its licensors.</p>
              <p className="mb-2 font-semibold">This includes:</p>
              <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
                  <li>Logos and trademarks</li>
                  <li>Text and written content</li>
                  <li>Images and graphics</li>
                  <li>Website layout and design</li>
                  <li>Software and databases</li>
              </ul>
               <p className="mb-2 font-semibold">Users may not:</p>
               <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
                  <li>Copy</li>
                  <li>Reproduce</li>
                  <li>Modify</li>
                  <li>Republish</li>
                  <li>Distribute</li>
                  <li>Commercially exploit</li>
               </ul>
               <p className="mb-4">any website content without prior written permission from Silicon Real Estate.</p>
               <p>Downloading or printing content for personal reference does not grant permission for commercial use.</p>
          </section>

          <section>
               <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">6. Limitation of Liability</h2>
               <p className="mb-4">To the fullest extent permitted by law, Silicon Real Estate shall not be liable for any loss or damage arising from:</p>
               <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
                  <li>Use of this website</li>
                  <li>Reliance on information provided on the website</li>
                  <li>Errors or omissions in website content</li>
                  <li>Website downtime or technical issues</li>
               </ul>
               <p>Users access and use the website at their own risk.</p>
          </section>

          <section>
               <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">7. Prohibited Activities</h2>
               <p className="mb-4">Users must not misuse the website by:</p>
               <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
                  <li>Introducing viruses or malicious software</li>
                  <li>Attempting unauthorized access to servers or databases</li>
                  <li>Interfering with the operation of the website</li>
                  <li>Engaging in activities that violate applicable laws</li>
               </ul>
                <p>Any such actions may constitute an offence under the Information Technology Act, 2000 and other applicable laws.</p>
          </section>

          <section>
               <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">8. External Links</h2>
               <p className="mb-4">This website may contain links to third-party websites.</p>
               <p className="mb-4">Silicon Real Estate does not control or endorse the content of external websites and is not responsible for their policies or practices.</p>
               <p>Users accessing such websites do so at their own risk.</p>
          </section>

          <section>
               <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">9. Linking to Our Website</h2>
               <p className="mb-4">You may link to the homepage of <a href="https://siliconrealestate.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 border-b border-dotted border-primary/50 hover:border-primary transition-colors">https://siliconrealestate.co.in <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a> provided that:</p>
               <ul className="list-disc pl-5 space-y-[0.35rem] leading-snug mb-4">
                  <li>The link is fair and lawful</li>
                  <li>It does not harm our reputation</li>
                  <li>It does not falsely imply association or endorsement</li>
               </ul>
               <p>Silicon Real Estate reserves the right to withdraw linking permission without notice.</p>
          </section>
          
          <section>
               <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">10. Indemnity</h2>
               <p>If a user breaches these Terms or any applicable law while using the website, the user agrees to indemnify and hold harmless Silicon Real Estate, its directors, employees, affiliates, and partners from any claims, damages, or liabilities arising from such breach.</p>
          </section>

          <section>
               <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">11. Governing Law</h2>
               <p className="mb-4">These Terms and Conditions are governed by the laws of India.</p>
               <p>Any disputes arising from the use of this website shall be subject to the jurisdiction of courts located in Indore, Madhya Pradesh.</p>
          </section>

          <section>
              <h2 className="text-2xl font-bold text-[#413F4C] border-b border-[#413F4C]/20 pb-3 mb-4">12. Contact Information</h2>
              <p className="mb-6 mt-6">For any questions regarding these Terms and Conditions, please contact:</p>
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
