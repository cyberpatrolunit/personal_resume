const test = require("node:test");
const assert = require("node:assert/strict");
const {
  createHalftoneDot,
  rotateHue,
  sampleLinearGradient,
} = require("../components/effects/halftoneMath.js");

test("samples a linear gradient between two colors", () => {
  assert.deepEqual(sampleLinearGradient(["#000000", "#ffffff"], 0), [0, 0, 0]);
  assert.deepEqual(sampleLinearGradient(["#000000", "#ffffff"], 1), [255, 255, 255]);
  assert.deepEqual(sampleLinearGradient(["#000000", "#ffffff"], 0.5), [128, 128, 128]);
});

test("uses the reversed field for background color", () => {
  const dot = createHalftoneDot({
    colors: ["#000000", "#ffffff"],
    maxRadius: 8,
    minRadius: 2,
    position: 0.25,
  });

  assert.deepEqual(dot.fill, [64, 64, 64]);
  assert.deepEqual(dot.background, [191, 191, 191]);
});

test("can offset a color by 180 degrees around the hue wheel", () => {
  assert.deepEqual(rotateHue([255, 0, 0], 180), [0, 255, 255]);
});

test("maps darker gradient samples to larger dots", () => {
  const darkDot = createHalftoneDot({
    colors: ["#000000", "#ffffff"],
    maxRadius: 8,
    minRadius: 2,
    position: 0,
  });
  const lightDot = createHalftoneDot({
    colors: ["#000000", "#ffffff"],
    maxRadius: 8,
    minRadius: 2,
    position: 1,
  });

  assert.equal(darkDot.radius, 8);
  assert.equal(lightDot.radius, 2);
});

test("can use gradient field position for an explicit dot size ramp", () => {
  const smallDot = createHalftoneDot({
    colors: ["#f7f4ff", "#d9ebe5"],
    maxRadius: 8,
    minRadius: 1,
    position: 0,
    radiusPosition: 0,
  });
  const largeDot = createHalftoneDot({
    colors: ["#f7f4ff", "#d9ebe5"],
    maxRadius: 8,
    minRadius: 1,
    position: 1,
    radiusPosition: 1,
  });

  assert.equal(smallDot.radius, 1);
  assert.equal(largeDot.radius, 8);
});
