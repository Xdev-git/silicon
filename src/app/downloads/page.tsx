import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Downloads | Silicon Real Estate",
  description: "Download project brochures, layouts, and other documents.",
};

const downloads = [
  { name: "Silicon City Brochure", size: "4.2 MB", type: "PDF" },
  { name: "Silicon Estate Master Plan", size: "2.8 MB", type: "PDF" },
  { name: "Silicon Heights Floor Plans", size: "5.1 MB", type: "PDF" },
  { name: "Silicon Valley Brochure", size: "3.9 MB", type: "PDF" },
  { name: "Buyer's Guide 2026", size: "1.5 MB", type: "PDF" },
  { name: "Corporate Profile", size: "3.2 MB", type: "PDF" },
];

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-white pb-20 font-sans text-[#413F4C]">
      {/* Hero Image */}
      <div
        className="relative w-full h-[360px] mt-[80px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 1vw), 0 100%)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Resources</p>
          <h1 className="text-white uppercase tracking-widest font-bold mb-4 drop-shadow-lg text-3xl md:text-5xl">
            Downloads
          </h1>
          <div className="w-12 h-[2px] mx-auto bg-[#020D2F]"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-[#413F4C]/60 font-medium mb-12">
          <Link href="/" className="hover:text-[#020D2F] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#020D2F] font-bold">Downloads</span>
        </nav>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3EEEB] border border-[#413F4C]/10 p-6 flex items-start justify-between group hover:border-[#020D2F]/40 transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#413F4C] group-hover:text-[#020D2F] transition-colors">{item.name}</h3>
                <div className="flex items-center gap-3 text-sm text-[#413F4C]/60">
                  <span className="uppercase tracking-wider font-bold text-xs">{item.type}</span>
                  <span className="w-1 h-1 bg-[#413F4C]/30 rounded-full"></span>
                  <span className="font-medium">{item.size}</span>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-white border border-[#413F4C]/10 flex items-center justify-center text-[#413F4C]/50 group-hover:bg-gradient-to-br group-hover:from-[#020D2F] group-hover:to-[#413F4C] group-hover:text-[#413F4C] group-hover:border-[#020D2F] transition-all duration-300 shadow-sm">
                <Download className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-10 border border-[#020D2F]/30 bg-[#F3EEEB] text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#020D2F] mb-4">Support</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#413F4C] mb-3">Need Specific Documentation?</h2>
          <div className="w-8 h-[2px] bg-[#413F4C] mx-auto mb-6"></div>
          <p className="text-[#413F4C]/70 font-medium mb-8 max-w-2xl mx-auto leading-snug">
            If you are looking for specific project documents or legal clearances that are not listed here, please reach out to our support team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#020D2F] to-[#413F4C] text-[#413F4C] px-8 py-4 font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}


