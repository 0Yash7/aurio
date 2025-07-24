import React, { useRef, useState } from "react";
import styles from "./Testimonials.module.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TestimonialsImage } from "../../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    image: TestimonialsImage,
    text: `We hired Aureo for our special event, and it was one of the best decisions we made. From the beautifully presented dishes to the incredible flavors, every detail was handled with care and professionalism.!`,
    name: "Emily Rose",
  },
  {
    image: TestimonialsImage,
    text: `Aureo's team was simply incredible. They transformed our event with their delicious cuisine and stunning presentation! Highly recommend.`,
    name: "Jason Clarke",
  },
  {
    image: TestimonialsImage,
    text: `Absolutely fantastic experience! Everything was spot on. Professional, friendly, and insanely good food.`,
    name: "Sophia Turner",
  },
  {
    image: TestimonialsImage,
    text: `One of the most organized catering services we've ever booked. Food was fire and service was even better.`,
    name: "Liam Walker",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const h2ref = useRef(null);
  const cardref = useRef(null);

  useGSAP(() => {
    h2ref.current &&
      gsap.from(h2ref.current, {
        y: 100,
        scrollTrigger: {
          trigger: h2ref.current,
          start: "top 70%",
          end: "top 60%",
          scrub: true,
        },
      });
    cardref.current &&
      gsap.from(cardref.current, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: cardref.current,
          start: "top 70%",
          end: "top 50%",
          scrub: true,
        },
      });
  });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const { image, text, name } = testimonials[currentIndex];

  return (
    <div className={styles.sliderContainer}>
      <div style={{ overflow: "hidden" }}>
        <h2 ref={h2ref} className={styles.heading}>
          What Our Customers Say’s
        </h2>
      </div>
      <div ref={cardref} className={styles.testimonialCard}>
        <button className={styles.arrowButton} onClick={handlePrev}>
          <ArrowLeft size={24} />
        </button>

        <div className={styles.content}>
          <img src={image} alt="Customer" className={styles.customerImage} />
          <div>
            <p className={styles.text}>‘’ {text}</p>
            <p className={styles.customerName}>{name}</p>
          </div>
        </div>

        <button className={styles.arrowButton} onClick={handleNext}>
          <ArrowRight size={24} />
        </button>
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
