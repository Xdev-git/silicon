import { PageHeader } from "@/components/layout/PageHeader";
import { Search, Calculator, CheckCircle, Home, FileSignature, Key } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "First Steps to Buying a Home | Silicon",
  description: "A comprehensive step-by-step introduction for first-time homebuyers navigating the real estate market with Silicon.",
};

export default function FirstStepsPage() {
  const steps = [
    {
      icon: <Calculator className="w-8 h-8 text-[#BC9F81]" />,
      title: "Assess Financial Readiness",
      desc: "Before house hunting, evaluate your savings for a down payment (usually 10-20%), check your CIBIL score, and calculate an EMI that comfortably fits your monthly income."
    },
    {
      icon: <Search className="w-8 h-8 text-[#BC9F81]" />,
      title: "Define Your Requirements",
      desc: "Identify your priority list: location (proximity to work, schools), size (BHK), premium amenities, and property status (ready-to-move vs. under-construction)."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#BC9F81]" />,
      title: "Shortlist & Site Visits",
      desc: "Visit shortlisted Silicon projects. Experience the construction quality, understand the master plan, and interact with our sales experts regarding specific unit availability."
    },
    {
      icon: <FileSignature className="w-8 h-8 text-[#BC9F81]" />,
      title: "Booking & Documentation",
      desc: "Once decided, fill out the application form with the initial booking amount. Submit necessary KYC documents and receive your allotment letter."
    },
    {
      icon: <Home className="w-8 h-8 text-[#BC9F81]" />,
      title: "Loan Processing",
      desc: "Our financial tie-ups with leading banks streamline your home loan approval process. The bank will disburse phases based on the construction-linked plan."
    },
    {
      icon: <Key className="w-8 h-8 text-[#BC9F81]" />,
      title: "Registration & Possession",
      desc: "Upon project completion and final payment, we facilitate the property registration at the sub-registrar's office followed by a ceremonious handover of keys."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#413F4C]">
      <PageHeader
        title="Buyer's First Steps"
        breadcrumbs={[
          { label: "Buyer's Guide", href: "/buyers-guide" },
          { label: "First Steps" }
        ]}
      />

      {/* Guide Intro */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#BC9F81] mb-4">Step by Step</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#413F4C] mb-4">
          Your Journey to <span className="text-[#BC9F81]">Homeownership</span>
        </h2>
        <div className="w-10 h-[2px] bg-[#413F4C] mx-auto mb-8"></div>
        <p className="text-[#413F4C]/70 font-medium max-w-3xl mx-auto text-lg leading-snug">
          Buying your first premium home is a milestone event. At Silicon, we aim to make this experience transparent, secure, and profoundly memorable. Follow these essential first steps to navigate the real estate landscape of Indore with confidence.
        </p>
      </section>

      {/* Steps Grid */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-[#F3EEEB]">
        <div className="max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white border border-[#413F4C]/10 p-8 hover:border-[#BC9F81]/50 hover:-translate-y-2 transition-all duration-300 group shadow-sm flex flex-col items-center text-center relative mt-6 lg:mt-0">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#BC9F81] to-[#AD9266] text-[#413F4C] font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center z-20 shadow-md">
                  {index + 1}
                </div>

                <div className="w-16 h-16 rounded-full bg-[#F3EEEB] flex items-center justify-center mb-5 mt-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-[#413F4C] mb-3 group-hover:text-[#BC9F81] transition-colors">
                  {step.title}
                </h3>
                <div className="w-6 h-[2px] bg-[#BC9F81] mb-3"></div>
                <p className="text-[#413F4C]/70 font-medium leading-snug text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Connect Section */}
      <section className="py-24 px-6 md:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#BC9F81] to-[#AD9266] p-12 border border-[#413F4C]/10 shadow-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#413F4C]/60 mb-4">We're Here to Help</p>
          <h3 className="text-3xl font-bold tracking-tight text-[#413F4C] mb-4">Still Feeling Overwhelmed?</h3>
          <div className="w-10 h-[2px] bg-[#413F4C] mx-auto mb-6"></div>
          <p className="text-[#413F4C]/80 font-medium mb-8 text-lg leading-snug">
            Our dedicated housing advisors are here to guide you through every detail, ensuring your first investment is your best investment.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#413F4C] text-white font-bold py-4 px-10 uppercase tracking-widest text-xs transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
