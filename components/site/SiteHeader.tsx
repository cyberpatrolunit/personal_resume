import Link from "next/link";
import { navItems } from "@/data/site";
import styles from "./SiteHeader.module.scss";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="Bryant Place home">
        Bryant Place
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
