import React from "react";
import styles from "./Hero.module.css";
import Values from "../../assets/images/values/Values.webp";

export default function ValueHero() {
  return (
    <div className={styles.valuehero}>
      <div className={styles.text}>
        {" "}
        <h1>Discover Culinary with Aureo</h1>
      </div>
      <div className={styles.img}>
        <img src={Values} alt="Aureo Culinary Experience" />
      </div>
    </div>
  );
}
