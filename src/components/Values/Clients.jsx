import React from "react";
import styles from "./Clients.module.css";
import { Jhonny, Rajesh, Rishabh, Sachin } from "../../assets";

const clientdata = [
  {
    name: "Rishabh Gaur",
    description:
      "Dining at Aureo is always a five-star experience. The ambiance is cozy yet elegant, the staff is incredibly attentive, and the food—absolutely unforgettable. ",
    img: Rishabh,
  },
  {
    name: "Jhonny Jogal",
    description:
      "From the first bite to the last sip, Aureo delivers excellence. Every dish is beautifully presented and bursting with flavor. Truly a hidden gem",
    img: Jhonny,
  },
  {
    name: "Rajesh Sekhawat",
    description:
      "I've been to many high-end restaurants, but Aureo stands out for its consistent quality and warmth. Their seasonal specials are always a pleasant surprise",
    img: Rajesh,
  },
  {
    name: "Sachin Kumar",
    description:
      "Aureo catered our wedding, and we couldn't be more grateful. Not only was the food phenomenal, but the service was seamless and professional. Guests are still talking about the dessert bar. ",
    img: Sachin,
  },
];
export default function Clients() {
  return (
    <div className={styles.clients}>
      <h1>Client’s We Have Served</h1>
      <div className={styles.cards}>
        {clientdata.map((item, index) => (
          <div className={styles.card}>
            <img src={item.img} alt="" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
