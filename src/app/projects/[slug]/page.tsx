import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectOverview } from "@/components/projects/ProjectOverview";
import { ProjectActionButtons } from "@/components/projects/ProjectActionButtons";
import { ProjectLeisure } from "@/components/projects/ProjectLeisure";
import { ProjectHighlights } from "@/components/projects/ProjectHighlights";
import { ProjectAmenities } from "@/components/projects/ProjectAmenities";
import { ProjectMasterPlan } from "@/components/projects/ProjectMasterPlan";
import { ProjectFloorPlans } from "@/components/projects/ProjectFloorPlans";
import { ProjectStickyNav } from "@/components/projects/ProjectStickyNav";

// Mock Data for the template
const projectData = {
  title: "SATTVA SPRINGS",
  subtitle: "Magnificent Villas, Row Houses For Sophisticated Living",
  description: "Next level luxury on Kanakapura Road at South Bangalore.",
  status: "NEW LAUNCHES",
  heroImage: "https://placehold.co/1920x1080/E6E9EE/9AA0A6.png?text=Project+Hero",
  overview: {
    acreage: "22",
    units: "66",
    typology: "4 BHK",
    title: "ULTIMATE LIVING",
    name: "SATTVA SPRINGS",
    text: "Sattva Springs, where life transcends expectations, seamlessly blending comfort, privacy, connectivity, and a vibrant community. Nestled along Kanakapura Road, these meticulously crafted luxury residences offer a collection of 66 majestic Row Houses. Each designed to seamlessly blend comfort, privacy, and connectivity. Imagine a life that transcends expectations, where thoughtfully designed layouts and curated amenities transform your dreams into reality. With an ideal location in South Bengaluru close to Art of Living.",

    images: [
      "https://placehold.co/1000x800/E6E9EE/9AA0A6.png?text=Interior+1",
      "https://placehold.co/1000x800/E6E9EE/9AA0A6.png?text=Interior+2",
      "https://placehold.co/1000x800/E6E9EE/9AA0A6.png?text=Interior+3"
    ]
  },
  actionInfo: {
    title: "Serenity is what you can expect",
    text: "These charming row houses offer absolute privacy and are ideally located in a quiet neighbourhood on Kanakapura Main Road, a prime investment hub in south Bangalore. The locality seamlessly connects to all major routes and is close to the 'Art of Living' foundation which is a major landmark. The project is in a designated green zone, offering fresh air and tranquillity, you can spend a lifetime of serene moments here.",
    rera: "PRM/KA/RERA/1251/310/PR/240724/006948"
  },
  leisure: {
    title: "Designed for your",
    subtitle: "ULTIMATE LEISURE & INFINITE COMFORT",
    text: "Sattva Springs is a well-crafted project that defines fine living. Discover the epitome of luxury and comfort in this architectural marvel. The wide, spacious layouts, sweeping glass expanses, and an abundance of natural light ensure a life of unparalleled grandeur.",
    image: "https://placehold.co/1000x800/E6E9EE/9AA0A6.png?text=Leisure"
  },
  highlights: [
    "LUXURIOUS 4 BHK VILLAS AND ROW HOUSES.",
    "SPREAD OVER 22 ACRES OF LUSH GREENERY.",
    "STATE OF THE ART 30,000 SQ.FT. CLUBHOUSE.",
    "STRATEGIC LOCATION WITH EXCELLENT CONNECTIVITY."
  ],
  amenities: [
    "Swimming Pool", "Clubhouse", "Gymnasium", "Landscaped Gardens", "Children's Play Area", "Tennis Court", "Jogging Track", "24/7 Security"
  ],
  amenitiesImage: "https://placehold.co/1000x800/E6E9EE/9AA0A6.png?text=Amenities",
  masterPlanImage: "https://placehold.co/2000x1500/E6E9EE/9AA0A6.png?text=Master+Plan",
  floorPlans: [
    { title: "Villa Type A", image: "https://placehold.co/600x400/E6E9EE/9AA0A6.png?text=Floor+Plan+1" },
    { title: "Row House Type B", image: "https://placehold.co/600x400/E6E9EE/9AA0A6.png?text=Floor+Plan+2" }
  ]
};

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  // In a real app, fetch project by slug. Using mock data for the template.
  const project = projectData;

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white font-sans text-zinc-800 selection:bg-[#c3a06a]/30">
      <ProjectStickyNav />
      
      <section id="overview">
        <ProjectHero project={project} />
        <ProjectOverview overview={project.overview} />
        <ProjectActionButtons info={project.actionInfo} />
        <ProjectLeisure leisure={project.leisure} />
      </section>

      <section id="highlights">
        <ProjectHighlights highlights={project.highlights} />
      </section>

      <section id="amenities">
        <ProjectAmenities amenities={project.amenities} image={project.amenitiesImage} />
      </section>

      <section id="plans">
        <ProjectMasterPlan image={project.masterPlanImage} />
        <ProjectFloorPlans floorPlans={project.floorPlans} />
      </section>
    </main>
  );
}
