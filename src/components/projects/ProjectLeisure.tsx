import Image from "next/image";

export function ProjectLeisure({ leisure }: { leisure: any }) {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-zinc-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-[1400px] mx-auto">
        
        {/* Left Content - Image */}
        <div className="relative aspect-[4/3] w-full max-w-2xl">
          <Image
            src={leisure.image}
            alt="Leisure"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <div>
            <h3 className="text-accent mb-2">{leisure.title}</h3>
            <h2 className="text-accent leading-tight uppercase relative inline-block">
              {leisure.subtitle}
              <div className="absolute -bottom-4 left-0 w-24 h-[1px] bg-accent"></div>
            </h2>
          </div>
          
          <p className="text-zinc-600 leading-relaxed text-[15px] max-w-xl pr-8">
            {leisure.text}
          </p>

          <button className="px-8 py-3 mt-4 border border-accent text-accent uppercase tracking-widest text-xs font-bold hover:bg-accent hover:text-black transition-all duration-300 hover-scale">
            View Highlights
          </button>
        </div>

      </div>
    </div>
  );
}
