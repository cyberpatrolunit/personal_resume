import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ContactCTA } from "@/components/home-redesign/ContactCTA";
import { flagshipProjects, getProjectBySlug } from "@/data/projects";
import styles from "./work-page.module.scss";

type WorkPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return flagshipProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: WorkPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Bryant Place`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Bryant Place`,
      description: project.summary,
      images: [{ url: project.heroImage.src }],
    },
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const currentIndex = flagshipProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = flagshipProjects[(currentIndex + 1) % flagshipProjects.length];

  return (
    <main className={styles.page} id="main-content" data-halftone="case-study">
      <section className={styles.hero}>
        <div className="section-shell">
          <Link className={styles.backLink} href="/#work">
            Back to selected work
          </Link>
          <p className="section-kicker">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          {project.formalTitle ? <p className={styles.formalTitle}>{project.formalTitle}</p> : null}
          <p className={styles.summary}>{project.summary}</p>
          {project.projectLink ? (
            <a className={styles.projectLink} href={project.projectLink} target="_blank" rel="noreferrer">
              View public project
            </a>
          ) : null}
        </div>
        <div className={styles.heroImage}>
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            width={1600}
            height={980}
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className={styles.facts}>
        <div className="section-shell">
          <dl>
            <div>
              <dt>Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>{project.context}</dd>
            </div>
            <div>
              <dt>Disciplines</dt>
              <dd>{project.disciplines.join(", ")}</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>{project.tools.join(", ")}</dd>
            </div>
            {project.timeline ? (
              <div>
                <dt>Timeline</dt>
                <dd>{project.timeline}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </section>

      <section className={styles.caseStudy}>
        <div className="section-shell">
          {project.caseStudy.map((section) => (
            <article key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      {project.artists?.length || project.partners?.length ? (
        <section className={styles.credits} aria-labelledby="project-credits-heading">
          <div className="section-shell">
            <p className="section-kicker">Project Credits</p>
            <h2 id="project-credits-heading">Artists &amp; Partners</h2>
            <div className={styles.creditGrid}>
              {project.artists?.length ? (
                <div>
                  <h3>Featured Artists</h3>
                  <ul>
                    {project.artists.map((artist) => (
                      <li key={`${artist.name}-${artist.work}`}>
                        <span>{artist.name}</span>
                        <cite>{artist.work}</cite>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {project.partners?.length ? (
                <div>
                  <h3>Project Partners</h3>
                  <ul>
                    {project.partners.map((partner) => (
                      <li key={partner}>{partner}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {project.images.length > 1 ? (
        <section className={styles.gallery} aria-label={`${project.title} selected images`}>
          <div className="section-shell">
            {project.images.slice(1).map((image) => (
              <Image
                key={image.src}
                className={image.layout ? styles[image.layout] : undefined}
                src={image.src}
                alt={image.alt}
                width={image.layout === "portrait" ? 900 : 1600}
                height={image.layout === "portrait" ? 1200 : 1000}
                sizes={image.layout === "wide" ? "(max-width: 800px) 100vw, 1400px" : "(max-width: 800px) 100vw, 50vw"}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className={styles.next}>
        <div className="section-shell">
          <p className="section-kicker">Next Case Study</p>
          <Link href={`/work/${nextProject.slug}`}>{nextProject.title}</Link>
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
