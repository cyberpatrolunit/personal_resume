import styles from "./projectmodal.module.scss";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string[];
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const body = document.querySelector("body");
    body!.style.overflowY = isOpen ? "hidden" : "scroll";

    return () => {
      body!.style.overflowY = "scroll";
    };
  }, [isOpen]);

  useEffect(() => {
    if (imgSrc.length > 1 && isOpen) {
      const interval = setInterval(() => {
        setCurrentImage(prevImage => (prevImage + 1) % imgSrc.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [imgSrc.length, isOpen]);

  const content = (
    <div
      className={styles.modal}
      onClick={() => setIsOpen(false)}
      role="presentation"
    >
      <button
        className={styles.closeModalBtn}
        onClick={() => setIsOpen(false)}
        aria-label="Close project details"
      >
        <MdClose />
      </button>
      <motion.div
        initial={{ y: 48, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
        className={styles.modalCard}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className={styles.mediaPanel}>
          <div className={styles.imageSlideshowContainer}>
            {imgSrc.map((src, index) => (
              <div
                key={index}
                className={`${styles.modalImage} ${index === currentImage ? "active" : ""}`}
                style={{ opacity: index === currentImage ? 1 : 0 }}
              >
                <Image src={src} alt={`An image of the ${title} project`} layout="fill" objectFit="contain" />
              </div>
            ))}
            <div className={styles.imageOverlay}>
              <span>{String(currentImage + 1).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(imgSrc.length).padStart(2, "0")}</span>
            </div>
          </div>
          {imgSrc.length > 1 && (
            <div className={styles.imageDots} aria-hidden="true">
              {imgSrc.map((_, index) => (
                <span
                  key={index}
                  className={index === currentImage ? styles.activeDot : ""}
                />
              ))}
            </div>
          )}
        </div>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <div>
              <p className={styles.eyebrow}>Project Detail</p>
              <h4 id="project-modal-title">{title}</h4>
            </div>
            <div className={styles.modalTech}>
              {tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className={styles.suppliedContent}>{modalContent}</div>
          <div className={styles.modalFooter}>
            <p className={styles.linksText}>Project Links<span>.</span></p>
            <div className={styles.links}>
              {code && (
                <Link href={code} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <AiFillGithub /> source code
                </Link>
              )}
              {projectLink && (
                <Link href={projectLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <AiOutlineExport /> live project
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return isOpen ? ReactDOM.createPortal(content, document.body) : null;
};
