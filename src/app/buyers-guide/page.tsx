import Link from "next/link";
import { ChevronRight, FileText, BadgeCheck, Scale, Key } from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-8 h-8 text-[#020D2F]" />,
    title: "1. Understanding Requirements",
    description: "Begin by clearly defining your needs, budget, and preferred locations. Consider factors like proximity to work, schools, and future infrastructure developments.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-[#020D2F]" />,
    title: "2. Exploring Options & Site Visits",
    description: "Shortlist properties that match your criteria. Schedule site visits to experience the space, check the quality of construction, and understand the surrounding neighborhood.",
  },
  {
    icon: <Scale className="w-8 h-8 text-[#020D2F]" />,
    title: "3. Legal & Financial Due Diligence",
    description: "Verify all legal documents including title deeds, RERA registration, and necessary approvals. Secure your home loan pre-approval to understand your exact budget.",
  },
  {
    icon: <Key className="w-8 h-8 text-[#020D2F]" />,
    title: "4. Agreement & Registration",
    description: "Sign the Builder-Buyer agreement understanding all clauses. Complete the payment schedule as per the agreement, followed by final property registration and possession.",
  }
];

export default function BuyersGuidePage() {
  return (
    <main className="min-h-screen bg-white text-[#413F4C]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <nav className="flex justify-center items-center text-xs text-white/50 mb-6 font-semibold uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2" />
            <span className="text-[#020D2F]">Buyer's Guide</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Your Journey</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-widest drop-shadow-lg">
            The Buyer's Guide
          </h1>
          <div className="w-12 h-[2px] bg-[#020D2F] mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-medium leading-snug">
            A comprehensive roadmap to help you navigate your journey toward owning a premium Silicon property.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Your Journey Starts Here</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#413F4C] mb-4">Making the <span className="text-[#020D2F]">Right Choice</span></h2>
          <div className="w-10 h-[2px] bg-[#413F4C] mx-auto mb-8"></div>
          <p className="text-[#413F4C]/70 font-medium md:text-lg leading-snug">
            Buying a home is one of the most significant decisions you will make. At Silicon, we believe this process should be transparent, informed, and completely stress-free. Our guide outlines the essential steps to ensure a smooth transition from finding your dream home to finally turning the key.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-[#F3EEEB]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 border border-[#413F4C]/10 hover:border-[#020D2F]/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-[#F3EEEB] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-[#413F4C] mb-3 group-hover:text-[#020D2F] transition-colors">{step.title}</h3>
                <div className="w-6 h-[2px] bg-[#020D2F] mb-4"></div>
                <p className="text-[#413F4C]/70 font-medium text-sm leading-snug">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-32 bg-gradient-to-br from-[#020D2F] to-[#413F4C] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#413F4C]/60 mb-4">Preparation</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#413F4C] mb-4">Essential Documents Checklist</h2>
              <div className="w-10 h-[2px] bg-[#413F4C] mb-8"></div>
              <p className="text-[#413F4C]/80 font-medium leading-snug mb-10">
                To ensure a fast and hassle-free booking and registration process, we recommend keeping these standard documents ready.
              </p>

              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-[#413F4C] text-white font-bold py-4 px-10 uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                Speak to an Advisor
                <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
              </Link>
            </div>

            <div className="bg-white/20 backdrop-blur-md p-8 md:p-12 border border-[#413F4C]/20">
              <ul className="space-y-5">
                {[
                  "PAN Card & Aadhar Card (All Applicants)",
                  "Passport Size Photographs",
                  "Address Proof (Passport/Voter ID)",
                  "Last 6 Months Bank Statements",
                  "Latest Salary Slips (Last 3 Months)",
                  "Form 16 / Income Tax Returns",
                  "Processing Fee Cheque"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#413F4C]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#413F4C]"></div>
                    </div>
                    <span className="font-medium text-[#413F4C]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



