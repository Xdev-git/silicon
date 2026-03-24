import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Globe, Building2, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "NRI Corner - Invest in Indore Real Estate | Silicon",
  description: "Special guidance, benefits, and FAQs for Non-Resident Indians looking to invest in Silicon's premium properties in Indore.",
};

export default function NriCornerPage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#020D2F]" />,
      title: "High ROI Potential",
      desc: "Indore is one of India's fastest-growing tier-2 cities, offering excellent capital appreciation and rental yields compared to saturated metros."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#020D2F]" />,
      title: "Seamless Remote Process",
      desc: "We offer end-to-end virtual tours, digital documentation, and dedicated NRI relationship managers to ensure a smooth buying experience from anywhere in the world."
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#020D2F]" />,
      title: "Premium Asset Quality",
      desc: "Invest in legacy-grade properties built with uncompromised structural integrity and world-class amenities designed for global lifestyles."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#020D2F]" />,
      title: "Transparent & Compliant",
      desc: "All our projects are RERA-registered with clear titles. We assist with FEMA guidelines, RBI regulations, and tax implications for NRI investments."
    }
  ];

  const faqs = [
    {
      question: "Can an NRI buy property in India without RBI permission?",
      answer: "Yes, NRIs and PIOs (Persons of Indian Origin) can freely purchase residential or commercial properties in India without seeking specific permission from the RBI. However, agricultural land, plantation property, or farmhouses cannot be purchased without specific RBI approval."
    },
    {
      question: "What are the funding options available for NRIs?",
      answer: "NRIs can fund their property purchase through inward remittance via normal banking channels or through funds held in NRE/FCNR(B)/NRO accounts maintained in India. Many leading Indian banks and housing finance companies also offer home loans to NRIs for up to 80% of the property value."
    },
    {
      question: "Can I give Power of Attorney (PoA) to someone in India to complete the purchase?",
      answer: "Yes, you can execute a Power of Attorney in favor of a trusted relative or friend in India. The PoA must be signed by you before a Notary Public or consulate officer in your country of residence, and then sent to India for adjudication and registration."
    },
    {
      question: "What are the tax implications on rental income and capital gains?",
      answer: "Rental income earned from property in India is subject to income tax under Indian laws. For capital gains, if the property is held for more than 2 years (Long Term Capital Gains), the tax rate is 20% with indexation benefits. TDS is applicable on the sale of property by an NRI."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#413F4C]">
      <PageHeader
        title="NRI Corner"
        breadcrumbs={[{ label: "NRI Corner" }]}
      />

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F]">For Non-Resident Indians</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#413F4C]">
              Your Roots in Indore, <br /><span className="text-[#020D2F]">Your Investment Global.</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#413F4C]"></div>
            <p className="text-[#413F4C]/80 font-medium leading-snug text-lg">
              At Silicon, we understand that investing in your homeland from miles away requires immense trust and a seamless process. We have curated a specialized experience for our NRI investors, ensuring that distance is never a barrier to owning a piece of Indore&apos;s finest real estate.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-[#020D2F] to-[#413F4C] text-[#413F4C] font-bold py-4 px-10 uppercase tracking-widest text-xs transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                Connect with NRI Expert
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full overflow-hidden shadow-2xl border border-[#413F4C]/10 group">
            <Image
              src="https://placehold.co/1200x800/E6E9EE/9AA0A6.png?text=Global+Investment"
              alt="Global Investment"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#413F4C] text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Investment Advantages</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Why Invest With <span className="text-[#020D2F]">Silicon?</span>
          </h2>
          <div className="w-10 h-[2px] bg-[#020D2F] mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 hover:-translate-y-2 hover:border-[#020D2F]/30 transition-all duration-300 text-left group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#020D2F]/10 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#020D2F] transition-colors">{benefit.title}</h3>
                <div className="w-6 h-[2px] bg-[#020D2F] mb-4"></div>
                <p className="text-white/60 font-medium text-sm leading-snug">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidance / FAQ Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F3EEEB]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Guidance</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#413F4C] mb-4">Investment Guidance & FAQs</h2>
            <div className="w-10 h-[2px] bg-[#413F4C] mx-auto mb-4"></div>
            <p className="text-[#413F4C]/70 font-medium leading-snug">Navigating Indian real estate as an NRI made simple.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-[#413F4C]/10 bg-white px-6 data-[state=open]:border-[#020D2F]/40 transition-colors">
                <AccordionTrigger className="text-left font-bold text-base text-[#413F4C] hover:text-[#020D2F] transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#413F4C]/70 font-medium leading-snug pb-5 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 bg-gradient-to-br from-[#020D2F] to-[#413F4C] p-8 text-center">
            <h3 className="text-2xl font-bold text-[#413F4C] mb-3">Need Personalized Assistance?</h3>
            <p className="text-[#413F4C]/70 font-medium mb-6 max-w-2xl mx-auto leading-snug text-sm">Our NRI desk is equipped to handle all your queries regarding FEMA guidelines, taxation, and property management.</p>
            <p className="text-lg font-bold text-[#413F4C] mb-1">nri.desk@silicon.com</p>
            <p className="text-[#413F4C]/70 font-medium text-sm">+91 99999 00000</p>
          </div>
        </div>
      </section>
    </main>
  );
}


