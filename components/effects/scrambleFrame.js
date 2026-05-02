const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function clampProgress(progress) {
  return Math.min(1, Math.max(0, progress));
}

function createScrambleFrame(text, progress, random = Math.random) {
  const safeProgress = clampProgress(progress);
  const revealCount = Math.floor(text.length * safeProgress);

  return Array.from(text)
    .map((character, index) => {
      if (/\s/.test(character) || index < revealCount || safeProgress >= 1) {
        return character;
      }

      return SCRAMBLE_CHARS[Math.floor(random() * SCRAMBLE_CHARS.length)];
    })
    .join("");
}

module.exports = {
  createScrambleFrame,
};
