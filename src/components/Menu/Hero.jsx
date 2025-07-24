import React from "react";
import styles from "./MenuHero.module.css";
import { MenuIcon, MenuImg } from "../../assets";

export default function MenuHero() {
  return (
    <div className={styles.MenuHero}>
      <div className={styles.text}>
        <h1>Menu</h1>
        <img className={styles.hat} src={MenuIcon} alt="" />
      </div>

      <div className={styles.mainimg}>
        <img className={styles.MainImg} src={MenuImg} alt="" />
      </div>
    </div>
  );
}
