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

test("Wow hero mobile title is constrained for long words", () => {
  const css = read("components/home-redesign/WowHero.module.scss");

  assert.match(
    css,
    /@media \(max-width: 760px\)\s*\{[^}]*\.title\s*\{[^}]*max-width:\s*100%;[^}]*font-size:\s*clamp\(1\.65rem,\s*7\.25vw,\s*3\.1rem\);/s
  );
  assert.doesNotMatch(css, /@media \(max-width: 760px\)\s*\{[^}]*\.title\s*\{[^}]*11vw/s);
});

test("case study page headings use the body font", () => {
  const css = read("app/work/[slug]/work-page.module.scss");

  assert.match(css, /\.hero h1\s*\{[^}]*font-family:\s*var\(--font-body\);/s);
  assert.match(css, /\.caseStudy h2\s*\{[^}]*font-family:\s*var\(--font-body\);/s);
  assert.match(css, /\.next a\s*\{[^}]*font-family:\s*var\(--font-body\);/s);
});

test("Wow line scrambles wait for deeper viewport entry", () => {
  const component = read("components/home-redesign/WowHero.tsx");

  assert.match(component, /viewportAmount=\{0\.72\}/);
  assert.match(component, /viewportMargin="0px 0px -38% 0px"/);
  assert.match(component, /delay=\{index \* 220\}/);
  assert.match(component, /delay=\{120 \+ index \* 220\}/);
});
