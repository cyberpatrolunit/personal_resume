import { AboutCredibility } from "@/components/home-redesign/AboutCredibility";
import { Capabilities } from "@/components/home-redesign/Capabilities";
import { ContactCTA } from "@/components/home-redesign/ContactCTA";
import { ProjectArchive } from "@/components/home-redesign/ProjectArchive";
import { SelectedWork } from "@/components/home-redesign/SelectedWork";
import { WowHero } from "@/components/home-redesign/WowHero";

export default function HomePage() {
  return (
    <main id="main-content">
      <WowHero />
      <SelectedWork />
      <ProjectArchive />
      <Capabilities />
      <AboutCredibility />
      <ContactCTA />
    </main>
  );
}
