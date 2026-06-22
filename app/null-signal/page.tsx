import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  aiImage,
  aiModes,
  audioCredit,
  features,
  heroImage,
  heroStats,
  modeCredits,
  nullSignalDownloads,
  nullSignalMeta,
  outputImage,
} from "@/data/null-signal";
import { geo, geostar, quantico, silkscreen } from "./fonts";
import { GridField } from "./GridField";
import styles from "./null-signal.module.scss";

export const metadata: Metadata = {
  title: nullSignalMeta.title,
  description: nullSignalMeta.description,
  // og:image / twitter:image come from opengraph-image.tsx (file convention)
  openGraph: {
    title: nullSignalMeta.title,
    description: nullSignalMeta.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: nullSignalMeta.title,
    description: nullSignalMeta.description,
  },
};

// black browser chrome on iOS/Android for this route
export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function NullSignalPage() {
  return (
    <div
      className={`${styles.page} ${geo.variable} ${geostar.variable} ${quantico.variable} ${silkscreen.variable}`}
    >
      {/* paint the document backdrop black while this route is mounted —
          otherwise mobile overscroll exposes the main site's light bg */}
      <style>{`html, body { background: #000; }`}</style>
      <GridField />
      <header className={styles.topbar}>
        <Link href="/" className={styles.topbarBack}>
          ← BRYANTPLACE.COM
        </Link>
        <span className={styles.topbarSys} aria-hidden="true">
          SYS // NULL_SIGNAL
        </span>
        <a
          href={nullSignalMeta.repoUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.topbarRepo}
        >
          GITHUB ↗
        </a>
      </header>

      <main id="main-content" className={styles.shell}>
        {/* ── HERO ─────────────────────────────────── */}
        <section className={styles.hero}>
          <p className={styles.kicker}>
            <span className={styles.led} aria-hidden="true" />
            GENERATIVE VJ INSTRUMENT — FREE &amp; OPEN SOURCE
          </p>
          <h1 className={styles.wordmark}>
            null_signal<span className={styles.cursor} aria-hidden="true" />
          </h1>
          <p className={styles.tagline}>
            A live visual instrument for electronic music. Sixty-nine generative
            modes, four compositing layers, and a master FX chain — all reacting
            to the room in real time. Open source, as a gift to the live visuals
            community.
          </p>
          <div className={styles.heroActions}>
            <a
              href={nullSignalMeta.repoUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.btnPrimary}
            >
              SOURCE CODE ↗
            </a>
            <a href="#instrument" className={styles.btnGhost}>
              SIGNAL CHAIN ↓
            </a>
          </div>

          <ul className={styles.stats}>
            {heroStats.map((s) => (
              <li key={s.label}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </li>
            ))}
          </ul>

          <figure className={styles.heroFrame}>
            <figcaption className={styles.frameBar}>
              <span>CONTROL SURFACE</span>
              <span className={styles.frameLive}>
                <span className={styles.led} aria-hidden="true" />
                LIVE
              </span>
            </figcaption>
            <Image
              src={heroImage.src}
              width={heroImage.width}
              height={heroImage.height}
              alt={heroImage.alt}
              priority
              sizes="(max-width: 760px) 100vw, 1180px"
              className={styles.shot}
            />
          </figure>
        </section>

        {/* ── FEATURES ─────────────────────────────── */}
        <section id="instrument" className={styles.section}>
          <h2 className={styles.sectionHead}>
            <span className={styles.sectionNum}>01</span> THE INSTRUMENT
          </h2>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <article
                key={f.num}
                className={`${styles.panel} ${f.wide ? styles.panelWide : ""}`}
              >
                <div className={styles.panelHead}>
                  <span className={styles.panelNum}>{f.num}</span>
                  <h3 className={styles.panelName}>{f.name}</h3>
                </div>
                <p className={styles.panelCopy}>{f.copy}</p>
                <div className={styles.panelShot}>
                  <Image
                    src={f.image.src}
                    width={f.image.width}
                    height={f.image.height}
                    alt={f.image.alt}
                    sizes="(max-width: 760px) 100vw, 590px"
                    className={styles.shot}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── AI ───────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionHead}>
            <span className={styles.sectionNum}>02</span> AI CO-PILOT
          </h2>
          <div className={styles.aiSplit}>
            <div className={styles.aiText}>
              {aiModes.map((m) => (
                <div key={m.name} className={styles.aiMode}>
                  <h3 className={styles.aiName}>{m.name}</h3>
                  <p className={styles.panelCopy}>{m.copy}</p>
                </div>
              ))}
              <p className={styles.aiNote}>
                RUNS AGAINST ANY OPENAI-COMPATIBLE LOCAL ENDPOINT.
                <br />
                NO CLOUD. NO KEYS. NO LATENCY TAX.
              </p>
            </div>
            <figure className={`${styles.heroFrame} ${styles.aiFrame}`}>
              <figcaption className={styles.frameBar}>
                <span>LOCAL LLM CONFIG</span>
                <span>:8080</span>
              </figcaption>
              <Image
                src={aiImage.src}
                width={aiImage.width}
                height={aiImage.height}
                alt={aiImage.alt}
                sizes="(max-width: 760px) 100vw, 460px"
                className={styles.shot}
              />
            </figure>
          </div>
        </section>

        {/* ── OUTPUT ───────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionHead}>
            <span className={styles.sectionNum}>03</span> OUTPUT
          </h2>
          <figure className={styles.heroFrame}>
            <figcaption className={styles.frameBar}>
              <span>OUTPUT WINDOW</span>
              <span className={styles.frameRec}>
                <span className={`${styles.led} ${styles.ledRec}`} aria-hidden="true" />
                REC
              </span>
            </figcaption>
            <Image
              src={outputImage.src}
              width={outputImage.width}
              height={outputImage.height}
              alt={outputImage.alt}
              sizes="(max-width: 760px) 100vw, 1180px"
              className={styles.shot}
            />
          </figure>
          <p className={styles.outputCopy}>
            Dual-window by design. The control surface stays on your laptop; the
            output window renders clean and fullscreen — straight to the
            projector or LED wall. Tap tempo locks the strobe to the kick.
          </p>
        </section>

        {/* ── CREDITS ──────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionHead}>
            <span className={styles.sectionNum}>04</span> CREDITS
          </h2>
          <p className={styles.panelCopy}>
            Adapted with respect from the creative coding community.
          </p>
          <ul className={styles.creditList}>
            {modeCredits.map((c) => (
              <li key={c.mode}>
                <span className={styles.creditMode}>{c.mode}</span>
                <span className={styles.creditDots} aria-hidden="true" />
                <span className={styles.creditSource}>{c.source}</span>
              </li>
            ))}
            <li>
              <span className={styles.creditMode}>DEMO AUDIO</span>
              <span className={styles.creditDots} aria-hidden="true" />
              <span className={styles.creditSource}>
                <a href={audioCredit.href} target="_blank" rel="noreferrer">
                  “{audioCredit.title}” — {audioCredit.author} ({audioCredit.license})
                </a>
              </span>
            </li>
          </ul>
        </section>

        {/* ── CTA ──────────────────────────────────── */}
        <section className={styles.cta}>
          <p className={styles.ctaKicker}>05 // GET IT</p>
          <h2 className={styles.ctaHead}>
            FREE. OPEN SOURCE.
            <br />
            YOURS TO PLAY.
          </h2>
          <a
            href={nullSignalMeta.repoUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.btnPrimary}
          >
            GITHUB.COM/CYBERPATROLUNIT/NULL-SIGNAL ↗
          </a>
          <div className={styles.downloads}>
            <span className={styles.downloadsVersion}>
              v{nullSignalDownloads.version}
            </span>
            <div className={styles.downloadGrid}>
              {nullSignalDownloads.platforms.map((p) => (
                <div
                  key={p.os}
                  className={
                    p.available
                      ? styles.downloadCard
                      : `${styles.downloadCard} ${styles.downloadCardSoon}`
                  }
                >
                  <span className={styles.downloadOs}>{p.os}</span>
                  <span className={styles.downloadFormat}>{p.format}</span>
                  {p.available && p.href ? (
                    <a href={p.href} className={styles.btnPrimary}>
                      DOWNLOAD {p.ext} ↓
                    </a>
                  ) : (
                    <span className={styles.btnDisabled}>COMING SOON</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>VJ CYBERPATROLUNIT</span>
        <Link href="/" className={styles.footerLink}>
          BUILT BY BRYANT PLACE ←
        </Link>
      </footer>
    </div>
  );
}
