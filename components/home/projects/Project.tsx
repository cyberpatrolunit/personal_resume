import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import styles from "./projects.module.scss";
import Image from "next/image";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string[];
  tech: string[];
  title: string;
  code: string;
}

const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);
  
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (imgSrc.length > 1) {
      const interval = setInterval(() => {
        setVisibleImageIndex(prevIndex => (prevIndex + 1) % imgSrc.length);
      }, 4000); // Time in milliseconds before the next image fades in
      return () => clearInterval(interval);
    }
  }, [imgSrc.length]);

  return (
    <>
      {imgSrc && imgSrc.length >= 1 ? (
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.75 }}
        >
          <div
            onClick={() => setIsOpen(true)}
            className={styles.projectImage}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIsOpen(true);
              }
            }}
          >
            {imgSrc.map((src, index) => (
              <div
                key={index}
                className={styles.imageContainer}
                style={{ opacity: visibleImageIndex === index ? 1 : 0 }}
              >
                <Image
                  src={src}
                  quality={60}
                  layout="fill"
                  objectFit="cover"
                  alt={`An image of the ${title} project`}
                />
              </div>
            ))}
          </div>
          <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectActions}>
                {code && (
                  <Link href={code} target="_blank" rel="nofollow" aria-label={`${title} source code`}>
                    <AiFillGithub size="2.4rem" />
                  </Link>
                )}
                {projectLink && (
                  <Link href={projectLink} target="_blank" rel="nofollow" aria-label={`${title} external link`}>
                    <AiOutlineExport size="2.4rem" />
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
            <Reveal>
              <div className={styles.projectTech}>
                {tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <p className={styles.projectDescription}>
                <span className={styles.descriptionText}>{description}</span>
                <button type="button" onClick={() => setIsOpen(true)}>Learn more</button>
              </p>
            </Reveal>
          </div>
        </motion.div>
      ) : (
        <div>No valid images to display.</div>
      )}
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};

export default Project;
