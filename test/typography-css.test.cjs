const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

test("global headings and section titles use the body font", () => {
  const css = read("styles/app-globals.scss");

  assert.match(
    css,
    /h1,\s*\nh2,\s*\nh3\s*\{[^}]*font-family:\s*var\(--font-body\);/s
  );
  assert.match(
    css,
    /\.section-title\s*\{[^}]*font-family:\s*var\(--font-body\);/s
  );
});

test("site header mark uses the compact body font on mobile", () => {
  const css = read("components/site/SiteHeader.module.scss");

  assert.match(css, /\.logo\s*\{[^}]*font-family:\s*var\(--font-body\);/s);
  assert.doesNotMatch(css, /\.logo\s*\{[^}]*-webkit-text-stroke:/s);
});

test("Wow hero keeps the wide Slussen display treatment", () => {
  const css = read("components/home-redesign/WowHero.module.scss");

  assert.match(css, /\.title\s*\{[^}]*font-family:\s*var\(--font-wide\);/s);
  assert.match(css, /\.line\s*\{[^}]*font-family:\s*var\(--font-wide\);/s);
});

test("Wow hero uses compact vertical spacing", () => {
  const css = read("components/home-redesign/WowHero.module.scss");

  assert.match(css, /\.hero\s*\{[^}]*padding:\s*clamp\(48px,\s*6\.5vw,\s*92px\) 0 clamp\(28px,\s*4\.8vw,\s*64px\);/s);
  assert.match(css, /\.title\s*\{[^}]*margin:\s*0 0 clamp\(24px,\s*4vw,\s*46px\);/s);
  assert.match(css, /\.line\s*\{[^}]*min-height:\s*clamp\(58px,\s*7vw,\s*84px\);/s);
  assert.match(css, /\.primary,\s*\n\.secondary\s*\{[^}]*padding:\s*12px 0;/s);
});

test("Wow hero background has tuned local gradients and dots", () => {
  const css = read("components/home-redesign/WowHero.module.scss");

  assert.match(css, /\.hero::before\s*\{[^}]*radial-gradient/s);
  assert.match(css, /\.hero::after\s*\{[^}]*background-image:\s*radial-gradient/s);
  assert.doesNotMatch(css, /\.lines::before/);
  assert.doesNotMatch(css, /\.lines\s*\{[^}]*rgba\(53,\s*86,\s*78,\s*0\.22\)/s);
  assert.doesNotMatch(css, /\.title::before/);
  assert.doesNotMatch(css, /\.title::after/);
  assert.doesNotMatch(css, /\.title\s*\{[^}]*background:/s);
});

test("Wow hero mobile title is constrained for long words", () => {
  const css = read("components/home-redesign/WowHero.module.scss");

  assert.match(
    css,
    /@media \(max-width: 760px\)\s*\{[^}]*\.title\s*\{[^}]*max-width:\s*100%;[^}]*font-size:\s*clamp\(1\.65rem,\s*7\.25vw,\s*3\.1rem\);/s
  );
  assert.doesNotMatch(css, /@media \(max-width: 760px\)\s*\{[^}]*\.title\s*\{[^}]*11vw/s);
});

test("case study page headings use the body font", () => {
  const css = read("app/(main)/work/[slug]/work-page.module.scss");

  assert.match(css, /\.hero h1\s*\{[^}]*font-family:\s*var\(--font-body\);/s);
  assert.match(css, /\.caseStudy h2\s*\{[^}]*font-family:\s*var\(--font-body\);/s);
  assert.match(css, /\.next a\s*\{[^}]*font-family:\s*var\(--font-body\);/s);
});

test("case study pages use compact spacing only at the mobile breakpoint", () => {
  const css = read("app/(main)/work/[slug]/work-page.module.scss");
  const mobile = css.match(/@media \(max-width: 640px\)\s*\{([\s\S]*)\}\s*$/)?.[1] ?? "";

  assert.match(mobile, /\.hero\s*\{[^}]*padding-top:\s*40px;/s);
  assert.match(mobile, /\.facts\s*\{[^}]*padding:\s*28px 0;/s);
  assert.match(mobile, /\.facts div\s*\{[^}]*min-height:\s*0;/s);
  assert.match(mobile, /\.caseStudy\s*\{[^}]*padding:\s*32px 0;/s);
  assert.match(mobile, /\.credits\s*\{[^}]*padding:\s*36px 0;/s);
  assert.match(mobile, /\.gallery\s*\{[^}]*padding:\s*32px 0;/s);
  assert.match(mobile, /\.next\s*\{[^}]*padding:\s*36px 0;/s);
});

test("Wow line scrambles wait for deeper viewport entry", () => {
  const component = read("components/home-redesign/WowHero.tsx");

  assert.match(component, /reserveSpace/);
  assert.match(component, /viewportAmount=\{0\.72\}/);
  assert.match(component, /viewportMargin="0px 0px -38% 0px"/);
  assert.match(component, /delay=\{index \* 220\}/);
  assert.match(component, /delay=\{120 \+ index \* 220\}/);
});

test("type-on scramble can reserve final layout space", () => {
  const component = read("components/effects/ScrambleText.tsx");

  assert.match(component, /reserveSpace\?:\s*boolean/);
  assert.match(component, /visibility:\s*"hidden"/);
  assert.match(component, /position:\s*"absolute"/);
});

test("archive heading scale matches major section title scale", () => {
  const css = read("components/home-redesign/ProjectArchive.module.scss");

  assert.match(css, /\.title\s*\{[^}]*font-size:\s*clamp\(2\.2rem,\s*5\.8vw,\s*5rem\);/s);
  assert.match(css, /\.title\s*\{[^}]*line-height:\s*1;/s);
});

test("section headers use reversible per-word scroll reveal", () => {
  const reveal = read("components/effects/ScrollWordReveal.tsx");
  const selectedWork = read("components/home-redesign/SelectedWork.tsx");
  const archive = read("components/home-redesign/ProjectArchive.tsx");
  const capabilities = read("components/home-redesign/Capabilities.tsx");

  assert.match(reveal, /data-word/);
  assert.match(reveal, /scrub:\s*true/);
  assert.match(reveal, /stagger:\s*0\.08/);
  assert.match(reveal, /start:\s*"top 84%"/);
  assert.match(reveal, /end:\s*"top 54%"/);
  assert.match(selectedWork, /text="Selected Work"/);
  assert.match(selectedWork, /text="Built for real spaces, real audiences, and real deadlines\."/);
  assert.match(archive, /text="Archive"/);
  assert.match(archive, /text="Additional proof across live shows, projection, data, and immersive systems\."/);
  assert.match(capabilities, /text="Capabilities"/);
  assert.match(capabilities, /text="Leadership across concept, systems, deployment and teams\."/);
});
