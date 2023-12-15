import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="ExpWorks" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Google: Pier 57",
    imgSrc: "/project-imgs/p57/p57-tri-image.png",
    code: "https://github.com/cyberpatrolunit",
    projectLink: "https://google.com/",
    tech: ["Lead Technical Director", "Ventuz / TouchDesigner"],
    description:
      "As the Lead Technical Director and Ventuz programmer for the Google Pier 57 site, I spearheaded a groundbreaking project to integrate generative visuals across a multitude of LED screens within the building. The primary objective was to create a dynamic, real-time, content-driven wayfinding system, controllable via a web-based CMS, enhancing the visitor experience with both functionality and aesthetic appeal.",
    modalContent: (
      <>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Innovative Approach and Technical Mastery:
        </p>
        <p>
          I navigated the complexity of managing and tracking multiple code repositories and configurations, 
          tailored to various spaces and screen sizes. This required meticulous organization and a deep 
          understanding of real-time systems. The challenge was amplified by the diverse requirements of each 
          space, necessitating a flexible and scalable solution.
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Collaboration and Leadership:
        </p>
        <p>
        My role involved close collaboration with the design team, where I played a pivotal role in setting 
        up templates and repositories. This ensured a streamlined workflow, facilitating seamless access and 
        implementation by our development team. My approach fostered a collaborative environment, bridging the 
        gap between technical and design aspects, and ensuring a cohesive execution of the project vision.
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Technology Integration:
        </p>
        <p>
        Leveraging the capabilities of Google Cloud Platform and unified endpoint management utilities, I 
        delivered a solution that was not only technically advanced but also highly integrated and user-friendly. 
        This integration showcased my ability to utilize cutting-edge technology to meet complex project 
        requirements.
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Outcome and Client Engagement:
        </p>
        <p>
        Working directly with the client, I was instrumental in incorporating design changes and revisions, 
        ensuring that the final product aligned perfectly with Google's vision. The project culminated in 
        extensive documentation and training for the operations team, facilitating a smooth transition and 
        ongoing management. The final outcome is a testament to our team's ability to deliver a dynamic, 
        real-time, content-driven wayfinding experience that allows Google to control the entire site. Through 
        our programming, Google can schedule events, set preset generative looks, and upload custom media, 
        thereby creating a cohesive and interactive experience throughout the building.
        </p>      
      </>
    ),
  },
  {
    title: "Adriatique: Projekt X",
    imgSrc: "/project-imgs/projektx/x-tri-image.png",
    code: "https://github.com/cyberpatrolunit",
    projectLink: "https://cyberpatrolunit.vercel.app/",
    tech: ["Creative Director", "Live Show Implementation"],
    description:
      "A collaborative venture with the renowned DJ duo Adriatique, stands as a testament to my abilities as a Creative Director to transform artistic visions into tangible realities. This project was a harmonious blend of art, technology, and music, culminating in a modular sculpture that evolved visually across various live shows.",
    modalContent: (
      <>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Conceptualization and Collaboration:
        </p>
        <p>
        The genesis of Projekt X originated from Adriatique’s visionary ideas. My role was pivotal in assembling 
        a skilled team to materialize this concept. My idea was to build a sculpture where it's design was inherently 
        modular, allowing for the application of different materials to its outer facets, thereby offering varied 
        aesthetics for different live events. This approach not only enhanced its visual appeal but will continue to 
        extended its relevance and impact over time.
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Technical Ingenuity and Safety Measures:
        </p>
        <p>
        A critical aspect of the project was engineering the X for utmost safety, especially considering its use 
        above live audiences. Collaborating with an engineering firm, we meticulously modeled the structure to withstand 
        wind loads and ensure secure hoisting. Balancing safety, weight considerations, and the need for portability for 
        touring purposes was a significant challenge. The integration of LEDs into the sculpture was carefully planned to 
        align with these safety and design parameters.
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Dynamic Collaboration Across Borders:
        </p>
        <p>
        Working with a geographically dispersed team, including artists in Switzerland and our team in Portland, Oregon, 
        necessitated strategic planning for weekly meetings. This cross-continental collaboration highlighted our ability 
        to overcome time zone challenges and maintain effective communication and coordination throughout the project's 
        timeline.
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Artistic Vision and Emotional Resonance:
        </p>
        <p>
        At its core, Projekt X symbolizes the crossroads of interaction and creativity. Its reflective chrome powder 
        coating not only adds aesthetic value but also enhances the visual experience with laser mapping and light 
        caustics. We employed various previsualization solutions, allowing us to experiment with the 3D model in virtual 
        stage designs before physical construction.
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Impact and Reception:
        </p>
        <p>
        Debuting in December 2022 in Zurich, Projekt X has since journeyed globally with Adriatique, becoming an iconic 
        centerpiece and identity for their live shows. This project holds special significance for me, not only 
        professionally as a creative director but also personally, given my friendship with the artists. Crafting techno 
        art that comes alive in front of large audiences, enhancing the energy and experience of Adriatique's live shows, 
        has been an immensely rewarding and fulfilling experience.
        </p>
      </>
    ),
  },
  {
    title: "Videoglove.com",
    imgSrc: "/project-imgs/videoglove/videoglove-thumb.png",
    code: "https://github.com/ShivaBhattacharjee/Muxik",
    projectLink: "https://videoglove.com/",
    tech: ["Personal Project", "NextJs", "GSAP", "Vercel", "ThreeJs"],
    description:
      "An ever evloving personal project where I have a platfrom to showcase my work and also a place to experiment with new web technologies.",
    modalContent: (
      <>
        <p>
          Muxik is a music streaming / downloading site that offers a vast library for streaming and downloading. With a user-friendly interface, you can easily find your favorite song and stream them in high-definition quality. Our platform is updated regularly with the songs, so you can stay up-to-date with your favorite songs.Muxik is the go-to destination for audiophiles who want to stream or download their favorite music anytime, anywhere
        </p>
        <p>
          Users can conveniently batch download their favorite music and enjoy it offline, making it perfect for road trips or areas with limited internet connectivity. Muxik&apos;s Progressive Web Application (PWA) support ensures seamless access across devices without the need for separate installations.
        </p>
        <p>
          Enhancing the listening experience, Muxik allows users to adjust volume levels, auto-skip songs, and repeat tracks with ease. Personalized song recommendations and curated top playlists help users discover new music and diversify their library. With Muxik, users can enjoy a tailored and immersive audio experience, thanks to its volume change feature that adapts to individual preferences.
        </p>
        <p>
          In summary, Muxik offers a convenient solution for music lovers. It provides batch downloading and offline streaming capabilities, along with features like PWA support, volume control, auto-skip, recommended songs, top playlists, and repeat functionality. With Muxik, users can effortlessly enjoy their favorite music, discover new tracks, and personalize their listening experience.
        </p>
      </>
    ),
  },

  {
    title: "Google: St. John's Terminal",
    imgSrc: "/project-imgs/Synthia.png",
    code: "https://github.com/cyberpatrolunit",
    projectLink: "",
    tech: ["Rust"],
    description:
      "Synthia is a lightweight and beginner-friendly interpreted programming language developed in Rust. With a simple, intuitive syntax and a focus on ease of use, Synthia is perfect for both newcomers to programming and experienced developers looking for a flexible scripting language",
    modalContent: (
      <>
        <p>
          Synthia is a powerful and user-friendly programming language designed to make coding accessible to all skill levels. Built on top of Rust, it combines the blazing speed of Rust with a forgiving grammar and intuitive syntax. Say goodbye to complex rules and hello to rapid development.
        </p>
        <h3>
          Synthia Offers
        </h3>
        <li>
          <b>Lightning-Fast Execution</b>: Synthia harnesses the speed and performance of Rust, making it significantly faster than Python for a wide range of applications.
        </li>
        <li>
          <b>Beginner-Friendly</b>: With an easy-to-learn syntax and grammar rules that forgive common mistakes, Synthia is the ideal choice for those new to programming and experienced developers looking for productivity.
        </li>
        <li>
        <b>Built on Rust</b>: Benefit from Rust&apos; memory safety and ecosystem while enjoying the simplicity of Synthia&apos;s syntax.
        </li>
      </>
    ),
  },
];
