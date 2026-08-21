import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { Impact } from "@/components/sections/Impact/Impact";
import { Philosophy } from "@/components/sections/Philosophy/Philosophy";
import { Experience } from "@/components/sections/Experience/Experience";
import { CaseStudies } from "@/components/sections/CaseStudies/CaseStudies";
import { NetworkSection } from "@/components/3d/Canvas";
import { ArchitectureLab } from "@/components/sections/ArchitectureLab/ArchitectureLab";
import { TechStack } from "@/components/sections/TechStack/TechStack";
import { Achievements } from "@/components/sections/Achievements/Achievements";
import { Education } from "@/components/sections/Education/Education";
import { Recruiter } from "@/components/sections/Recruiter/Recruiter";
import { Contact } from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Impact />
        <Philosophy />
        <Experience />
        <CaseStudies />
        <NetworkSection />
        <ArchitectureLab />
        <TechStack />
        <Education />
        <Achievements />
        <Recruiter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
