import React from "react";
import styles from "./ContactHero.module.css";
import { Four, One, Three, Two } from "../../assets";
export default function ContactHero() {
  return (
    <div className={styles.ContactHero}>
      <img className={styles.one} src={One} alt="" />
      <img className={styles.two} src={Two} alt="" />
      <img className={styles.three} src={Three} alt="" />
      <img className={styles.four} src={Four} alt="" />
      <div className={styles.text}>
        <h1>Contact Us</h1>
        <p>We're here to help—get in touch with us today</p>
      </div>
    </div>
  );
}
