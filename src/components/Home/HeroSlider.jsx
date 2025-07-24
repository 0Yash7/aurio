import React, { useRef, useEffect } from "react";
import {
  BakeryIcon,
  CateringIcon,
  DinnerIcon,
  HeroBakery,
  HeroCatering,
  HeroDinner,
  HeroStore,
  StoreIcon,
} from "../../assets";
import styles from "./HeroSlider.module.css";
import gsap from "gsap";

function HeroSlider() {
  const sliderref = useRef(null);

  useEffect(() => {
    gsap.from(sliderref.current, { x: 2000, delay: 0.3, ease: "back.out" });
  });
  const data = [
    {
      id: 1,
      image: HeroCatering,
      icon: CateringIcon,
      title: "Catering",
      description: "From events to institutions — we cater it all. Know more →",
    },
    {
      id: 2,
      image: HeroBakery,
      icon: BakeryIcon,
      title: "B2B Bakery",
      description:
        "Supplying quality baked & confectionery products. Know more →",
    },
    {
      id: 3,
      image: HeroDinner,
      icon: DinnerIcon,
      title: "Restaurant",
      description: "Explore Aureo Food Room & BYOB Central. Know more →",
    },
    {
      id: 4,
      image: HeroStore,
      icon: StoreIcon,
      title: "24x7 Store",
      description: "Convenience delivered round-the-clock. Know more →",
    },
  ];

  return (
    <>
      <div ref={sliderref} className={styles.sliderContainer}>
        <div className={styles.heroSlider}>
          <div className={styles.container}>
            {data.map((item) => (
              <div>
                <img className={styles.image} src={item.image} alt="" />
                <div className={styles.content}>
                  <img src={item.icon} className={styles.icon} alt="" />
                  <h2 className={styles.title}> {item.title}</h2>
                  <p className={styles.description}> {item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.container}>
            {data.map((item) => (
              <div key={item.id}>
                {" "}
                {/* ADD KEY */}
                <img className={styles.image} src={item.image} alt="" />
                <div className={styles.content}>
                  <img src={item.icon} className={styles.icon} alt="" />
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
