import { HalftoneField } from "@/components/effects/HalftoneField";
import { capabilities } from "@/data/capabilities";
import styles from "./Capabilities.module.scss";

const capabilitiesHalftoneColors = ["#edf7eb", "#eaf7f4", "#d9ebe5", "#f4fbf8"];

export function Capabilities() {
  return (
    <section className={styles.section} id="capabilities">
      <HalftoneField
        className={styles.halftoneField}
        colors={capabilitiesHalftoneColors}
        spacing={18}
        minRadius={0.5}
        maxRadius={7}
        angle={-8}
        toneAngle={25}
      />
      <div className="section-shell">
        <p className="section-kicker">Capabilities</p>
        <h2 className="section-title">Leadership across concept, systems, deployment and teams.</h2>
        <div className={styles.grid}>
          {capabilities.map((capability) => (
            <article className={styles.card} key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.summary}</p>
              <span>{capability.proof}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
