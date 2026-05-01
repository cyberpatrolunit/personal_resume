export type ProjectImage = {
  src: string;
  alt: string;
};

export type CaseStudySection = {
  heading: "Challenge" | "Approach" | "Outcome";
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  client: string;
  context: string;
  disciplines: string[];
  tools: string[];
  projectLink?: string;
  heroImage: ProjectImage;
  images: ProjectImage[];
  caseStudy?: CaseStudySection[];
};

export const flagshipProjects: Project[] = [
  {
    slug: "google-sjt-nyc",
    title: "Google: SJT NYC",
    eyebrow: "Permanent workplace installations",
    summary:
      "Lead technical direction and programming for a range of interactive installations at Google's St. John's Terminal in New York.",
    role: "Lead Technical Director @ Downstream",
    client: "Google",
    context: "St. John's Terminal, NYC",
    disciplines: ["Generative artwork", "Interactive installation", "Remote management", "Deployment leadership"],
    tools: ["TouchDesigner", "Vue", "Cloud media synchronization", "Projection and LED calibration"],
    projectLink: "https://www.sjt-nyc.xyz/",
    heroImage: {
      src: "/project-imgs/sjt/sjt-00.jpg",
      alt: "Google St. John's Terminal media installation",
    },
    images: [
      { src: "/project-imgs/sjt/sjt-00.jpg", alt: "Google SJT installation overview" },
      { src: "/project-imgs/sjt/sjt-01.jpg", alt: "Google SJT generative media wall" },
      { src: "/project-imgs/sjt/sjt-02.jpg", alt: "Google SJT interactive display" },
      { src: "/project-imgs/sjt/sjt-03.jpg", alt: "Google SJT installation detail" },
      { src: "/project-imgs/sjt/sjt-04.jpg", alt: "Google SJT public media environment" },
      { src: "/project-imgs/sjt/sjt-05.jpg", alt: "Google SJT deployed visual system" },
    ],
    caseStudy: [
      {
        heading: "Challenge",
        body:
          "Deliver multiple bespoke generative and informational installations across a new multifaceted workplace while coordinating evolving network, control, construction, and content requirements.",
      },
      {
        heading: "Approach",
        body:
          "Built modular TouchDesigner systems, integrated Vue information layers, created calibration tools for projection and LED surfaces, and supported cloud-based synchronization for media servers throughout the building.",
      },
      {
        heading: "Outcome",
        body:
          "Completed deployment and burn-in for a cohesive set of installations designed to enrich the visitor and employee experience across the site.",
      },
    ],
  },
  {
    slug: "google-pier-57-nyc",
    title: "Google: Pier 57 NYC",
    eyebrow: "Real-time wayfinding system",
    summary:
      "Technical programming lead for a Ventuz-based digital wayfinding and generative media system at Google's Pier 57 Event Center.",
    role: "Lead Technical Director @ Downstream",
    client: "Google",
    context: "Pier 57 Event Center, NYC",
    disciplines: ["Wayfinding", "Generative visuals", "CMS-driven media", "Operational handoff"],
    tools: ["Ventuz", "Google Cloud Platform", "Unified endpoint management", "Web-based CMS"],
    projectLink: "https://www.p57.xyz/",
    heroImage: {
      src: "/project-imgs/p57/p57-00.jpg",
      alt: "Google Pier 57 event center display system",
    },
    images: [
      { src: "/project-imgs/p57/p57-00.jpg", alt: "Google Pier 57 media system overview" },
      { src: "/project-imgs/p57/p57-01.jpg", alt: "Google Pier 57 LED wayfinding display" },
      { src: "/project-imgs/p57/p57-02.jpg", alt: "Google Pier 57 event center display" },
      { src: "/project-imgs/p57/p57-03.jpg", alt: "Google Pier 57 generative visual system" },
      { src: "/project-imgs/p57/p57-04.jpg", alt: "Google Pier 57 deployment detail" },
      { src: "/project-imgs/p57/p57-05.jpg", alt: "Google Pier 57 installed screen system" },
      { src: "/project-imgs/p57/p57-06.jpg", alt: "Google Pier 57 completed installation" },
    ],
    caseStudy: [
      {
        heading: "Challenge",
        body:
          "Create a real-time content-driven wayfinding system across many LED screens with different space requirements, screen formats, and operational needs.",
      },
      {
        heading: "Approach",
        body:
          "Organized repositories and templates for the development team, programmed Ventuz systems, integrated cloud and endpoint management workflows, and worked directly with the client through design revisions.",
      },
      {
        heading: "Outcome",
        body:
          "Delivered a controllable building-wide media system that supports event scheduling, preset generative looks, custom media uploads, documentation, and operations team handoff.",
      },
    ],
  },
  {
    slug: "adriatique-projekt-x",
    title: "Adriatique: Projekt X",
    eyebrow: "Touring LED sculpture",
    summary:
      "Creative direction and live show implementation for Adriatique's modular Projekt X LED sculpture.",
    role: "Creative Director",
    client: "Adriatique",
    context: "Global touring live show",
    disciplines: ["Creative direction", "Sculptural LED system", "Live show implementation", "Team leadership"],
    tools: ["Previsualization", "3D model workflows", "LED integration", "Structural coordination"],
    projectLink: "https://www.projekt-x.xyz/",
    heroImage: {
      src: "/project-imgs/projektx/x-00.jpg",
      alt: "Adriatique Projekt X modular LED sculpture",
    },
    images: [
      { src: "/project-imgs/projektx/x-00.jpg", alt: "Projekt X live show sculpture" },
      { src: "/project-imgs/projektx/x-01.jpg", alt: "Projekt X stage view" },
      { src: "/project-imgs/projektx/x-02.jpg", alt: "Projekt X LED sculpture detail" },
      { src: "/project-imgs/projektx/x-03.jpg", alt: "Projekt X live performance environment" },
      { src: "/project-imgs/projektx/x-04.jpg", alt: "Projekt X modular scenic design" },
      { src: "/project-imgs/projektx/x-05.jpg", alt: "Projekt X touring show installation" },
    ],
    caseStudy: [
      {
        heading: "Challenge",
        body:
          "Transform Adriatique's artistic concept into a modular touring sculpture that could become a visual identity for live shows while remaining safe, transportable, and adaptable.",
      },
      {
        heading: "Approach",
        body:
          "Assembled and coordinated the team, shaped the modular design strategy, collaborated on safety and hoisting requirements, and used previsualization workflows to test the sculpture in virtual stage environments.",
      },
      {
        heading: "Outcome",
        body:
          "Projekt X debuted in Zurich in December 2022 and became a globally touring centerpiece for Adriatique's live shows.",
      },
    ],
  },
];

