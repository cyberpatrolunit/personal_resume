import Image from "next/image";
import { ScrollWordReveal } from "@/components/effects/ScrollWordReveal";
import { archiveProjects } from "@/data/projects";
import styles from "./ProjectArchive.module.scss";

export function ProjectArchive() {
  return (
    <section className={styles.section} id="archive" data-halftone="archive">
      <div className="section-shell">
        <ScrollWordReveal as="p" className="section-kicker" text="Archive" />
        <ScrollWordReveal
          as="h2"
          className={styles.title}
          text="Additional proof across live shows, projection, data, and immersive systems."
        />
        <div className={styles.list}>
          {archiveProjects.map((project) => (
            <article className={styles.item} key={project.slug}>
              <Image src={project.heroImage.src} alt={project.heroImage.alt} width={280} height={180} sizes="140px" />
              <div>
                <p className={styles.eyebrow}>{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className={styles.summary}>{project.summary}</p>
                <span>{project.role}</span>
              </div>
              {project.projectLink ? (
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  Visit {project.title}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
