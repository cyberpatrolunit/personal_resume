import React, { Suspense, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import emailjs from '@emailjs/browser';

const Reveal = React.lazy(() => import("@/components/utils/Reveal"));
const OutlineButton = React.lazy(() => import("@/components/buttons/OutlineButton"));

export const Contact = () => {
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current!, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
        toast.success('Message sent!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setMessage('');
        form.current!.reset();
      }, (error) => {
        toast.error('Something went wrong', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <ToastContainer />
      <section className="section-wrapper" id="contact">
        <div className={styles.contactWrapper}>
          <Suspense fallback={<div>Loading...</div>}>
            <Reveal width="100%">
              <h4 className={styles.contactTitle}>Contact<span>.</span></h4>
            </Reveal>
            <Reveal width="100%">
              <div>
                <p className={styles.contactCopy}>
                Let's Collaborate 😎
                </p>
              </div>
            </Reveal>
            <Reveal width="100%">
              <form autoComplete="false" className={styles.contantForm} ref={form} onSubmit={sendEmail}>
                <div className={styles.inputBox}>
                  <input type="text" placeholder="Full Name" autoComplete="false" name="to_name" required />
                  <input type="email" placeholder="Email Address" autoComplete="false" name="from_name" required />
                </div>
                <textarea placeholder="Your Message"
                  autoComplete="false"
                  required
                  name="message"
                  value={message}
                  onChange={handleMessageChange}></textarea>
                  <br /><br />
                <Suspense fallback={<div>Loading Button...</div>}>
                  <OutlineButton>Send Message</OutlineButton>
                </Suspense>
              </form>
            </Reveal>
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default Contact;