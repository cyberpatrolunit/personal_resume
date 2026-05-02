const test = require("node:test");
const assert = require("node:assert/strict");
const { createScrambleFrame } = require("../components/effects/scrambleFrame.js");

test("locks the final text when progress is complete", () => {
  assert.equal(createScrambleFrame("Bryant Place", 1, () => 0), "Bryant Place");
});

test("preserves whitespace while scrambling unrevealed characters", () => {
  const frame = createScrambleFrame("AB CD", 0, () => 0);

  assert.equal(frame.length, 5);
  assert.equal(frame[2], " ");
  assert.notEqual(frame, "AB CD");
});
