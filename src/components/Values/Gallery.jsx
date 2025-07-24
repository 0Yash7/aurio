import React from "react";
import styles from "./Gallery.module.css";
import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
} from "../../assets";

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <h1> Gallery </h1>
      <div className={styles.images}>
        <div className={styles.one}>
          <img style={{ width: "50vw" }} src={Gallery1} alt="" />
          <img style={{ width: "35vw" }} src={Gallery2} alt="" />
        </div>
        <div className={styles.two}>
          <img src={Gallery3} alt="" />
          <img src={Gallery4} alt="" />
          <img src={Gallery5} alt="" />
        </div>
        <div className={styles.one}>
          <img style={{ width: "50vw" }} src={Gallery6} alt="" />
          <img style={{ width: "35vw" }} src={Gallery7} alt="" />
        </div>
      </div>
    </div>
  );
}
