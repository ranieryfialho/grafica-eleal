import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { ClientsSection } from "@/components/ClientsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { CoverageMapSection } from "@/components/CoverageMapSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
       <CoverageMapSection />
      <ClientsSection />
      <WhyChooseUsSection />
    </>
  );
}