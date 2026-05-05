import Image from "next/image";
import Link from "next/link";
import { ScrollWordReveal } from "@/components/effects/ScrollWordReveal";
import { flagshipProjects } from "@/data/projects";
import styles from "./SelectedWork.module.scss";

export function SelectedWork() {
  return (
    <section className={styles.section} id="work" data-halftone="work">
      <div className="section-shell">
        <div className={styles.header}>
          <ScrollWordReveal as="p" className="section-kicker" text="Selected Work" />
          <ScrollWordReveal
            as="h2"
            className="section-title"
            text="Built for real spaces, real audiences, and real deadlines."
          />
        </div>
        <div className={styles.grid}>
          {flagshipProjects.map((project, index) => (
            <article className={styles.card} key={project.slug}>
              <Link href={`/work/${project.slug}`} className={styles.imageLink}>
                <Image
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  width={1200}
                  height={780}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority={index === 0}
                />
              </Link>
              <div className={styles.copy}>
                <p className={styles.eyebrow}>{project.eyebrow}</p>
                <h3>
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.summary}</p>
                <Link className={styles.cta} href={`/work/${project.slug}`}>
                  View case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
