import React, { useRef, useEffect } from "react";
import styles from "./WhyUs.module.css";
import ExperienceCards from "./WhyUsCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;

    gsap.fromTo(
      heading,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <div className={styles.whyus}>
      <h1 ref={headingRef}>Why to Choose Us</h1>
      <ExperienceCards />
    </div>
  );
};

export default WhyUs;
