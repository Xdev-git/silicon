import { MonitorPlay, MapPin, Download, FileText } from "lucide-react";

export function ProjectActionButtons({ info }: { info: any }) {
  const actions = [
    { label: "Project\nWalkthrough", icon: MonitorPlay },
    { label: "Location\nMap", icon: MapPin },
    { label: "Download\nBrochure", icon: Download },
    { label: "Download\nApplication", icon: FileText }
  ];

  return (
    <div className="bg-black text-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 items-center">
          
          {/* Left Side: Buttons Grid */}
          <div className="grid grid-cols-2 gap-y-12 sm:pr-12">
            {actions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={idx}
                  className="flex items-center gap-4 text-left group hover-lift px-1 py-1"
                >
                  <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                    <Icon className="w-5 h-5 text-zinc-300 group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-[13px] leading-tight text-zinc-300 font-medium whitespace-pre-line group-hover:text-white transition-colors">
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Side: Information Block */}
          <div className="space-y-4">
            <h3 className="text-white font-bold">{info.title}</h3>
            <p className="text-[13px] text-zinc-300 leading-relaxed font-light">
              {info.text}
            </p>
            <p className="text-[13px] text-white/70 font-medium mt-6 uppercase tracking-widest">
              RERA No: {info.rera}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

