const test = require("node:test");
const assert = require("node:assert/strict");
const {
  createScrambleFrame,
  createTypeOnScrambleFrame,
} = require("../components/effects/scrambleFrame.js");

test("locks the final text when progress is complete", () => {
  assert.equal(createScrambleFrame("Bryant Place", 1, () => 0), "Bryant Place");
});

test("preserves whitespace while scrambling unrevealed characters", () => {
  const frame = createScrambleFrame("AB CD", 0, () => 0);

  assert.equal(frame.length, 5);
  assert.equal(frame[2], " ");
  assert.notEqual(frame, "AB CD");
});

test("type-on scramble starts empty", () => {
  assert.equal(createTypeOnScrambleFrame("Bryant Place", 0, () => 0), "");
});

test("type-on scramble only shows the typed slice and preserves spaces", () => {
  const frame = createTypeOnScrambleFrame("AB CD", 0.45, () => 0);

  assert.equal(frame.length, 3);
  assert.equal(frame[2], " ");
  assert.doesNotMatch(frame, /C|D/);
});

test("type-on scramble keeps a moving trailing scramble window", () => {
  const frame = createTypeOnScrambleFrame("WXYZ", 0.75, () => 0);

  assert.equal(frame, "WAA");
});
