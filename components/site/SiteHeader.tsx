import Link from "next/link";
import { ScrambleText } from "@/components/effects/ScrambleText";
import { navItems } from "@/data/site";
import styles from "./SiteHeader.module.scss";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <Link className={styles.logo} href="/" aria-label="Bryant Place home">
        <ScrambleText ambient text="Bryant Place" trigger="mount" duration={620} />
      </Link>
      <nav className={styles.nav} aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
