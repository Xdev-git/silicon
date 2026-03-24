"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { CustomSelect } from "@/components/ui/CustomSelect";

const residenceOptions = [
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "plot", label: "Plot" },
];

const priceRangeOptions = [
  { value: "under1cr", label: "Under 1 Cr" },
  { value: "1to3cr", label: "1 Cr – 3 Cr" },
  { value: "above3cr", label: "Above 3 Cr" },
];

export function LegalPageForm() {
  const [residenceType, setResidenceType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <form className="text-left space-y-12 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
        {/* First Name */}
        <div className="relative group">
          <input type="text" id="lp-firstName" className="peer w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-white placeholder-transparent transition-colors" placeholder="First Name *" required />
          <label htmlFor="lp-firstName" className="absolute left-0 top-2 text-xs font-semibold text-white/50 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white/70 cursor-text">First Name *</label>
        </div>

        {/* Last Name */}
        <div className="relative group">
          <input type="text" id="lp-lastName" className="peer w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-white placeholder-transparent transition-colors" placeholder="Last Name *" required />
          <label htmlFor="lp-lastName" className="absolute left-0 top-2 text-xs font-semibold text-white/50 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white/70 cursor-text">Last Name *</label>
        </div>

        {/* Email */}
        <div className="relative group">
          <input type="email" id="lp-email" className="peer w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-white placeholder-transparent transition-colors" placeholder="Email *" required />
          <label htmlFor="lp-email" className="absolute left-0 top-2 text-xs font-semibold text-white/50 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white/70 cursor-text">Email *</label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
        {/* Residence Type — Custom Select */}
        <CustomSelect
          id="lp-residenceType"
          label="Residence Type"
          options={residenceOptions}
          value={residenceType}
          onChange={setResidenceType}
          required
          theme="dark"
        />

        {/* Phone */}
        <div className="relative group flex items-end">
          <div className="flex-shrink-0 mr-3 pb-2 text-white/50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
          </div>
          <div className="relative w-full">
            <input type="tel" id="lp-phone" className="peer w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-white placeholder-transparent transition-colors" placeholder="Phone *" required />
            <label htmlFor="lp-phone" className="absolute left-0 top-2 text-xs font-semibold text-white/50 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white/70 cursor-text">Phone *</label>
          </div>
        </div>

        {/* Price Range — Custom Select */}
        <CustomSelect
          id="lp-priceRange"
          label="Price Range"
          options={priceRangeOptions}
          value={priceRange}
          onChange={setPriceRange}
          required
          theme="dark"
        />
      </div>

      <div className="text-center pt-8">
        <button type="submit" className="group relative bg-white text-black hover:text-white font-bold py-3.5 px-16 overflow-hidden tracking-widest uppercase transition-all duration-300">
          <span className="relative z-10">Submit</span>
          <div className="absolute inset-0 h-full w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
        </button>
      </div>
    </form>
  );
}
