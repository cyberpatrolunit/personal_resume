import React, { Suspense } from 'react';
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./projects.module.scss";

const Project = React.lazy(() => import('./Project'));

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        <Suspense fallback={<div>Loading Projects...</div>}>
          {projects.map((project) => {
            return <Project key={project.title} {...project} />;
          })}
        </Suspense>
      </div>
    </section>
  );
};

const projects = [


  {
    title: "Adriatique: Projekt X",
    imgSrc: ["/project-imgs/projektx/x-00.jpg",
             "/project-imgs/projektx/x-01.jpg",
             "/project-imgs/projektx/x-02.jpg",
             "/project-imgs/projektx/x-03.jpg",
             "/project-imgs/projektx/x-04.jpg",
             "/project-imgs/projektx/x-05.jpg",],
    code: "",
    projectLink: "https://www.projekt-x.xyz/",
    tech: ["Creative Director", "Live Show Implementation"],
    description:
      "Creative Director for Adriatique's Projekt X modular LED sculpture.",
    modalContent: (
      <>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Project Overview:
        </p>
        <p>
        A collaborative venture with the renowned DJ duo Adriatique, stands as a testament to my abilities as a Creative 
        Director to transform artistic visions into tangible realities. This project was a harmonious blend of art, 
        technology, and music, culminating in a modular sculpture that evolved visually across various live shows.
        </p>
        <p>
        </p>
        <p>
        </p>
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
        <p>
        </p>
        <p>
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
        <p>
        </p>
        <p>
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
        <p>
        </p>
        <p>
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
        <p>
        </p>
        <p>
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
        <p>
        </p>
        <p>
        </p>
      </>
    ),
  },
  {
    title: "Nike NMS Experience",
    imgSrc: ["/project-imgs/nms/nms-tri-image.png"],
    code: "",
    projectLink: "",
    tech: ["Creative Technologist", "Programming", "Additive Manufacturing"],
    description:
      "Data visualization and experiential technology for Nike's NMS Experience Project.",
    modalContent: (
      <>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Project Overview:
        </p>
        <p>
        My role: transform large data models into compelling real-time user-modifiable visualizations, facilitating strategic 
        discussions around Nike's manufacturing efficiencies. I utilized Python and TouchDesigner to craft an interactive 
        data visualization environment. This project allowed me to create a unique interface for stakeholders to engage with 
        variables throughout the shoe production process via physical dials that I manufactured with multi-jet fusion technology.
        </p>
        <p>
        </p>
        <p>
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Innovative Data Interaction:
        </p>
        <p>
        Leveraging the hands-on aspect of the experience, I integrated USB-to-serial encoders, allowing users to adjust 
        various metrics of the manufacturing process and observe the resultant changes in labor costs in real-time. This 
        direct manipulation of data not only engaged stakeholders but also effectively demonstrated the financial impact 
        of varying skill levels within Nike’s manufacturing process.
        </p>
        <p>
        </p>
        <p>
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Expertise and Remote Deployment:
        </p>
        <p>
        As an outside contractor, my mandate was to adhere to the client-provided style sheets, iteratively refining the 
        visual aesthetics to meet detailed specifications. The project demanded a high level of mathematical precision 
        and responsiveness, with remote deployment being a distinctive challenge I overcame. Utilizing Parsec for remote 
        access, I successfully executed the entire deployment off-site, a testament to my adaptability and problem-solving 
        skills in a fully remote work environment.
        </p>
        <p>
        </p>
        <p>
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Outcome and Impact:
        </p>
        <p>
        The project's success was evident in its reception by stakeholders, who gained clear insights into market indicators 
        from the visualized data. This experience underscores the power of data visualization in conveying complex information 
        succinctly and the potential of experiential technology to make abstract data tangible. It has reinforced my belief 
        in the transformative power of data-driven storytelling and its significant role in strategic business decision-making.
        </p>
        <p>
        </p>
        <p>
        </p>
      </>
    ),
  },
  {
    title: "NEWAVE: Flying Art UAP",
    imgSrc: ["/project-imgs/newave/newave-00.gif",
             "/project-imgs/newave/newave-01.gif",
             "/project-imgs/newave/newave-02.gif",
             "/project-imgs/newave/newave-03.gif",
             "/project-imgs/newave/newave-04.gif",
             "/project-imgs/newave/newave-05.gif",],
    code: "",
    projectLink: "https://ericstaller.com/",
    tech: ["Creative Director", "Design", "Engineering"],
    description:
      "Engineering and design of a 36SqFt flying art installation for renowned artist Eric Staller.",
    modalContent: (
      <>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Project Overview:
        </p>
        <p>
        Conceptualized by the visionary light artist Eric Staller, NEWAVE was born from the idea of a flying carpet, evolving 
        naturally from his repertoire of light painting, sculptures, and Urban UFOs. I embraced the challenge, channeling my 
        expertise in hobby FPV quadcopters to craft this 36.SqFt airborne marvel.
        </p>
        <p>
        </p>
        <p>
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Design and Engineering:
        </p>
        <p>
        Crafted with a quadcopter configuration, NEWAVE was a feat of engineering that pushed the boundaries of drone technology 
        in 2018. Utilizing 30" propellers, the largest available at the time, I designed a completely original drone frame in 
        Fusion 360 and sourced high-quality carbon fiber materials. Alloy 910 3D-printed connectors joined the intricate array 
        of rods and plates, forming the robust yet agile structure. Electronics and battery integration followed, with rigorous 
        load capacity and flight time testing ensuring NEWAVE's performance met the ambitious vision.
        </p>
        <p>
        </p>
        <p>
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Technical Integration and Artistic Lighting:
        </p>
        <p>
        The flight controller of choice was a Pixhawk Cube, coupled with Ardupilot for reliable flight control, including position 
        hold and waypoint missions. The lighting system, a crucial aspect of NEWAVE's awe-inspiring presence, was installed by 
        Nathan Jenkins, who integrated an LED system with sequences designed in TouchDesigner to animate the drone with pre-recorded 
        luminosity.
        </p>
        <p>
        </p>
        <p>
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Collaborative Spirit and Challenges Overcome:
        </p>
        <p>
        NEWAVE's journey from concept to reality was paved with the contributions of many. Jeremy Allen's flight software expertise, 
        Dallas Swindle's airflow simulations, William Place's flight testing, Mark Francis's fabrication skills, Tom Sepe's transport 
        logistics, Colby Curtola's drone operations, and numerous others who contributed to the multi-year project, embodied the 
        collaborative spirit that underpinned this endeavor.
        </p>
        <p>
        </p>
        <p>
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Impact and Reception:
        </p>
        <p>
        Designed to astonish and inspire, NEWAVE succeeded in its mission to be a flying spectacle, captivating audiences with its 
        urban UFO-like appearance against the night sky. Its debut at Maker Faire and various events across San Francisco and Portland 
        Oregon marked the culmination of persistence and innovation, leaving an indelible mark on the realm of artistic expression.
        </p>
        <p>
        </p>
        <p>
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
        Reflections and Future Endeavors:
        </p>
        <p>
        In retrospect, considerations for future projects would include a more powerful propulsion system capable of enduring stronger 
        winds, potentially a hexacopter for increased redundancy, and a more lightweight design. A shift to real-time wireless LED 
        programming would allow for adaptable, location-specific displays, enhancing the interactive element of the art piece. Despite 
        the trials and tribulations, the successful flights of NEWAVE represent the tangible triumph of art and technology, a testament 
        to the relentless pursuit of transforming the skies into a canvas for creativity.
        </p>
        <p>
        </p>
        <p>
        </p>
      </>
    ),
  },
  {
    title: "The Coachella Gateway",
    imgSrc: ["/project-imgs/gateway/gateway-01.gif",
             "/project-imgs/gateway/gateway-02.gif",
             "/project-imgs/gateway/gateway-02.jpg",
             "/project-imgs/gateway/gateway-03.gif",
             "/project-imgs/gateway/gateway-04.gif",
             "/project-imgs/gateway/gateway-05.gif",
             "/project-imgs/gateway/gateway-06.gif",
            ],
    code: "",
    projectLink: "https://youtu.be/c1FQj9VPuZg?si=QZeApOPCZ5xEcNic",
    tech: ["Project Director", "TouchDesigner / StereoBot / Interactive Installation"],
    description:
      "The Coachella Gateway was a 3D projection-mapped interactive installation for the 2012 Coachella Music Festival.",
    modalContent: (
      <>
        <p>
          The Coachella Gateway was a 3D projection-mapped interactive installation for the 2012 Coachella Music Festival.
        </p>
      </>
    ),
  },
  {
    title: "The Coachella Lightweaver",
    imgSrc: ["/project-imgs/lightweaver/lightweaver-00.jpg",
             "/project-imgs/lightweaver/lightweaver-00.1.jpg",
             "/project-imgs/lightweaver/lightweaver-00.2.jpg",
             "/project-imgs/lightweaver/lightweaver-01.jpg",
             "/project-imgs/lightweaver/lightweaver-02.1.gif",
             "/project-imgs/lightweaver/lightweaver-03.1.gif",
             "/project-imgs/lightweaver/lightweaver-04.1.gif",
            ],
    code: "",
    projectLink: "https://vimeo.com/94600058",
    tech: ["Lighting Director", "TouchDesigner / WYSIWYG / StereoBot / Interactive Installation"],
    description:
      "The Coachella Lightweaver was a 3D lighting mapped interactive installation for the 2014 Coachella Music Festival.",
    modalContent: (
      <>
        <p>
        The #LIGHTWEAVER is the next generation of fusion between architectural study, interactive multimedia and dynamic lighting. 
        #LIGHTWEAVER is a 24 hour kinetic sculpture interplaying natural and artificial light against a curvilinear knotted frame. 
        Towering 45 feet tall with a diameter of 75 feet, this massively spatial structure is sure to be witnessed from across the 
        festival grounds. During the day, its bold coloration is contrasted by complex shadow lines wrapping the structure and 
        silhouetting intricate shade patterns in the ground. At night, #LIGHTWEAVER becomes a spatial canvas brought to life by 
        OBSCURA’s light and sound score, a multimedia experience challenging the comprehension of temporal and spatial dimensions.
        </p>
      </>
    ),
  },
  {
    title: "Fiat Lux: Illuminating our Common Home",
    imgSrc: ["/project-imgs/ops-vatican/ops-vatican-00.jpg",
             "/project-imgs/ops-vatican/ops-vatican-01.jpg",
             "/project-imgs/ops-vatican/ops-vatican-02.jpg",
             "/project-imgs/ops-vatican/ops-vatican-03.jpg",
             "/project-imgs/ops-vatican/ops-vatican-04.jpg",
             "/project-imgs/ops-vatican/ops-vatican-05.jpg",
             "/project-imgs/ops-vatican/ops-vatican-06.jpg",
             "/project-imgs/ops-vatican/ops-vatican-07.jpg",
            ],
    code: "",
    projectLink: "https://vimeo.com/152015806",
    tech: ["OBSCURA DIGITAL", "Lead Interactive Engineer / TouchDesigner"],
    description:
      "Obscura was chosen by the Vatican’s Pontifical Council to create a contemporary artistic interpretation of Pope Francis’ Encyclical, “Laudato Si.”",
    modalContent: (
      <>
        <p>
        Obscura was chosen by the Vatican’s Pontifical Council to create a contemporary artistic interpretation of Pope Francis’ Encyclical, “Laudato Si.” 
        The large-scale architectural projection show entitled: “Fiat Lux: Illuminating Our Common Home” was presented as a gift to Pope Francis to celebrate 
        the opening of the Extraordinary Jubilee of Mercy. It was the first time that art has ever been projected onto St. Peter’s Basilica.
        </p>
        <p>
        “Laudato Si,” means “Praise be to you,” a phrase commonly used by Saint Francis, the patron saint of animals and ecology and Pope Francis’ namesake. 
        In writing his impassioned plea for greater focus on the environment, Pope Francis cited areas of particular concern: pollution and climate change, 
        the lack of clean water for much of the world’s population, and loss of biodiversity.
        </p>
        <p>
        To bring the pope’s message to life, Obscura created an unprecedented 60-minute show featuring powerful images of humanity diversity and natural beauty 
        from world-renowned photographers and curated by Travis Threlkel and Academy Award-winning filmmaker Louie Psyhoyos (The Cove). Using 21st century art 
        and 50 high lumen projectors, the show was presented as a visual symphony in seven movements.
        </p>
        <p>
        A crowd of over 200,000 people gathered to watch the show live in the Piazza San Pietro, while 4 million watched via live stream video. Media coverage 
        generated another billion global impressions.
        </p>
        <p>
        Fiat Lux: Illuminating our Common Home featured the work of some of the world’s most noted humanistic and nature photographers and filmmakers including 
        Sebastiao Salgado and Amazonas Images, Joel Sartore and his Photo Ark series, Yann Arthus Bertrand, David Doubilet, Ron Fricke, Howard Hall, Shawn Heinrichs, 
        Greg Huglin, Chris Jordan, Mark Magidson, Steve McCurry, Louie Schwartzberg and Paul Nicklen. Funding provide by the Li Ka Shing Foundation and Vulcan 
        Productions. Natural sound effects provided by Macaulay Library at the Cornell Lab of Ornithology.
        </p>
        <p>
        Projection and Design: obscuradigital.com
        </p>
        <p>
        Music: Arvo Pärt: Fratres
        </p>
        <p>
        OBSCURA TEAM
        </p>
        <p>
        Travis Threlkel - Chief Creative Officer
        </p>
        <p>
        Chris Lejeune - Chief Executive Officer / Account Executive
        </p>
        <p>
        Matty Dowlen - Chief of Production
        </p>
        <p>
        Andrew Plourde - Senior Technical Director
        </p>
        <p>
        Marc Melzer - Director of Media Arts
        </p>
        <p>
        Barry Threw - Director of Interactive
        </p>
        <p>
        Sean Holt - Director of IT
        </p>
        <p>
        Emmett Feldman - Senior Art Director
        </p>
        <p>
        Jennifer Williams - Producer
        </p>
        <p>
        Ari Ali - Senior Media Producer
        </p>
        <p>
        Anna Le Breton - Production Coordinator
        </p>
        <p>
        Doni Dennis - Marketing Director
        </p>
        <p>
        Tim Digulla - Art Director
        </p>
        <p>
        Ron Robinson - Art Director
        </p>
        <p>
        Tony Grisey - Senior Animator
        </p>
        <p>
        Jim Ellis - Technical Director/3D Animation
        </p>
        <p>
        Eddy Katt - 3D Animator
        </p>
        <p>
        Alexi Alexaieff - Technical Artist
        </p>
        <p>
        Brittnie Diamant - Production Artist
        </p>
        <p>
        Bryant Place - Interactive Engineer
        </p>
        <p>
        Harvey Moon - Interactive Engineer
        </p>
        <p>
        Anton Heestand - Interactive Engineer
        </p>
        <p>
        Christopher Houchin - Technical Director
        </p>
        <p>
        Nick Lynch - Technical Director
        </p>
        <p>
        Diego Novoa - Technical Director
        </p>
        <p>
        Nathan Houchin - Technical Director
        </p>
        <p>
        Michelle Grenier - Associate Creative Director
        </p>
        <p>
        Joshua Brott - Director of Photography
        </p>
        <p>
        Brandon Moore - Assistant Photographer
        </p>
        <p>
        Eric Schneider - Purchasing
        </p>
        <p>
        Ethan Indorf - Editor
        </p>
        <p>
        Tim McMahon - Editor
        </p>
        <p>
        Alex Oropeza - Music Director
        </p>
        <p>
        Harald Boyesen - Sound Design
        </p>
        <p>
        Lucy Sheils - Sound Design
        </p>
      </>
    ),
  },
  {
    title: "CNN: Road to 270",
    imgSrc: ["/project-imgs/cnn-debates/cnn-debates-00.jpg",
             "/project-imgs/cnn-debates/cnn-debates-01.jpg",
             "/project-imgs/cnn-debates/cnn-debates-02.jpg",
             "/project-imgs/cnn-debates/cnn-debates-03.jpg",
             "/project-imgs/cnn-debates/cnn-debates-04.jpg",
             "/project-imgs/cnn-debates/cnn-debates-05.jpg",
             "/project-imgs/cnn-debates/cnn-debates-06.jpg",
             "/project-imgs/cnn-debates/cnn-debates-07.jpg",
            ],
    code: "",
    projectLink: "https://www.washingtonpost.com/news/arts-and-entertainment/wp/2016/11/08/the-empire-state-building-has-transformed-into-a-giant-glowing-election-tracker-tonight/",
    tech: ["OBSCURA DIGITAL", "Interactive Engineer / Show Control / TouchDesigner"],
    description:
      "Live election results projected onto the Empire State Building. The Empire State Building has transformed into a giant glowing election tracker tonight.",
    modalContent: (
      <>
        <p>
        Live election results projected onto the Empire State Building. The Empire State Building has transformed into a giant glowing election tracker tonight.
        </p>
      </>
    ),
  },
  {
    title: "Dubai 360: Spherical Projection Theater",
    imgSrc: ["/project-imgs/dubai-sphere/dubai-sphere-00.jpg",
             "/project-imgs/dubai-sphere/dubai-sphere-01.jpg",
             "/project-imgs/dubai-sphere/dubai-sphere-02.jpg",
             "/project-imgs/dubai-sphere/dubai-sphere-03.jpg",
             "/project-imgs/dubai-sphere/dubai-sphere-04.jpg",
             "/project-imgs/dubai-sphere/dubai-sphere-05.jpg",
             "/project-imgs/dubai-sphere/dubai-sphere-06.jpg",
            ],
    code: "",
    projectLink: "https://vimeo.com/123011724",
    tech: ["OBSCURA DIGITAL", "Lead Interactive Engineer / Playback System / Mapping / TouchDesigner"],
    description:
      "When the team behind the Dubai 360 website wanted to create a life-size interactive experience for their content, they partnered with Obscura for creative innovation.",
    modalContent: (
      <>
        <p>
        When the team behind the Dubai 360 website wanted to create a life-size interactive experience for their content, they partnered with Obscura for creative 
        innovation. The goal was to design a physical space where high-quality panoramic content from the Dubai 360 website could be presented in a unique, fully 
        immersive way. Located in the The Dubai Mall, “The Sphere” is the result of a collaboration between the teams. Visitors step inside The Sphere and walk along 
        a suspended footbridge to the center, where they experience a fast-paced, six-minute film of Dubai shot in 360 degrees. Powered by 18 synchronized projectors, 
        the show includes iconic locations such as Burj Khalifa and The Palm Jumeirah from perspectives never seen before. The Sphere is the world’s largest interactive 
        city tour in the world’s biggest mall—and the first of its kind in the Middle East. The Sphere showcases Dubai’s pioneering spirit by integrating innovative 
        ideas with technology to promote the wonders of the city. Dubai 360 project manager Ismaeil Al Hashmi said, “The launch of Dubai 360 has established new standards 
        for how people experience a city. The Sphere is another extension of that experience.” Consultant Tommy Wakefield-Smith, who lives in Dubai, observed, “Obscura 
        Digital has demonstrated the incredible possibilities of immersive entertainment and education.”
        </p>
      </>
    ),
  },
  {
    title: "illUmiNations: Protecting Our Planet",
    imgSrc: ["/project-imgs/ops-un-nyc/ops-un-nyc-00.jpg",
             "/project-imgs/ops-un-nyc/ops-un-nyc-01.jpg",
             "/project-imgs/ops-un-nyc/ops-un-nyc-02.jpg",
             "/project-imgs/ops-un-nyc/ops-un-nyc-03.jpg",
             "/project-imgs/ops-un-nyc/ops-un-nyc-04.jpg",
             "/project-imgs/ops-un-nyc/ops-un-nyc-05.jpg",
            ],
    code: "",
    projectLink: "https://vimeo.com/106991647",
    tech: ["OBSCURA DIGITAL", "Interactive Engineer / Show Control / TouchDesigner"],
    description:
      "When the team behind the Dubai 360 website wanted to create a life-size interactive experience for their content, they partnered with Obscura for creative innovation.",
    modalContent: (
      <>
        <p>
        On Saturday, September 20, 2014, the United Nations Department of Public Information presented a spectacular 30-story architectural projection in partnership with the 
        Oceanic Preservation Society, Obscura Digital, and Insurgent Media. The General Assembly and Secretariat buildings were lit up with massive projections as part of a 
        revolutionary call for action on global climate change.
        </p>
        <p>
        The event took place in connection with the UN Secretary-General’s Climate Summit. “Now is the time to take decisive action on climate change. Protecting our planet is 
        the responsibility of each and every one of us. We must make our voices heard. These exceptional projections shown at the United Nations will help draw attention to the 
        need to make climate action a reality in every community and every society,” said UN Secretary-General General Ban Ki-moon.
        </p>
        <p>
        The visual showcase was made possible with the support of TheDodo.com and the Lehrer Family Foundation and produced in conjunction with Okeanos – Foundation for the Sea, 
        Vulcan Productions, and Millennium ART. illUmiNations was a collaborative effort between Academy Award-winning director Louie Psihoyos, Academy Award-winning producer 
        Fisher Stevens, and Obscura Digital. The musical score for the video was composed by Academy Award-nominated composer J. Ralph.
        </p>
      </>
    ),
  },
  {
    title: "Videoglove.com",
    imgSrc: ["/project-imgs/videoglove/videoglove-00.jpg",
             "/project-imgs/videoglove/videoglove-01.jpg",
             "/project-imgs/videoglove/videoglove-02.jpg",
            ],
    code: "",
    projectLink: "https://videoglove.com/",
    tech: ["Personal Project", "NextJs / GSAP / Vercel / ThreeJs"],
    description:
      "An ever evloving personal project where I have a platfrom to showcase my work and also a place to experiment with new web technologies.",
    modalContent: (
      <>
        <p>
          An ever evloving personal project where I have a platfrom to showcase my work and also a place to experiment with new web technologies.
        </p>
      </>
    ),
  },
  {
    title: "Amon Tobin: ISAM Live",
    imgSrc: ["/project-imgs/isam/isam-00-web.jpg",
             "/project-imgs/isam/isam-01-web.jpg",
             "/project-imgs/isam/isam-02-web.jpg",
             "/project-imgs/isam/isam-03-web.jpg",
             "/project-imgs/isam/isam-04-web.jpg",
             "/project-imgs/isam/isam-05-web.jpg",
             "/project-imgs/isam/isam-06-web.jpg",
            ],
    code: "",
    projectLink: "https://xitelabs.com/portfolio/amon-tobin/",
    tech: ["Playback System, TouchDesigner, Content Creation"],
    description:
      "Amon Tobin ISAM was an immersive audio visual show that made a huge imprint on the world of electronic music and visual arts.",
    modalContent: (
      <>
        <p>
        Amon Tobin ISAM was an immersive audio visual show that made a huge imprint on the world of electronic music and visual arts. The groundbreaking 3D animation, real time 
        computer graphics using Touch Designer and 3D projection mapping pushed the 4D medium to new levels. The experience was directed by Vello Virkhaus and the team at Xite 
        formerly (V Squared Labs) in collaboration with Amon Tobin, Leviathan and set designer Vita Motus. The stage design and visual narrative structure took the audience on a 
        journey through Tobin’s avant-garde IDM soundscapes. The show started with an mysterious mechanical structure coming to life. This stage then turned into a ship and launched 
        into space. We then saw Tobin in a hyper-sleep space pod on a futuristic cockpit of the ship. He later wakes up after a series of wild hallucinatory dream like pieces, and 
        comes out at the end of the show in the same space suit used in the 3D animations. This was a striking reveal.
        </p>
      </>
    ),
  }
];

export default Projects;