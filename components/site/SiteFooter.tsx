import Link from "next/link";
import { siteMeta } from "@/data/site";
import styles from "./SiteFooter.module.scss";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.kicker}>Bryant Place</p>
        <p className={styles.copy}>
          Creative technology leadership for permanent installations, interactive environments, and real-time systems.
        </p>
      </div>
      <div className={styles.links}>
        <Link href={siteMeta.bookingUrl}>Book a Project Call</Link>
        <Link href={`mailto:${siteMeta.email}`}>Email Bryant</Link>
      </div>
    </footer>
  );
}
