import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="section-shell" style={{ paddingBlock: "120px" }}>
        <p className="section-kicker">404</p>
        <h1 className="section-title">Page not found.</h1>
        <p className="section-copy">The page you requested does not exist.</p>
        <Link href="/">Return home</Link>
      </section>
    </main>
  );
}
