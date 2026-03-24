import Image from "next/image";

export function ProjectFloorPlans({ floorPlans }: { floorPlans: { title: string, image: string }[] }) {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-[#c3a06a]/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-[1400px] mx-auto">
        
        {/* Left Content - Floor Plans */}
        <div>
          <h2 className="text-accent uppercase text-center mb-12 relative inline-block mx-auto flex justify-center">
            FLOOR PLANS
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-accent"></div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
            {floorPlans.map((plan, idx) => (
              <div key={idx} className="bg-white p-4 shadow-sm border border-zinc-100 group cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] w-full mb-4">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-center font-medium text-zinc-700 text-sm group-hover:text-accent transition-colors">{plan.title}</p>
              </div>
            ))}

            {/* Simple Caret Indicators (aesthetic) */}
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-zinc-300 hidden md:block">&lt;</div>
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-zinc-300 hidden md:block">&gt;</div>
          </div>
        </div>

        {/* Right Content - Construction Updates */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-accent mb-8 border-l-4 border-accent pl-4">
            Construction Updates
          </h2>
          
          <div className="relative w-full aspect-[4/3] flex-1">
            <Image
              src="https://placehold.co/1000x750/E6E9EE/9AA0A6.png?text=Construction+Site"
              alt="Construction Update"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6">
              <button className="bg-accent text-white px-6 py-2 text-sm font-bold tracking-wider hover:bg-[#c3a06a] transition-all hover:scale-105">
                View All
              </button>
            </div>
            <p className="absolute bottom-2 right-4 text-xs text-white/80 font-medium">As of January 2026</p>
          </div>
        </div>

      </div>
    </div>
  );
}

