import { Founder1, Founder1Bg, Founder2, Founder2Bg } from "../../assets";
import styles from "./Founders.module.css";

import React, { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Founders() {
  const h1ref = useRef(null);
  const cardsref = useRef([]);

  useGSAP(() => {
    gsap.from(h1ref.current, {
      y: 50,
      scrollTrigger: {
        trigger: h1ref.current,
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
      },
    });

    cardsref.current.forEach((card, index) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });
  });

  const founders = [
    {
      name: "Swarna Sharma",
      bio: "The driving force behind RFC, Swarna is an avid baker and chef. With a keen interest in food from across cuisines and a Master's degree in Financial Management, Swarna handles the Financial and Administration functions at RFC along with Product Research and Development. Swarna worked in the Finance function with Agilent Technologies before her love for food and the passion to create a brand that one day becomes a legacy pushed her towards starting her entrepreneurial journey in the Foods and Beverages Industry.",
      pfp: Founder1,
      bg: Founder1Bg,
    },
    {
      name: "Anvesh Sharma",
      bio: "Anvesh Sharma is the backbone of the company's operations and handles our manufacturing unit and client relationships. An MBA in Operations Management, Anvesh brings with him the rich experience of having handled operations while working at Nokia Siemens Network before he decided to become an entrepreneur and help his wife, Swarna with the growing business operations at Aureo Bakehouse.",
      pfp: Founder2,
      bg: Founder2Bg,
    },
  ];

  return (
    <div className={styles.founderContainer}>
      <div style={{ overflow: "hidden" }}>
        <h1 ref={h1ref}>Meet Our Founders</h1>
      </div>

      <div>
        {founders.map((founder, index) => (
          <div
            ref={(el) => (cardsref.current[index] = el)}
            style={{
              flexDirection: index % 2 === 1 ? "row-reverse" : "row",
              display: "flex",
            }}
            className={styles.founder}
            key={index}
          >
            <div className={styles.pfp}>
              <img className={styles.bg} src={founder.bg} alt="" />
              <img className={styles.img} src={founder.pfp} alt="" />
            </div>
            <div className={styles.about}>
              <h3>{founder.name}</h3>
              <p>{founder.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
