import { AboutCredibility } from "@/components/home-redesign/AboutCredibility";
import { Capabilities } from "@/components/home-redesign/Capabilities";
import { ContactCTA } from "@/components/home-redesign/ContactCTA";
import contactStyles from "@/components/home-redesign/ContactCTA.module.scss";
import { ProjectArchive } from "@/components/home-redesign/ProjectArchive";
import { SelectedWork } from "@/components/home-redesign/SelectedWork";
import { WowHero } from "@/components/home-redesign/WowHero";
import { HalftoneField } from "@/components/effects/HalftoneField";

const contactHalftoneColors = ["#f1f3fb", "#e9f5f0", "#d9ebe5", "#f7faf7"];

export default function HomePage() {
  return (
    <main id="main-content">
      <WowHero />
      <SelectedWork />
      <ProjectArchive />
      <Capabilities />
      <AboutCredibility />
      <ContactCTA
        background={
          <HalftoneField
            className={contactStyles.halftoneField}
            colors={contactHalftoneColors}
            spacing={17}
            minRadius={0.55}
            maxRadius={7.5}
            angle={0}
            toneAngle={0}
          />
        }
      />
    </main>
  );
}
