"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, PhoneCall, Mail, Play, Globe, ChevronDown } from "lucide-react";

export function Footer() {
  const [isDisclaimerExpanded, setIsDisclaimerExpanded] = useState(false);

  return (
    <>


      <footer className="bg-[#020D2F] text-white relative overflow-hidden font-sans">
        {/* 
          TOP BANNER FROM REFERENCE IMAGE 1 
        */}
        <div className="container mx-auto px-6 lg:px-12 pt-16 md:pt-24 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">

            {/* Logo Section */}
            <div className="flex items-end gap-3">

              <span className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase relative -bottom-1">
                SILICON
              </span>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2.5 rounded-full border border-white/20">
                  <PhoneCall className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white/70 tracking-wider">CALL US</span>
                  <span className="text-lg font-semibold tracking-wide text-white">1800 121 3344</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2.5 rounded-full border border-white/20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white/70 tracking-wider">EMAIL US</span>
                  <span className="text-lg font-semibold tracking-wide text-white">connect@silicongroup.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px w-full bg-white/10 my-8"></div>

          {/* Tagline */}
          <p className="text-[15px] md:text-[16px] font-medium leading-relaxed text-white/80 max-w-6xl">
            Rooted in trust, driven by innovation, and guided by knowledge leadership — <strong className="text-white font-bold">Silicon Group</strong> has redefined India's real estate landscape since 1993. With a growing footprint across the nation, the group continues to be one of India's most respected and preferred names in development and consulting.
          </p>
        </div>

        {/* 
        MAIN LINKS & DISCLAIMER AREA FROM REFERENCE IMAGE 2
      */}
        <div className="container mx-auto px-6 lg:px-12 py-10 relative z-10">

          {/* Link Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 relative z-10">

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xl md:text-base tracking-wide uppercase text-white">OUR PROJECTS</h4>
                <div className="w-10 h-[2px] bg-white/50 mt-3 mb-6"></div>
              </div>
              <ul className="space-y-[12px] text-md md:text-md text-white/70 font-medium tracking-wide">
                <li><Link href="/projects/silicon-water-front" className="hover:text-white transition-colors">Silicon Water Front</Link></li>
                <li><Link href="/projects/sampada" className="hover:text-white transition-colors">Sampada</Link></li>
                <li><Link href="/projects/sampurna" className="hover:text-white transition-colors">Sampurna</Link></li>
                <li><Link href="/projects/swastika" className="hover:text-white transition-colors">Swastika</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">All Projects</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xl md:text-base tracking-wide uppercase text-white">OUR JOURNEY</h4>
                <div className="w-10 h-[2px] bg-white/50 mt-3 mb-6"></div>
              </div>
              <ul className="space-y-[12px] text-md md:text-md text-white/70 font-medium tracking-wide">
                <li><Link href="/about" className="hover:text-white transition-colors">About Silicon</Link></li>
                <li><Link href="/our-impact" className="hover:text-white transition-colors">Our Impact</Link></li>
                <li><Link href="/about/chairmans-message" className="hover:text-white transition-colors">Chairman's Message</Link></li>
                <li><Link href="/career" className="hover:text-white transition-colors">Career</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xl md:text-base tracking-wide uppercase text-white">RESOURCES</h4>
                <div className="w-10 h-[2px] bg-white/50 mt-3 mb-6"></div>
              </div>
              <ul className="space-y-[12px] text-md md:text-md text-white/70 font-medium tracking-wide">
                <li><Link href="/nri-corner" className="hover:text-white transition-colors">NRI Corner</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
                <li><Link href="/buyers-guide" className="hover:text-white transition-colors">Buyers Guide</Link></li>
                <li><Link href="/emi-calculator" className="hover:text-white transition-colors">EMI Calculator</Link></li>
              </ul>
            </div>

            <div className="space-y-6 flex flex-col items-start lg:items-start lg:pl-12 xl:pl-0">
              <div className="w-full xl:w-64 space-y-6">

                <div>
                  <h4 className="font-bold text-xl md:text-base tracking-wide uppercase text-white">FOLLOW US ON</h4>
                  <div className="w-10 h-[2px] bg-white/50 mt-3 mb-6"></div>
                </div>
                <div className="flex space-x-3 pb-4">
                  <Link href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"><Instagram className="w-4 h-4 md:w-5 md:h-5 text-white" /></Link>
                  <Link href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"><span className="text-white text-base font-bold">X</span></Link>
                  <Link href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-red-700 transition-all duration-300"><Play fill="white" className="w-3.5 h-3.5 md:w-4 md:h-4 text-white ml-0.5 border-none" /></Link>
                  <Link href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"><Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white" /></Link>
                  <Link href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"><Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" /></Link>
                </div>

                <div>
                  <h4 className="font-bold text-xl md:text-base tracking-wide uppercase text-white">QUICK LINKS</h4>
                  <div className="w-10 h-[2px] bg-white/50 mt-3 mb-6"></div>
                </div>
                <ul className="space-y-[12px] text-md md:text-md text-white/70 font-medium tracking-wide">
                  <li><Link href="/faqs" className="hover:text-white transition-colors">FAQ's</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
                </ul>

              </div>
            </div>
          </div>


          {/* Full Width Disclaimer with Read More Toggle */}
          <div className="relative z-10 w-full lg:w-[90%] xl:w-[85%] mt-16 mb-12">
            <strong className="text-white uppercase tracking-widest block mb-3 text-[14px] md:text-[15px] font-bold">Disclaimer:</strong>

            <div className={`text-[13px] md:text-[14px] leading-relaxed text-white/70 font-medium tracking-wide text-justify transition-all duration-300 ${isDisclaimerExpanded ? "space-y-4" : "line-clamp-2 md:line-clamp-2 overflow-hidden space-y-2"}`}>
              <p>
                This website is maintained in compliance with the provisions of the Real Estate (Regulation and Development) Act, 2016 (RERA). However, visitors are advised to independently verify all project-related information with the Company prior to making any investment or purchase decisions.
              </p>
              <p>
                The official website of the Company is www.siliconrealestate.co.in. Users are cautioned against relying on any other websites that may appear similar, misuse the Company’s brand identity, or display project information associated with the Company.
              </p>
              <p>
                All materials available on this website, including brochures, visuals, and marketing content, are intended solely for general informational purposes. Nothing contained herein should be construed as an advertisement, offer for sale, invitation to purchase, or a binding commitment of any nature. Prospective buyers are advised to confirm all details directly with the Company€™s authorized representatives.
              </p>
              <p>
                Project-related information such as layouts, specifications, amenities, and services are based on approved plans and are subject to revisions in accordance with applicable laws, regulations, or approvals. Any images, illustrations, or renderings displayed are indicative in nature and may not represent the final product unless explicitly specified.
              </p>
              <p>
                The Company endeavors to provide accurate and updated information; however, users are encouraged to exercise their own judgment and due diligence while relying on the content presented.
              </p>
              <p>
                This website may include links to external websites for user convenience. The Company does not have control over and is not responsible for the content, reliability, or security of such third-party platforms.
              </p>
              <p>
                All information on this website is provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied. The Company shall not be liable for any direct, indirect, incidental, or consequential losses arising from the use of this website or reliance on its content.
              </p>
              <p>
                By accessing and using this website, users agree to the terms outlined in this disclaimer. Any inquiries submitted through the website shall not be considered as formal communication or confirmation of any transaction.
              </p>
              <p>
                This disclaimer shall be governed by the laws of India, and any disputes arising in connection with it shall fall under the jurisdiction of the appropriate courts in India.
              </p>
              <p>
                All content on this website is protected by applicable intellectual property laws. Unauthorized use or reproduction is strictly prohibited. The Company reserves the right to modify, update, or remove any content, including project details and policies, at its sole discretion and without prior notice.
              </p>
            </div>

            <button
              onClick={() => setIsDisclaimerExpanded(!isDisclaimerExpanded)}
              className="mt-4 text-white font-bold text-[13px] md:text-[14px] flex items-center hover:text-white/70 transition-colors uppercase tracking-wider"
            >
              {isDisclaimerExpanded ? "Read Less" : "Read More →"}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center w-full border-t border-white/10 pt-8 gap-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] md:text-[14px] text-white/60 font-medium">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></div>
              <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></div>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></div>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></div>
              <Link href="/grievance-redressal" className="hover:text-white transition-colors">Grievance Redressal</Link>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></div>
              <Link href="/rera-disclosure" className="hover:text-white transition-colors">RERA Disclosure</Link>
            </div>
            <div className="text-[13px] md:text-[14px] text-white/60 font-medium">
              © 2026 Silicon. All rights reserved.
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

