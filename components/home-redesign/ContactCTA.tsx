import Link from "next/link";
import type { ReactNode } from "react";
import { siteMeta } from "@/data/site";
import styles from "./ContactCTA.module.scss";

interface ContactCTAProps {
  background?: ReactNode;
}

export function ContactCTA({ background }: ContactCTAProps) {
  return (
    <section className={styles.section} id="contact">
      {background}
      <div className="section-shell">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Planning a permanent installation or real-time experiential system?</h2>
        <p className="section-copy">
          Available for select project leadership, creative technology, technical direction, and deployment engagements.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href={siteMeta.bookingUrl}>
            Book a Project Call
          </Link>
          <Link className={styles.secondary} href={`mailto:${siteMeta.email}`}>
            Email Bryant
          </Link>
        </div>
      </div>
    </section>
  );
}
