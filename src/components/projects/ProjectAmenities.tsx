import Image from "next/image";

export function ProjectAmenities({ amenities, image }: { amenities: string[], image: string }) {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-24 bg-[#f8f6f0]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-[1400px] mx-auto">
        
        {/* Left Content - Image */}
        <div className="relative aspect-[3/4] w-full max-w-xl mx-auto lg:mx-0">
          <Image
            src="https://placehold.co/800x1200/E6E9EE/9AA0A6.png?text=Amenities+Preview"
            alt="Amenities"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-12">
          <div>
            <h3 className="text-accent mb-2 uppercase">Experience</h3>
            <h2 className="text-accent uppercase relative inline-block">
              AMENITIES
              <div className="absolute -bottom-4 left-0 w-32 h-[1px] bg-accent"></div>
            </h2>
          </div>
          
          <div className="pt-4 space-y-4">
            <p className="text-zinc-500 italic mb-8">Awaken your senses at every turn</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {amenities.map((amenity, idx) => (
                <li key={idx} className="flex items-center gap-3 text-zinc-600 text-sm md:text-base font-medium">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></div>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
