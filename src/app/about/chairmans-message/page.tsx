import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Quote } from "lucide-react";

export default function ChairmansMessagePage() {
  return (
    <main className="min-h-screen bg-white text-[#413F4C]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <nav className="flex justify-center items-center text-xs text-white/50 mb-6 font-semibold uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2" />
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2" />
            <span className="text-[#BC9F81]">Chairman's Message</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest text-[#BC9F81] mb-4">Leadership</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-widest drop-shadow-lg">
            Chairman's Message
          </h1>
          <div className="w-12 h-[2px] bg-[#BC9F81] mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-medium leading-snug">
            A vision built on trust, quality, and an unwavering commitment to redefining the skylines of Central India.
          </p>
        </div>
      </section>

      {/* Message Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Image Column */}
            <div className="lg:col-span-5 relative sticky top-32">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://placehold.co/800x1200/E6E9EE/9AA0A6.png?text=Our+Chairman"
                  alt="Chairman of Silicon"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay Name Plate */}
              <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-white p-8 md:p-10 shadow-2xl z-10 hidden sm:block border-l-4 border-[#BC9F81]">
                <h3 className="text-[#413F4C] mb-2 font-bold tracking-tight text-xl">Mr. R.K. Sharma</h3>
                <p className="text-xs uppercase tracking-widest text-[#413F4C]/60 font-bold">Founder & Chairman</p>
                <div className="w-12 h-[2px] bg-[#BC9F81] mt-4"></div>
              </div>

              {/* Mobile Name Plate */}
              <div className="bg-white p-6 shadow-xl z-10 mt-[-2rem] relative mx-4 sm:hidden border-l-4 border-[#BC9F81]">
                <h3 className="text-[#413F4C] mb-1 font-bold text-lg">Mr. R.K. Sharma</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#413F4C]/60 font-bold">Founder & Chairman</p>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 pt-8 lg:pt-0">

              <Quote className="w-16 h-16 text-[#BC9F81]/40 mb-8 -ml-4" />

              <p className="text-xl md:text-2xl font-bold leading-snug text-[#413F4C] mb-10 border-l-4 border-[#BC9F81] pl-6">
                "Our aim has never been just to build structures. We strive to create environments that elevate lifestyles, foster communities, and stand as testaments to uncompromising quality."
              </p>

              <div className="space-y-6 text-[#413F4C]/80 font-medium text-base md:text-lg leading-snug">
                <p>Dear Friends and Partners,</p>
                <p>
                  Welcome to Silicon. When we laid the foundation of this company over two decades ago, our vision was clear: to transform the real estate landscape of Central India by introducing world-class living and commercial spaces.
                </p>
                <p>
                  Today, as I look back at our journey, I am filled with immense pride. We have successfully delivered over 5 million square feet of premium real estate, bringing smiles to thousands of families and businesses. But more than the numbers, what matters to us is the trust you have placed in the Silicon name.
                </p>
                <p>
                  In an ever-evolving market, our core philosophy remains unchanged—delivering excellence without compromise. We understand that investing in real estate is a significant milestone. It is an emotional and financial commitment. Therefore, transparency, timely delivery, and superior construction quality are not just business practices for us; they are our moral obligations.
                </p>
                <p>
                  Looking ahead, our focus is sharply set on sustainable development. We are increasingly integrating eco-friendly technologies, smart home features, and expansive green spaces into our projects. We are not just building for today; we are building sustainable legacies for tomorrow.
                </p>
                <p>
                  I invite you to explore our upcoming projects. Whether you are looking for a luxurious residence or state-of-the-art office space, you will find our signature touch of elegance, innovation, and trust in every brick we lay.
                </p>
                <p>
                  Thank you for being part of the Silicon journey. We look forward to welcoming you to your new home.
                </p>

                <div className="pt-12 mt-12 border-t border-[#413F4C]/10 flex items-center gap-6">
                  <div className="font-bold text-3xl text-[#413F4C]/80" style={{ fontFamily: "'Dancing Script', cursive, serif" }}>
                    R.K. Sharma
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
