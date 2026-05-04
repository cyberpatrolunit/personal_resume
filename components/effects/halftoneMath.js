function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const value = Number.parseInt(normalized.length === 3 ? normalized.replace(/(.)/g, "$1$1") : normalized, 16);

  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function sampleLinearGradient(colors, position) {
  const safePosition = clamp(position);
  const stops = colors.map(hexToRgb);
  const scaled = safePosition * (stops.length - 1);
  const startIndex = Math.min(stops.length - 2, Math.floor(scaled));
  const endIndex = startIndex + 1;
  const localProgress = scaled - startIndex;
  const start = stops[startIndex];
  const end = stops[endIndex];

  return start.map((channel, index) => Math.round(channel + (end[index] - channel) * localProgress));
}

function getLuma([red, green, blue]) {
  return (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
}

function rgbToHsl([red, green, blue]) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;

  if (max === min) {
    return [0, 0, lightness];
  }

  const delta = max - min;
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  let hue = 0;

  if (max === r) {
    hue = (g - b) / delta + (g < b ? 6 : 0);
  } else if (max === g) {
    hue = (b - r) / delta + 2;
  } else {
    hue = (r - g) / delta + 4;
  }

  return [hue * 60, saturation, lightness];
}

function hueToRgb(p, q, t) {
  let value = t;

  if (value < 0) value += 1;
  if (value > 1) value -= 1;
  if (value < 1 / 6) return p + (q - p) * 6 * value;
  if (value < 1 / 2) return q;
  if (value < 2 / 3) return p + (q - p) * (2 / 3 - value) * 6;

  return p;
}

function hslToRgb([hue, saturation, lightness]) {
  if (saturation === 0) {
    const gray = Math.round(lightness * 255);
    return [gray, gray, gray];
  }

  const normalizedHue = hue / 360;
  const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
  const p = 2 * lightness - q;

  return [
    Math.round(hueToRgb(p, q, normalizedHue + 1 / 3) * 255),
    Math.round(hueToRgb(p, q, normalizedHue) * 255),
    Math.round(hueToRgb(p, q, normalizedHue - 1 / 3) * 255),
  ];
}

function rotateHue(rgb, degrees) {
  const [hue, saturation, lightness] = rgbToHsl(rgb);
  return hslToRgb([(hue + degrees + 360) % 360, saturation, lightness]);
}

function createHalftoneDot({ colors, maxRadius, minRadius, position, radiusPosition }) {
  const fill = sampleLinearGradient(colors, position);
  const background = rotateHue(sampleLinearGradient(colors, 1 - position), 180);
  const tone = typeof radiusPosition === "number" ? clamp(radiusPosition) : 1 - getLuma(fill);
  const radius = Math.round(minRadius + tone * (maxRadius - minRadius));

  return {
    background,
    fill,
    radius,
  };
}

module.exports = {
  createHalftoneDot,
  rotateHue,
  sampleLinearGradient,
};
