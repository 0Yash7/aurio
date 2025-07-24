import React from "react";
import styles from "./Testimonials.module.css";
import { Quote } from "lucide-react";

const Testimonials = ({ testimonials }) => {
  return (
    <div className={styles.testimonialContainer}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className={styles.testimonialCard}>
          <Quote className={styles.quoteIcon} size={32} />
          <p className={styles.testimonialText}>{testimonial.text}</p>
          <p className={styles.author}>{testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
