import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <div>
              <p className={`${styles.aboutText}`}>
                <span>YO!</span>My name is Bryant Place, and I&apos;m a highly 
                accomplished creative technologist with over 13 years of
  experience in the live entertainment and permanent installation industries. I have a strong
  track record of effectively leading projects and teams, and have consistently demonstrated an
  ability to navigate and solve complex problems, resulting in the successful delivery of
  numerous interactive installations and live event shows. Throughout my career, I&apos;ve held various positions of increasing responsibility, including
  Technical Director of Real-Time Systems, Lead Technical Director and Creative Director, and
  Senior Interactive Art Engineer.
              </p>
              <p className={`${styles.aboutText}`}>
              Throughout my career, I&apos;ve held various positions of increasing responsibility, including
  Technical Director of Real-Time Systems, Lead Technical Director and Creative Director, and
  Senior Interactive Art Engineer. In these roles, I&apos;ves played a pivotal role in the conception
  and execution of a diverse array of projects. As Technical Director of Real-Time Systems at
  Downstream, I&apos;ve served as Lead Technical Director and lead developer for the permanent
  installations at Google Pier 57 and Google St. John’s Terminal in NYC, and was responsible for
  the management of real-time developers and the procurement of software and hardware for
  permanent installations. Recently, I&apos;ve managed the design, build and deployment of a
  custom fabricated stage element 'X' for Adriatique. As an Independent Contractor and
  Freelance professional, I&apos;ve contributed to a range of projects including serving as Data
  Vizualist / Software Developer for Nike HQ and the Capital One Patent Lounge, leading large
  scale media transcoding and alignment for the Salesforce Tower West and East LED Facade,
  designing, building, programming, and implementing the NEWAVE LED flying carpet art piece,
  and providing drone photography for various music artists and job sites. As Lead Technical
  Director and Creative at dotdotdash.io, I&apos;ve served as Lead TD and system architect for the
  Amazon Prime Video Pop-Bot, Lead TD for the Hyundai Nexo Car Show, and contributed to
  TheNorthFace Future Light Product Reveal. In my role as Senior Interactive Art Engineer at
  OBSCURA DIGITAL, now MSG Sphere, I&apos;ve worked on over 25 client facing projects from conception to execution,
  and was responsible for integrating all team contributions into a final production ready system,
  interfacing with a range of hardware and software systems, and delivering interactive
  experiences for events. Notable projects and contributions in this role include the Lux Prima
  Live Show 2019, the Radio City Music Hall Christmas Spectacular 2018, the MSG Sphere 2018,
  the Dubai Expo 2020, "Unseen Stars" at Grand Central Terminal 2017, and The Antarctic Dome
  at Coachella 2017, among others.
              </p>
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
