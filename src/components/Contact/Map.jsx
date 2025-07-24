import React from "react";
import styles from "./Map.module.css";

export default function ContactMap() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        title="Aureo Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7579109657077!2d77.4672888749525!3d28.516930489321826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce90b7142c587%3A0x6fc0aae0796b0a1e!2sAureo%20Bake%20House!5e0!3m2!1sen!2sin!4v1746083966672!5m2!1sen!2sin"
        className={styles.map}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
