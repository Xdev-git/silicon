import Image from "next/image";

export function ProjectMasterPlan({ image }: { image: string }) {
  return (
    <div className="py-24 bg-[#eaeae6]">
      <div className="container mx-auto px-4 text-center mb-16">
        <div className="flex items-center justify-center gap-6">
          <div className="w-16 md:w-32 h-[1px] bg-accent"></div>
          <h2 className="text-accent uppercase tracking-widest px-4">
            MASTER PLAN
          </h2>
          <div className="w-16 md:w-32 h-[1px] bg-accent"></div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 max-h-[800px] overflow-hidden relative shadow-2xl">
        <Image
          src={image}
          alt="Master Plan"
          width={2000}
          height={1200}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
