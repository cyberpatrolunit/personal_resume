import styles from "./headinglinks.module.scss";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineInstagram
} from "react-icons/ai";
import { BsGithub, BsTiktok, BsDiscord, BsTwitterX, BsInstagram } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>

    <motion.span
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Link href="https://www.instagram.com/cyberpatrolunit" target="_blank" rel="nofollow">
        <BsInstagram size="2.4rem" />
      </Link>
    </motion.span>

    <motion.span
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Link href="https://www.tiktok.com/@cyberpatrolunit" target="_blank" rel="nofollow">
        <BsTiktok size="2.4rem" />
      </Link>
    </motion.span>

    <motion.span
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Link href="https://www.twitter.com/cyberpatrolunit" target="_blank" rel="nofollow">
        <BsTwitterX size="2.4rem" />
      </Link>
    </motion.span>

    <motion.span
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Link href="https://github.com/cyberpatrolunit" target="_blank" rel="nofollow">
        <BsGithub size="2.4rem" />
      </Link>
    </motion.span>

    <motion.span
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Link href="https://discordapp.com/users/456890225164156969" target="_blank" rel="nofollow">
        <BsDiscord size="2.4rem" />
      </Link>
    </motion.span>

    </div>
  );
};
