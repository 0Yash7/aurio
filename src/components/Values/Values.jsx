import React from "react";
import styles from "./Values.module.css";
import { HotFood, Safety, Salad, Security } from "../../assets";

const valuesdata = [
  {
    title: "Excellence",
    description: "Unforgettable Culinary Experience",
    img: Salad,
  },
  {
    title: "Innovation",
    description: "Dynamic, Fresh, Exciting Flavours",
    img: HotFood,
  },
  {
    title: "Quality",
    description: "Top Notch Quality Food to Enjoy",
    img: Security,
  },
  {
    title: "Sustainablity",
    description: "Eco Friendly Dining Practices",
    img: Safety,
  },
];

export default function Values() {
  return (
    <div className={styles.values}>
      <h1>Our Values</h1>
      <div className={styles.cards}>
        {valuesdata.map((item, index) => (
          <div className={styles.card}>
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
