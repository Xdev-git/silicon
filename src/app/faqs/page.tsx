"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What makes Silicon properties unique?",
        a: "Silicon properties are distinguished by their exceptional architectural design, premium locations in Central India, and an unwavering commitment to sustainable, luxury living. Every project integrates state-of-the-art amenities with thoughtful space planning."
      },
      {
        q: "How can I schedule a site visit?",
        a: "You can schedule a site visit by filling out the 'Enquire Now' form available on our website, calling our toll-free number at 1800 121 3344, or emailing us directly at connect@silicongroup.in. Our team will coordinate a time that suits your convenience."
      },
      {
        q: "Do you offer Vastu-compliant homes?",
        a: "Yes, the majority of our residential projects are designed with strict adherence to Vastu Shastra principles, ensuring a harmonious and positive living environment for our residents."
      }
    ]
  },
  {
    category: "Home Loans & Financing",
    questions: [
      {
        q: "Do you assist with home loans?",
        a: "Absolutely. We have tied up with leading nationalized and private banks to provide seamless home loan processing for our customers at preferred interest rates."
      },
      {
        q: "What is the typical down payment required?",
        a: "Typically, banks finance up to 80-90% of the property value depending on your eligibility. Therefore, you would need to arrange a down payment of 10-20% of the total property cost."
      }
    ]
  },
  {
    category: "Project Handover",
    questions: [
      {
        q: "What is the standard possession timeline?",
        a: "Possession timelines vary by project. However, we are known for our timely delivery. Specific possession dates are clearly mentioned in the Builder-Buyer agreement and adhered to strictly."
      },
      {
        q: "Who manages the property after handover?",
        a: "Post-handover, the property management is typically handed over to a formally registered Residents' Welfare Association (RWA) or a dedicated professional facility management company appointed by us."
      }
    ]
  }
];

export default function FAQsPage() {
  const [openCategory, setOpenCategory] = useState<number>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (catIndex: number, qIndex: number) => {
    if (openCategory === catIndex && openIndex === qIndex) {
      setOpenIndex(null);
    } else {
      setOpenCategory(catIndex);
      setOpenIndex(qIndex);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#413F4C]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <nav className="flex justify-center items-center text-xs text-white/50 mb-6 font-semibold uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2" />
            <span className="text-[#020D2F]">FAQs</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Help Center</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-widest drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <div className="w-12 h-[2px] bg-[#020D2F] mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-medium leading-snug">
            Find answers to common questions about our properties, purchasing processes, and services.
          </p>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[2px] bg-[#020D2F] hidden md:block"></div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#413F4C]">
                  {category.category}
                </h2>
              </div>

              <div className="space-y-3">
                {category.questions.map((faq, qIndex) => {
                  const isOpen = openCategory === catIndex && openIndex === qIndex;

                  return (
                    <div
                      key={qIndex}
                      className={`border overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#F3EEEB] border-[#020D2F]/40 shadow-sm' : 'bg-white border-[#413F4C]/10 hover:border-[#413F4C]/30'}`}
                    >
                      <button
                        onClick={() => toggleAccordion(catIndex, qIndex)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none group/faq"
                      >
                        <h3 className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-[#020D2F]' : 'text-[#413F4C] group-hover/faq:text-[#020D2F]'}`}>
                          {faq.q}
                        </h3>
                        <div className={`w-8 h-8 rounded-full border flex flex-shrink-0 items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#020D2F] border-[#020D2F] text-[#413F4C]' : 'border-[#413F4C]/20 text-[#413F4C]/50 bg-transparent'}`}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="px-6 pb-6 text-[#413F4C]/70 font-medium text-sm md:text-base leading-snug border-t border-[#413F4C]/10 pt-4 mt-2">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-[#F3EEEB] py-24 border-t border-[#413F4C]/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Support</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#413F4C] mb-4">Still Have Questions?</h2>
          <div className="w-10 h-[2px] bg-[#413F4C] mx-auto mb-8"></div>
          <p className="text-[#413F4C]/70 font-medium mb-10 max-w-xl mx-auto leading-snug">
            If you couldn't find the answer you were looking for, our team is always ready to assist you.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#020D2F] to-[#413F4C] text-[#413F4C] font-bold py-4 px-10 uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}


