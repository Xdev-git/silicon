import { HeroSlider } from "@/components/home/HeroSlider";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedProjectSection } from "@/components/home/FeaturedProjectSection";
import { OurPurposeSection } from "@/components/home/OurPurposeSection";
import { VideoMaskSection } from "@/components/home/VideoMaskSection";
import { StatsBar } from "@/components/home/StatsBar";
import { CardsCarousel } from "@/components/home/CardsCarousel";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { NewsCarousel } from "@/components/home/NewsCarousel";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TrustSection />
      <VideoMaskSection />
      <FeaturedProjectSection />
      <StatsBar />
      <CardsCarousel />
      <TestimonialsCarousel />
      <OurPurposeSection />
      <NewsCarousel />
    </>
  );
}
