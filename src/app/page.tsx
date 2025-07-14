import { Header } from "@/components/header";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { JourneySection } from "@/components/sections/journey";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <HeroSection />
      <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
