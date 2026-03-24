import { PageHeader } from "@/components/layout/PageHeader";
import { FileText, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Buyer's Guideline - Real Estate Policies | Silicon",
  description: "Detailed policies, rules, and guidelines for buying premium property with Silicon.",
};

export default function GuidelinePage() {
  const policies = [
    {
      title: "Booking & Allotment",
      content: "A formal booking is confirmed only upon realization of the booking amount and signing of the initial application form. Unit allotment is subject to availability and the final discretion of management. Prices are subject to revision without prior notice prior to booking confirmation."
    },
    {
      title: "Payment Schedule",
      content: "Payments must strictly adhere to the construction-linked or time-linked payment plan chosen at the time of booking. Delayed payments will attract penal interest at the rate of 12% p.a. as per RERA guidelines."
    },
    {
      title: "Cancellation Policy",
      content: "In the event of cancellation by the purchaser, a cancellation fee (typically 10% of the property value or the earnest money, whichever is lower) will be deducted. The balance will be refunded within 90 days after the unit is re-sold."
    },
    {
      title: "Handover & Possession",
      content: "Possession is offered only after the full realization of the sale consideration, including statutory charges, maintenance deposits, and registration fees. The buyer must take possession within 30 days of the Offer of Possession notice."
    },
    {
      title: "Modifications & Alterations",
      content: "To maintain the structural integrity and aesthetic uniformity of the development, no external modifications (e.g., changing facade color, enclosing balconies) are permitted. Internal alterations require prior written approval from our architectural team."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#413F4C]">
      <PageHeader
        title="Buyer's Guideline"
        breadcrumbs={[
          { label: "Buyer's Guide", href: "/buyers-guide" },
          { label: "Guideline" }
        ]}
      />

      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Our Policies</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#413F4C] mb-4">
            Transparent Policies for a <span className="text-[#020D2F]">Smooth Acquisition</span>
          </h2>
          <div className="w-10 h-[2px] bg-[#413F4C] mx-auto mb-8"></div>
          <p className="text-[#413F4C]/70 font-medium max-w-2xl mx-auto text-lg leading-snug">
            At Silicon, we believe in absolute clarity. These guidelines ensure that your property buying journey is straightforward, secure, and fully compliant with regulations.
          </p>
        </div>

        <div className="space-y-5">
          {policies.map((policy, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 p-8 bg-[#F3EEEB] border border-[#413F4C]/10 hover:border-[#020D2F]/40 transition-all duration-300 hover:shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#020D2F] to-[#413F4C] flex items-center justify-center text-[#413F4C] font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#413F4C] mb-3">
                  {policy.title}
                </h3>
                <div className="w-6 h-[2px] bg-[#020D2F] mb-4"></div>
                <p className="text-[#413F4C]/70 font-medium leading-snug text-sm">
                  {policy.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#F3EEEB] border-l-4 border-[#020D2F] p-8 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#020D2F] flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg text-[#413F4C] mb-2">Legal Disclaimer</h4>
            <p className="text-sm font-medium text-[#413F4C]/70 leading-snug">
              The guidelines mentioned above are a brief overview. Detailed terms and conditions are explicitly mentioned in the official Application Form and Builder-Buyer Agreement (Agreement for Sale) customized as per the specific project's RERA registration.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


