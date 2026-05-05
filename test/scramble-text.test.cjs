const test = require("node:test");
const assert = require("node:assert/strict");
const {
  createPartialScrambleFrame,
  createScrambleFrame,
  createTypeOnScrambleFrame,
  createWaveScrambleIndexes,
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

test("partial scramble mutates only selected non-space characters", () => {
  const frame = createPartialScrambleFrame("Bryant Place", [1, 7], () => 0);

  assert.equal(frame, "BAyant Alace");
});

test("partial scramble can use a numeric-only character set", () => {
  const frame = createPartialScrambleFrame("Bryant Place", [1, 7], () => 0.92, "0123456789");

  assert.equal(frame, "B9yant 9lace");
});

test("wave scramble indexes move across non-space characters", () => {
  assert.deepEqual(createWaveScrambleIndexes("Bryant Place", 0, 2), [0, 1]);
  assert.deepEqual(createWaveScrambleIndexes("Bryant Place", 6, 2), [7, 8]);
  assert.deepEqual(createWaveScrambleIndexes("Bryant Place", 10, 2), [11]);
});
