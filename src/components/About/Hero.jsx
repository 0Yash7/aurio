import React from "react";
import styles from "./AboutHero.module.css";
import { Hat, MainImg } from "../../assets";

export default function AboutHero() {
  return (
    <div className={styles.AboutHero}>
      <div className={styles.text}>
        <h1>About Us</h1>
        <img className={styles.hat} src={Hat} alt="" />
      </div>
      <p>
        At Reinvigorate Food Concepts Pvt. Ltd, we are passionate about bringing
        gourmet flavours and exceptional experiences to travellers and locals
        alike. Founded in 2013, we have grown to become a trusted name in the
        food industry, specializing in convenient and delicious dining options
        along highways and artisanal baked goods.
      </p>
      <div className={styles.mainimg}>
        <img className={styles.MainImg} src={MainImg} alt="" />
      </div>
    </div>
  );
}
