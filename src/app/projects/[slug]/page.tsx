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
  title: "LOREM IPSUM",
  subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  status: "NEW LAUNCHES",
  heroImage: "https://placehold.co/1920x1080/E6E9EE/9AA0A6.png?text=Project+Hero",
  overview: {
    acreage: "22",
    units: "66",
    typology: "4 BHK",
    title: "LOREM IPSUM",
    name: "LOREM IPSUM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    images: [
      "https://placehold.co/1000x800/E6E9EE/9AA0A6.png?text=Interior+1",
      "https://placehold.co/1000x800/E6E9EE/9AA0A6.png?text=Interior+2",
      "https://placehold.co/1000x800/E6E9EE/9AA0A6.png?text=Interior+3"
    ]
  },
  actionInfo: {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rera: "PRM/KA/RERA/1251/310/PR/240724/006948"
  },
  leisure: {
    title: "Designed for your",
    subtitle: "LOREM IPSUM DOLOR SIT AMET",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://placehold.co/1000x800/E6E9EE/9AA0A6.png?text=Leisure"
  },
  highlights: [
    "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING.",
    "SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE.",
    "UT ENIM AD MINIM VENIAM QUIS NOSTRUD EXERCITATION.",
    "ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSECUAT."
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
