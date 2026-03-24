import { PageHeader } from "@/components/layout/PageHeader";
import { CheckSquare, FileText, IndianRupee, Briefcase, FileSignature, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Property Document & Financial Checklist | Silicon",
  description: "A comprehensive checklist for property registration, home loans, and home buying in Indore with Silicon.",
};

export default function ChecklistPage() {
  const checklists = [
    {
      category: "KYC & Identity Proof",
      icon: <Briefcase className="w-6 h-6 text-[#BC9F81]" />,
      items: [
        "Aadhar Card (Mandatory for registration)",
        "PAN Card (Mandatory for transactions above ₹50,000)",
        "Passport (For NRIs / PIOs)",
        "Recent Passport Size Photographs (Minimum 4)",
        "Proof of current residential address (Utility Bills/Voter ID)"
      ]
    },
    {
      category: "Income & Financials (For Home Loan)",
      icon: <IndianRupee className="w-6 h-6 text-[#BC9F81]" />,
      items: [
        "Last 6 months' salary slips (Salaried)",
        "Last 2 years' IT Returns (Form 16 / ITR)",
        "Last 6 months' bank statements reflecting salary credit",
        "Business Proof & Balance Sheet (Self-employed)",
        "Processing fee cheque in favor of the lending bank"
      ]
    },
    {
      category: "Property & Developer Documents",
      icon: <FileSignature className="w-6 h-6 text-[#BC9F81]" />,
      items: [
        "Allotment Letter & Booking Receipt issued by Silicon",
        "Builder-Buyer Agreement (Agreement for Sale)",
        "No Objection Certificate (NOC) from the developer",
        "Tripartite Agreement (Developer, Buyer, Bank) if applicable",
        "Demand letter for the current construction stage"
      ]
    },
    {
      category: "Registration & Stamp Duty",
      icon: <FileText className="w-6 h-6 text-[#BC9F81]" />,
      items: [
        "Demand draft/challan for Stamp Duty calculation",
        "Demand draft for Registration Fees",
        "2 Witnesses with their Aadhar & PAN cards",
        "TDS deposit challan (Form 26QB) if property value exceeds ₹50 Lakhs",
        "Occupancy Certificate (OC) / Completion Certificate details"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#413F4C] pb-24">
      <PageHeader
        title="Document Checklist"
        breadcrumbs={[
          { label: "Buyer's Guide", href: "/buyers-guide" },
          { label: "Checklist" }
        ]}
      />

      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mt-24">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#BC9F81] mb-4">Be Prepared</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#413F4C] mb-4">
            Prepare for a <span className="text-[#BC9F81]">Seamless Transition</span>
          </h2>
          <div className="w-10 h-[2px] bg-[#413F4C] mx-auto mb-8"></div>
          <p className="text-[#413F4C]/70 font-medium max-w-3xl mx-auto text-lg leading-snug">
            Acquiring your dream property involves meticulous documentation. Use this comprehensive checklist to ensure you have all necessary paperwork organized for booking, loan processing, and final registration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {checklists.map((list, index) => (
            <div key={index} className="bg-[#F3EEEB] border border-[#413F4C]/10 p-8 hover:border-[#BC9F81]/40 hover:shadow-md transition-all duration-300 group relative overflow-hidden">
              {/* Decorative background number */}
              <div className="absolute -bottom-6 -right-6 text-6xl font-black text-[#413F4C]/5 select-none pointer-events-none">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6 border-b border-[#413F4C]/10 pb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BC9F81] to-[#AD9266] flex items-center justify-center">
                    {list.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#413F4C] group-hover:text-[#BC9F81] transition-colors">{list.category}</h3>
                </div>

                <ul className="space-y-4">
                  {list.items.map((item, i) => (
                    <li key={i} className="flex items-start text-[#413F4C]/70 group/item">
                      <CheckSquare className="w-5 h-5 text-[#BC9F81]/70 mr-3 mt-0.5 flex-shrink-0 group-hover/item:text-[#BC9F81] transition-colors" />
                      <span className="font-medium leading-snug text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Action Call */}
        <div className="mt-16 bg-[#F3EEEB] border-l-4 border-[#BC9F81] p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-[#BC9F81] flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-[#413F4C] mb-2">Note for NRI Buyers</h4>
              <p className="text-[#413F4C]/70 font-medium leading-snug mb-4 max-w-4xl text-sm">
                In addition to the above, Non-Resident Indians require a valid Passport, PIO/OCI card, and potentially an attested Power of Attorney (PoA) if represented by someone locally. Payments must strictly be routed through NRE/NRO accounts.
              </p>
              <Link href="/nri-corner" className="inline-flex items-center text-[#BC9F81] font-bold uppercase tracking-wider text-xs hover:text-[#413F4C] transition-colors">
                Visit NRI Corner →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
