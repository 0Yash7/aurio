import React, { useRef, useLayoutEffect } from "react";
import {
  Dish1,
  Dish2,
  Dish3,
  Dish4,
  Dish5,
  Dish6,
  Dish7,
  Dish8,
  InnovationBg,
} from "../../assets";
import styles from "./InnovationSection.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dishData = [
  { src: Dish1, className: "Dish1" },
  {
    group: [
      { src: Dish2, className: "Dish2" },
      { src: Dish3, className: "Dish3" },
    ],
  },
  { src: Dish4, className: "Dish4" },
  { src: Dish5, className: "Dish5" },
  {
    group: [
      { src: Dish6, className: "Dish6" },
      { src: Dish7, className: "Dish7" },
    ],
  },
  { src: Dish8, className: "Dish8" },
];

const InnovationSection = () => {
  const h2ref = useRef(null);
  const pref = useRef(null);
  const imageRefs = useRef([]);

  // Clear previous refs on re-render (simplified)
  imageRefs.current = [];

  // GSAP animations using useLayoutEffect to ensure they run after the DOM is ready
  useLayoutEffect(() => {
    gsap.from(h2ref.current, {
      y: 50,
      scrollTrigger: {
        trigger: h2ref.current,
        start: "top 70%",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.from(pref.current, {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: pref.current,
        start: "top 70%",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.from(imageRefs.current, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: imageRefs.current[0], // first image
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className={styles.Innovation}>
      <img className={styles.innovationBg} src={InnovationBg} alt="" />
      <div className={styles.innovationSection}>
        <div className={styles.innovationHeader}>
          <div style={{ overflow: "hidden" }}>
            <h2 ref={h2ref}>Bakery and Confectionary Innovations</h2>
          </div>
          <p ref={pref}>
            We are specialists in doing authentic multi-cuisine food with focus
            on quality & customer satisfaction. We understand the taste palette
            of the customer and our expert team certainly knows how to use the
            best combination of spices to bring out the best flavors in food.
          </p>

          <div className={styles.dishes}>
            {dishData.map((item, index) => {
              if (item.group) {
                return (
                  <div key={index} className={styles.dishGroup}>
                    {item.group.map((subItem, subIndex) => (
                      <img
                        key={subIndex}
                        ref={(el) => imageRefs.current.push(el)}
                        className={styles[subItem.className]}
                        src={subItem.src}
                        alt=""
                      />
                    ))}
                  </div>
                );
              } else {
                return (
                  <img
                    key={index}
                    ref={(el) => imageRefs.current.push(el)}
                    className={styles[item.className]}
                    src={item.src}
                    alt=""
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationSection;
