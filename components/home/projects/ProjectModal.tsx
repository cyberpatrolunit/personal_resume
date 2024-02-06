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
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}><MdClose /></button>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={e => e.stopPropagation()}
        className={styles.modalCard}
      >
        <div className={styles.imageSlideshowContainer}>
          {imgSrc.map((src, index) => (
            <div
              key={index}
              className={`${styles.modalImage} ${index === currentImage ? "active" : ""}`}
              style={{ opacity: index === currentImage ? 1 : 0 }}
            >
              <Image src={src} alt={`An image of the ${title} project`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>
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
