import Image from "next/image";

interface Project {
  title: string;
  heroImage: string;
  status: string;
  subtitle: string;
  description: string;
}

export function ProjectHero({ project }: { project: Project }) {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex items-end pb-24 border-b-8 border-accent">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-6 md:px-12 text-white">
        <div className="max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-end gap-2 mb-4">
            <h1 className="font-serif tracking-tight leading-none drop-shadow-lg text-white">
              <span className="block text-xl tracking-[0.2em] font-medium mb-1">
                {project.title.split(" ")[0]}
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                {project.title.split(" ")[1] || project.title.split(" ")[0]}
              </span>
            </h1>
            <div className="bg-[#cc2b28] border border-accent md:ml-4 md:mb-6 self-start md:self-auto px-5 py-2 rounded-l-sm rounded-r-3xl text-[11px] font-extrabold tracking-widest uppercase shadow-lg">
              {project.status}
            </div>
          </div>
          <p className="text-lg md:text-xl lg:text-3xl font-light text-zinc-100 mt-6 mb-3 tracking-wide">
            {project.subtitle}
          </p>
          <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
