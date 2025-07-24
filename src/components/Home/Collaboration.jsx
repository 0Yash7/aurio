import gsap from "gsap";
import {
  Customer1,
  Customer2,
  Customer3,
  Customer4,
  Customer5,
  Customer6,
} from "../../assets";
import styles from "./Collaboration.module.css";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function Collaboration() {
  const h3ref = useRef(null);
  const sliderref = useRef(null);

  useGSAP(() => {
    gsap.from(h3ref.current, {
      y: 100,
      scrollTrigger: {
        trigger: h3ref.current,
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
      },
    });

    gsap.from(sliderref.current, {
      x: 2000,
      delay: 0.3,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: sliderref.current,
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
      },
    });
  });

  const customers = [
    Customer1,
    Customer2,
    Customer3,
    Customer4,
    Customer5,
    Customer6,
  ];

  return (
    <div className={styles.Collaboration}>
      <div style={{ overflow: "hidden" }}>
        <h3 ref={h3ref}>Our Trusted Customers</h3>
      </div>

      <div ref={sliderref} className={styles.customers}>
        <div className={styles.logos}>
          {customers.map((customer, index) => (
            <img src={customer} alt="customer" key={index} />
          ))}
        </div>
        <div className={styles.logos}>
          {customers.map((customer, index) => (
            <img src={customer} alt="customer" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
