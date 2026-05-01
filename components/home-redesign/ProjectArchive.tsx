import Image from "next/image";
import Link from "next/link";
import { archiveProjects } from "@/data/projects";
import styles from "./ProjectArchive.module.scss";

export function ProjectArchive() {
  return (
    <section className={styles.section} id="archive">
      <div className="section-shell">
        <p className="section-kicker">Archive</p>
        <h2 className={styles.title}>Additional proof across live shows, projection, data, and immersive systems.</h2>
        <div className={styles.list}>
          {archiveProjects.map((project) => (
            <article className={styles.item} key={project.slug}>
              <Image src={project.heroImage.src} alt={project.heroImage.alt} width={280} height={180} sizes="140px" />
              <div>
                <p>{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <span>{project.role}</span>
              </div>
              {project.projectLink ? (
                <Link href={project.projectLink} target="_blank" rel="noreferrer">
                  External link
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
