import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { MdDevicesOther } from "react-icons/md"
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>My Arsenal </span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Python</span>
            <span className="chip">Docker</span>
            <span className="chip">ThreeJS</span>
            <span className="chip">GLSL</span>
            <span className="chip">p5js</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">SCSS</span>
            <span className="chip">Git</span>
            <span className="chip">React</span>
            <span className="chip">NextJs</span>
            <span className="chip">VSCode</span>
            <span className="chip">Spline</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Vercel</span>
            <span className="chip">Adobe Suite</span>
            <span className="chip">WYSIWYG</span>
            <span className="chip">Ableton</span>
            <span className="chip">Unreal Engine</span>
            <span className="chip">TouchDesigner</span>
            <span className="chip">Blender</span>
            <span className="chip">MAX/MSP</span>
            <span className="chip">Fleet Deployment</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <MdDevicesOther size="2.4rem" color="var(--brand)" />
            <span>Others</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">PreVisualization</span>
            <span className="chip">Lighting Design</span>
            <span className="chip">CAD</span>
            <span className="chip">Additive Manufacturing</span>
            <span className="chip">Rapid Prototyping</span>
            <span className="chip">Skiing</span>
            <span className="chip">Biking</span>
            <span className="chip">Custom Drone Builds</span>
            <span className="chip">AI Technology</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
