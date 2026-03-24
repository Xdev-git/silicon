import Image from "next/image";

export function ProjectHighlights({ highlights }: { highlights: string[] }) {
  return (
    <div className="bg-accent text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* Left Content - Details */}
        <div className="py-24 px-8 md:px-16 lg:px-24 flex flex-col justify-center max-w-3xl ml-auto w-full">
          <div className="space-y-8">
            <div>
              <h3 className="text-white/60 uppercase tracking-[0.2em] text-sm font-bold mb-4">Lorem Ipsum</h3>
              <h2 className="text-white leading-tight max-w-xl text-3xl font-bold uppercase tracking-tight">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING
              </h2>
            </div>
            
            <ul className="space-y-6 mt-8">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-white/40 rounded-full shrink-0"></div>
                  <p className="text-sm md:text-[15px] font-medium tracking-wide uppercase text-white/80 leading-relaxed">
                    {highlight}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content - Full Image */}
        <div className="relative w-full h-96 lg:h-auto">
          <Image
            src="https://placehold.co/1200x800/E6E9EE/9AA0A6.png?text=Highlights"
            alt="Highlights"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}

