import React from "react";
import styles from "./RestaurantAndCatering.module.css";

export default function ValueRestaurantAndCatering() {
  return (
    <div className={styles.RnC}>
      <div className={styles.text}>
        <h1>Restaurant & Catering</h1>
      </div>
      <div className={styles.image}>
        <video
          autoPlay
          muted
          loop
          src="videourlhere"
        ></video>
      </div>
    </div>
  );
}
