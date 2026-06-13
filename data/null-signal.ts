export type NsImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const img = (file: string, width: number, height: number, alt: string): NsImage => ({
  src: `/project-imgs/null-signal/${file}`,
  width,
  height,
  alt,
});

export const nullSignalMeta = {
  name: "null_signal",
  title: "null_signal — Generative VJ Instrument",
  description:
    "A free & open source generative VJ instrument for electronic music. 69 visual modes, 4-layer compositing, real-time audio reactivity, MIDI control, and local AI — built by VJ CYBERPATROLUNIT.",
  repoUrl: "https://github.com/cyberpatrolunit/null-signal",
  ogImage: "/project-imgs/null-signal/og-null-signal.png",
} as const;

export const heroImage = img(
  "hero-full-ui.png",
  1920,
  1202,
  "null_signal control surface: generative mode faders, four-layer mixer, preset banks and master FX on a black and cyan interface"
);

export const outputImage = img(
  "output-fullscreen.png",
  1809,
  1014,
  "null_signal fullscreen output window with title card, REC overlay, BPM readout and audio meters"
);

export const aiImage = img(
  "ai-llm-settings.png",
  1184,
  1548,
  "Local LLM settings panel with fast, heavy and audio model tiers, endpoints and prompt configuration"
);

export const heroStats = [
  { value: "69", label: "MODES" },
  { value: "4", label: "LAYERS" },
  { value: "13", label: "BLENDS" },
  { value: "64", label: "PRESETS" },
  { value: "13", label: "FX" },
] as const;

export type NsFeature = {
  num: string;
  name: string;
  copy: string;
  image: NsImage;
  wide?: boolean;
};

export const features: NsFeature[] = [
  {
    num: "01",
    name: "GENERATIVE MODES",
    copy: "69 modes on channel-strip faders — geometry, particles, shaders, typography, AI text. Every mode is a voice; the fader is its volume.",
    image: img(
      "modes-fader-bank.png",
      1920,
      805,
      "Generative mode fader bank with Oracle, S-Bloom and TickTock channel strips"
    ),
    wide: true,
  },
  {
    num: "02",
    name: "LAYER COMPOSITOR",
    copy: "Four layers stacked in real time through 13 blend modes — ADD, SCREEN, MULTIPLY, DIFFERENCE and friends.",
    image: img(
      "blend-modes.png",
      1230,
      1000,
      "Blend mode picker grid showing Add, Screen, Multiply and Overlay with descriptions"
    ),
  },
  {
    num: "03",
    name: "AUDIO ENGINE",
    copy: "FFT analysis, kick detection and tap tempo. Feed it a mic, system audio, or drag a track straight onto the window.",
    image: img(
      "audio-input.png",
      680,
      562,
      "Audio input panel with microphone source, device selection and level meters"
    ),
  },
  {
    num: "04",
    name: "MIDI CONTROL",
    copy: "Hardware-first. CC learn on every fader and button, with mappings that persist between sessions.",
    image: img(
      "midi-panel.png",
      682,
      672,
      "MIDI controller panel with port scan, learn mode and mapping save controls"
    ),
  },
  {
    num: "05",
    name: "PRESETS + SCENES",
    copy: "64 preset slots across four banks, plus an 8-step scene sequencer that advances on the beat.",
    image: img(
      "presets.png",
      1096,
      776,
      "Preset memory bank with four banks of scene slots and an active scene readout"
    ),
  },
  {
    num: "06",
    name: "MASTER FX",
    copy: "A 13-stage post chain — feedback, dither, scan, strobe, chroma — applied to the final composite.",
    image: img(
      "master-fx.png",
      1488,
      728,
      "Master FX fader bank with Strobe, Burn, Mirror and Chroma effects and MIDI CC labels"
    ),
    wide: true,
  },
];

export const aiModes = [
  {
    name: "ORACLE",
    copy: "A fast local LLM whispers text straight into the visuals — prompted by you, paced by the BPM.",
  },
  {
    name: "INTERPRETER",
    copy: "A co-VJ that watches the set and suggests the next move.",
  },
  {
    name: "LISTEN",
    copy: "Live audio captioning turns what the room hears into what the room reads.",
  },
] as const;

// From the repo's CREDITS.txt — mode adaptations.
export const modeCredits = [
  { mode: "ORBIT", source: "noel" },
  { mode: "RIPPLES", source: "noel" },
  { mode: "GASKET", source: "noel" },
  { mode: "SATURN", source: "tomxor" },
  { mode: "S-BLOBS", source: "rch_u" },
  { mode: "WAVY DATA", source: "rch_u" },
  { mode: "TICKTOCK", source: "rch_u" },
  { mode: "JITTER", source: "fuzzle" },
  { mode: "SOMETHING", source: "fuzzle" },
  { mode: "SNEK", source: "Corey Jackson" },
  { mode: "PILLARS", source: "Richard Bourne" },
  { mode: "TUNNEL", source: "fifthelephant" },
  { mode: "PLEXUS", source: "Joshua Kingsbury" },
] as const;

export const audioCredit = {
  title: "groovy techno loop",
  author: "djfroyd",
  license: "CC-BY 3.0",
  href: "https://freesound.org/people/djfroyd/sounds/336472/",
} as const;
