import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import { Bread1, Cookies } from "../../assets";

import gsap from "gsap";

const Hero = () => {
  const h1ref = useRef(null);
  const pref = useRef(null);
  const buttonref = useRef(null);
  const cookieref = useRef(null);
  const breadref = useRef(null);
  const sliderref = useRef(null);

  useEffect(() => {
    gsap.from(h1ref.current, { y: 50, duration: 0.75 });
    gsap.from(pref.current, { y: 50, opacity: 0, duration: 0.75, delay: 0.3 });
    gsap.from(buttonref.current, {
      y: 50,
      opacity: 0,
      duration: 0.75,
      delay: 0.4,
    });
    gsap.from(cookieref.current, {
      y: 50,
      opacity: 0,
      duration: 0.75,
      delay: 0.5,
    });
    gsap.from(breadref.current, {
      scale: 0,
      opacity: 0,
      duration: 0.75,
      delay: 0.5,
    });
  });

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div>
        <img
          ref={cookieref}
          src={Cookies}
          alt="Left Decoration"
          className={styles.leftImage}
        />
        <div className={styles.content}>
          <div style={{ overflow: "hidden" }}>
            <h1 ref={h1ref}>Baked to Satisfy, Catered to Delight</h1>
          </div>
          <p ref={pref} className={styles.text}>
            Small bites or full spreads — we bring the oven's warmth and a
            host's heart to every table
          </p>
          <button
            ref={buttonref}
            className={styles.button}
            onClick={scrollToContact}
          >
            Connect Now
          </button>
        </div>
        <img
          ref={breadref}
          src={Bread1}
          alt="Right Decoration"
          className={styles.rightImage}
        />
      </div>
    </section>
  );
};

export default Hero;
