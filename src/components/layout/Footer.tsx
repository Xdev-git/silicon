"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, PhoneCall, Mail, Play, Globe, ChevronDown } from "lucide-react";

export function Footer() {
  const [isDisclaimerExpanded, setIsDisclaimerExpanded] = useState(false);

  return (
    <>


      <footer className="bg-gradient-to-br from-[#BC9F81] to-[#AD9266] text-black relative overflow-hidden font-sans">
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
                <div className="bg-[#413F4C] p-2.5 rounded-full">
                  <PhoneCall className="w-6 h-6 text-[#BC9F81]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#413F4C]/90 tracking-wider">CALL US</span>
                  <span className="text-lg font-semibold tracking-wide text-[#413F4C]">1800 121 3344</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#413F4C] p-2.5 rounded-full">
                  <Mail className="w-6 h-6 text-[#BC9F81]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#413F4C]/90 tracking-wider">EMAIL US</span>
                  <span className="text-lg font-semibold tracking-wide text-[#413F4C]">connect@silicongroup.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px w-full bg-black/10 my-8"></div>

          {/* Tagline */}
          <p className="text-[15px] md:text-[16px] font-medium leading-relaxed text-[#413F4C]/90 max-w-6xl">
            Rooted in trust, driven by innovation, and guided by knowledge leadership — <strong className="text-[#413F4C] font-bold">Silicon Group</strong> has redefined India's real estate landscape since 1993. With a growing footprint across the nation, the group continues to be one of India's most respected and preferred names in development and consulting.
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
                <h4 className="font-bold text-xl md:text-base tracking-wide uppercase text-[#413F4C]">OUR PROJECTS</h4>
                <div className="w-10 h-[2px] bg-[#413F4C] mt-3 mb-6"></div>
              </div>
              <ul className="space-y-[12px] text-md md:text-md text-[#413F4C]/90 font-medium tracking-wide">
                <li><Link href="/projects/silicon-water-front" className="hover:text-[#413F4C]/70 transition-colors">Silicon Water Front</Link></li>
                <li><Link href="/projects/sampada" className="hover:text-[#413F4C]/70 transition-colors">Sampada</Link></li>
                <li><Link href="/projects/sampurna" className="hover:text-[#413F4C]/70 transition-colors">Sampurna</Link></li>
                <li><Link href="/projects/swastika" className="hover:text-[#413F4C]/70 transition-colors">Swastika</Link></li>
                <li><Link href="/projects" className="hover:text-[#413F4C]/70 transition-colors">All Projects</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xl md:text-base tracking-wide uppercase text-[#413F4C]">OUR JOURNEY</h4>
                <div className="w-10 h-[2px] bg-[#413F4C] mt-3 mb-6"></div>
              </div>
              <ul className="space-y-[12px] text-md md:text-md text-[#413F4C]/90 font-medium tracking-wide">
                <li><Link href="/about" className="hover:text-[#413F4C]/70 transition-colors">About Silicon</Link></li>
                <li><Link href="/our-impact" className="hover:text-[#413F4C]/70 transition-colors">Our Impact</Link></li>
                <li><Link href="/about/chairman-message" className="hover:text-[#413F4C]/70 transition-colors">Chairman's Message</Link></li>
                <li><Link href="/career" className="hover:text-[#413F4C]/70 transition-colors">Career</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xl md:text-base tracking-wide uppercase text-[#413F4C]">RESOURCES</h4>
                <div className="w-10 h-[2px] bg-[#413F4C] mt-3 mb-6"></div>
              </div>
              <ul className="space-y-[12px] text-md md:text-md text-[#413F4C]/90 font-medium tracking-wide">
                <li><Link href="/nri-corner" className="hover:text-[#413F4C]/70 transition-colors">NRI Corner</Link></li>
                <li><Link href="/blog" className="hover:text-[#413F4C]/70 transition-colors">Blog</Link></li>
                <li><Link href="/downloads" className="hover:text-[#413F4C]/70 transition-colors">Downloads</Link></li>
                <li><Link href="/buyers-guide" className="hover:text-[#413F4C]/70 transition-colors">Buyers Guide</Link></li>
                <li><Link href="/emi-calculator" className="hover:text-[#413F4C]/70 transition-colors">EMI Calculator</Link></li>
              </ul>
            </div>

            <div className="space-y-6 flex flex-col items-start lg:items-start lg:pl-12 xl:pl-0">
              <div className="w-full xl:w-64 space-y-6">

                <div>
                  <h4 className="font-bold text-xl md:text-base tracking-wide uppercase text-[#413F4C]">FOLLOW US ON</h4>
                  <div className="w-10 h-[2px] bg-[#413F4C] mt-3 mb-6"></div>
                </div>
                <div className="flex space-x-3 pb-4">
                  <Link href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#413F4C] flex items-center justify-center hover:bg-[#413F4C]/80 transition-colors"><Instagram className="w-4 h-4 md:w-5 md:h-5 text-[#BC9F81]" /></Link>
                  <Link href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#413F4C] flex items-center justify-center hover:bg-[#413F4C]/80 transition-colors"><span className="text-[#BC9F81] text-base font-bold">X</span></Link>
                  <Link href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#413F4C] flex items-center justify-center hover:bg-red-700 transition-colors"><Play fill="white" className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#BC9F81] ml-0.5" /></Link>
                  <Link href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#413F4C] flex items-center justify-center hover:bg-[#413F4C]/80 transition-colors"><Linkedin className="w-4 h-4 md:w-5 md:h-5 text-[#BC9F81]" /></Link>
                  <Link href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#413F4C] flex items-center justify-center hover:bg-[#413F4C]/80 transition-colors"><Facebook className="w-4 h-4 md:w-5 md:h-5 text-[#BC9F81]" /></Link>
                </div>

                <div>
                  <h4 className="font-bold text-xl md:text-base tracking-wide uppercase text-[#413F4C]">QUICK LINKS</h4>
                  <div className="w-10 h-[2px] bg-[#413F4C] mt-3 mb-6"></div>
                </div>
                <ul className="space-y-[12px] text-md md:text-md text-[#413F4C]/90 font-medium tracking-wide">
                  <li><Link href="/faqs" className="hover:text-[#413F4C]/70 transition-colors">FAQ's</Link></li>
                  <li><Link href="/contact" className="hover:text-[#413F4C]/70 transition-colors">Contact us</Link></li>
                </ul>

              </div>
            </div>
          </div>


          {/* Full Width Disclaimer with Read More Toggle */}
          <div className="relative z-10 w-full lg:w-[90%] xl:w-[85%] mt-16 mb-12">
            <strong className="text-[#413F4C] uppercase tracking-widest block mb-3 text-[14px] md:text-[15px] font-bold">Disclaimer:</strong>

            <div className={`text-[13px] md:text-[14px] leading-relaxed text-[#413F4C]/90 font-medium tracking-wide text-justify transition-all duration-300 ${isDisclaimerExpanded ? "space-y-4" : "line-clamp-2 md:line-clamp-2 overflow-hidden space-y-2"}`}>
              <p>
                This website is updated in accordance with the Real Estate (Regulation and Development) Act, 2016 (RERA). However, users are advised to verify all project details directly with the Company before making any investment decisions.
              </p>
              <p>
                www.parsvnath.com is the only official website of Parsvnath Developers Ltd. Users are strongly advised not to rely on information available on any other websites that may appear similar, use the Company's logo or brand name, or contain project details related to the Company.
              </p>
              <p>
                All content on this website, including brochures and marketing collaterals, is provided for informational purposes only. It does not constitute advertising, marketing, booking, selling, an offer for sale, or an invitation to purchase any unit in any project. Users should verify all information directly with the authorized sales team before making any purchase decision.
              </p>
              <p>
                Project-related content, including layouts, amenities, services, and terms of sale, is based on approved and sanctioned plans and may be subject to change as per legal or regulatory requirements. All visuals, images, and renderings on the website are for representational purposes only, unless explicitly stated otherwise.
              </p>
              <p>
                The Company provides all content strictly for informational purposes. Users are encouraged to exercise their own judgment and discretion when relying on this information.
              </p>
              <p>
                Some links on this website may direct users to third-party websites for convenience. Parsvnath Developers Ltd. does not endorse or take responsibility for the content or security of such external sites. Users should take appropriate precautions before accessing any third-party links.
              </p>
              <p>
                This website and its contents are provided "as is" and "as available," without any warranties of any kind. The Company disclaims all liability for any loss, damage, or expense, including indirect or consequential losses, arising from the use of this website or its content.
              </p>
              <p>
                By using this website, users agree to the terms of this disclaimer. Queries submitted through the website do not constitute official communication or booking confirmations. This disclaimer is governed by the laws of India, and any disputes shall be subject to the jurisdiction of Indian courts.
              </p>
              <p>
                This website contains proprietary notices and copyright information that must be respected. The Company reserves the right to update, modify, or change any content—including brochures, project details, and policies—without prior notice. Improvements or changes to projects, products, and programs may be made at any time.
              </p>
              <p>
                Thank you for visiting www.parsvnath.com. We appreciate your understanding.
              </p>
            </div>

            <button
              onClick={() => setIsDisclaimerExpanded(!isDisclaimerExpanded)}
              className="mt-4 text-[#413F4C] font-bold text-[13px] md:text-[14px] flex items-center hover:text-[#413F4C]/70 transition-colors uppercase tracking-wider"
            >
              {isDisclaimerExpanded ? "Read Less" : "Read More →"}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center w-full border-t border-black/10 pt-8 gap-6">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] md:text-[14px] text-[#413F4C]/90 font-medium">
              <Link href="/privacy-policy" className="hover:text-[#413F4C] transition-colors">Privacy Policy</Link>
              <div className="w-1 h-1 rounded-full bg-black/20 hidden md:block"></div>
              <Link href="/terms-of-use" className="hover:text-[#413F4C] transition-colors">Terms & Conditions</Link>
              <div className="w-1 h-1 rounded-full bg-black/20 hidden md:block"></div>
              <Link href="/disclaimer" className="hover:text-[#413F4C] transition-colors">Disclaimer</Link>
              <div className="w-1 h-1 rounded-full bg-black/20 hidden md:block"></div>
              <Link href="/cookies" className="hover:text-[#413F4C] transition-colors">Cookie Policy</Link>
              <div className="w-1 h-1 rounded-full bg-black/20 hidden md:block"></div>
              <Link href="/grievance-redressal" className="hover:text-[#413F4C] transition-colors">Grievance Redressal</Link>
              <div className="w-1 h-1 rounded-full bg-black/20 hidden md:block"></div>
              <Link href="/rera-disclosure" className="hover:text-[#413F4C] transition-colors">RERA Disclosure</Link>
            </div>
            <div className="text-[13px] md:text-[14px] text-[#413F4C]/90 font-medium">
              © 2026 Silicon. All rights reserved.
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