export const archiveProjects: Project[] = [
  {
    slug: "nike-nms-experience",
    title: "Nike NMS Experience",
    eyebrow: "Data visualization experience",
    summary:
      "Interactive manufacturing data visualization with physical controls for stakeholder decision-making.",
    role: "Creative Technologist",
    client: "Nike",
    context: "NMS Experience",
    disciplines: ["Programming", "Data visualization", "Additive manufacturing"],
    tools: ["Python", "TouchDesigner", "USB serial encoders", "Multi-jet fusion"],
    heroImage: { src: "/project-imgs/nms/nms-tri-image.png", alt: "Nike NMS interactive data visualization" },
    images: [{ src: "/project-imgs/nms/nms-tri-image.png", alt: "Nike NMS project imagery" }],
  },
  {
    slug: "newave-flying-art-uap",
    title: "NEWAVE: Flying Art UAP",
    eyebrow: "Flying art installation",
    summary:
      "Engineering and design of a 36-square-foot airborne artwork for light artist Eric Staller.",
    role: "Creative Director",
    client: "Eric Staller",
    context: "Flying light sculpture",
    disciplines: ["Design", "Engineering", "Fabrication"],
    tools: ["Fusion 360", "Ardupilot", "Pixhawk Cube", "Carbon fiber"],
    projectLink: "https://ericstaller.com/",
    heroImage: { src: "/project-imgs/newave/newave-00.gif", alt: "NEWAVE flying art installation" },
    images: [{ src: "/project-imgs/newave/newave-00.gif", alt: "NEWAVE flying light artwork" }],
  },
  {
    slug: "coachella-gateway",
    title: "The Coachella Gateway",
    eyebrow: "Interactive projection mapping",
    summary:
      "3D projection-mapped interactive installation for the 2012 Coachella Music Festival.",
    role: "Project Director",
    client: "Coachella",
    context: "Festival installation",
    disciplines: ["Interactive installation", "Projection mapping", "Show systems"],
    tools: ["TouchDesigner", "StereoBot"],
    projectLink: "https://youtu.be/c1FQj9VPuZg?si=QZeApOPCZ5xEcNic",
    heroImage: { src: "/project-imgs/gateway/gateway-02.jpg", alt: "The Coachella Gateway projection mapped installation" },
    images: [{ src: "/project-imgs/gateway/gateway-02.jpg", alt: "Coachella Gateway project image" }],
  },
  {
    slug: "coachella-lightweaver",
    title: "The Coachella Lightweaver",
    eyebrow: "Mapped light sculpture",
    summary:
      "Large-scale 3D lighting mapped installation for the 2014 Coachella Music Festival.",
    role: "Lighting Director",
    client: "Coachella",
    context: "Festival installation",
    disciplines: ["Lighting direction", "Interactive installation", "Spatial media"],
    tools: ["TouchDesigner", "WYSIWYG", "StereoBot"],
    projectLink: "https://vimeo.com/94600058",
    heroImage: { src: "/project-imgs/lightweaver/lightweaver-00.jpg", alt: "Coachella Lightweaver installation" },
    images: [{ src: "/project-imgs/lightweaver/lightweaver-00.jpg", alt: "Coachella Lightweaver project image" }],
  },
  {
    slug: "fiat-lux-vatican",
    title: "Fiat Lux: Illuminating our Common Home",
    eyebrow: "Architectural projection",
    summary:
      "Large-scale projection event at St. Peter's Basilica for Pope Francis' Extraordinary Jubilee of Mercy.",
    role: "Interactive Engineer",
    client: "Obscura Digital / Vatican",
    context: "St. Peter's Basilica",
    disciplines: ["Interactive engineering", "Projection systems", "Show control"],
    tools: ["TouchDesigner", "High-lumen projection", "Media systems"],
    projectLink: "https://vimeo.com/152015806",
    heroImage: { src: "/project-imgs/ops-vatican/ops-vatican-00.jpg", alt: "Fiat Lux projection on St. Peter's Basilica" },
    images: [{ src: "/project-imgs/ops-vatican/ops-vatican-00.jpg", alt: "Fiat Lux Vatican project image" }],
  },
  {
    slug: "cnn-road-to-270",
    title: "CNN: Road to 270",
    eyebrow: "Live data projection",
    summary:
      "Live election results projected onto the Empire State Building as a real-time election tracker.",
    role: "Interactive Engineer",
    client: "CNN / Obscura Digital",
    context: "Empire State Building",
    disciplines: ["Show control", "Real-time data", "Projection"],
    tools: ["TouchDesigner", "Live data systems"],
    projectLink:
      "https://www.washingtonpost.com/news/arts-and-entertainment/wp/2016/11/08/the-empire-state-building-has-transformed-into-a-giant-glowing-election-tracker-tonight/",
    heroImage: { src: "/project-imgs/cnn-debates/cnn-debates-00.jpg", alt: "CNN Road to 270 projection on the Empire State Building" },
    images: [{ src: "/project-imgs/cnn-debates/cnn-debates-00.jpg", alt: "CNN Road to 270 project image" }],
  },
  {
    slug: "dubai-360-sphere",
    title: "Dubai 360: Spherical Projection Theater",
    eyebrow: "Immersive projection theater",
    summary:
      "Interactive spherical projection theater presenting high-resolution panoramic Dubai 360 content.",
    role: "Lead Interactive Engineer",
    client: "Dubai 360 / Obscura Digital",
    context: "The Dubai Mall",
    disciplines: ["Playback system", "Mapping", "Immersive media"],
    tools: ["TouchDesigner", "Projection mapping", "Synchronized playback"],
    projectLink: "https://vimeo.com/123011724",
    heroImage: { src: "/project-imgs/dubai-sphere/dubai-sphere-00.jpg", alt: "Dubai 360 spherical projection theater" },
    images: [{ src: "/project-imgs/dubai-sphere/dubai-sphere-00.jpg", alt: "Dubai 360 Sphere project image" }],
  },
  {
    slug: "illuminations-un-nyc",
    title: "illUmiNations: Protecting Our Planet",
    eyebrow: "Architectural projection",
    summary:
      "30-story architectural projection at the United Nations for a global climate action event.",
    role: "Interactive Engineer",
    client: "United Nations / Obscura Digital",
    context: "UN Headquarters, NYC",
    disciplines: ["Show control", "Projection", "Interactive engineering"],
    tools: ["TouchDesigner", "Media servers", "Projection systems"],
    projectLink: "https://vimeo.com/106991647",
    heroImage: { src: "/project-imgs/ops-un-nyc/ops-un-nyc-00.jpg", alt: "illUmiNations projection at the United Nations" },
    images: [{ src: "/project-imgs/ops-un-nyc/ops-un-nyc-00.jpg", alt: "illUmiNations UN project image" }],
  },
  {
    slug: "amon-tobin-isam-live",
    title: "Amon Tobin: ISAM Live",
    eyebrow: "Immersive live show",
    summary:
      "Playback system and content creation support for the immersive Amon Tobin ISAM live audiovisual show.",
    role: "Playback System / Content Creation",
    client: "Amon Tobin / Xite Labs",
    context: "Touring live show",
    disciplines: ["Playback", "Projection mapping", "Content creation"],
    tools: ["TouchDesigner", "3D projection mapping", "Real-time graphics"],
    projectLink: "https://xitelabs.com/portfolio/amon-tobin/",
    heroImage: { src: "/project-imgs/isam/isam-00-web.jpg", alt: "Amon Tobin ISAM live projection mapped show" },
    images: [{ src: "/project-imgs/isam/isam-00-web.jpg", alt: "Amon Tobin ISAM project image" }],
  },
];

export const allProjects = [...flagshipProjects, ...archiveProjects];

export function getProjectBySlug(slug: string) {
  return flagshipProjects.find((project) => project.slug === slug);
}
