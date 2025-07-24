import React from "react";
import styles from "./EventCard.module.css";

const EventCard = ({ event }) => {
  return (
    <div className={styles.eventCard}>
      <div className={styles.imageContainer}>
        <img
          src={event.image}
          alt={event.title}
          className={styles.eventImage}
          loading="lazy"
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.iconContainer}>{event.icon}</div>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.description}>{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
