import { useRef } from "react";
import styles from "./ExperienceCards.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BakeryTop1 from "../../assets/images/services/BakeryTop1.jpg";
import CateringTop1 from "../../assets/images/services/CateringTop1.png";
import RestaurantLeft from "../../assets/images/services/RestaurantLeft.png";

gsap.registerPlugin(ScrollTrigger);
const cardData = [
  {
    title: "Smooth Operations on Expressways",
    description:
      "Serving thousands daily without delays. We’ve handled food operations on some of India’s busiest expressways—delivering fast, reliable service with happy customers and efficient systems.",
    image: RestaurantLeft,
    icon: "🛣️",
  },
  {
    title: "9+ Years of Trusted Airline Experience",
    description:
      "Bringing airline-level quality to every plate. With a strong background in airline catering, we understand food safety, quality, and timely delivery. Our in-house team and production setup ensure consistency, even at scale.",
    image: BakeryTop1,
    icon: "✈️",
  },
  {
    title: "Event & Institutional Catering Experts",
    description:
      "From universities to racing tracks—we’ve done it all. We’ve successfully catered for schools, colleges, and large events like ISL 2018, Honda Racing, DPL 2024, and more. Our team knows how to serve large crowds with ease.",
    image: CateringTop1,
    icon: "🎉",
  },
  {
    title: "Powered by Aureo’s Food Ventures",
    description:
      "Backed by successful restaurants and food brands. Our group runs multi-cuisine restaurants like Aureo Food Room and BYOB Central, known for quality, variety, and customer satisfaction—on dine-in and delivery.",
    image: RestaurantLeft,
    icon: "🍴",
  },
];

function ExperienceCards() {
  const cardRefs = useRef([]);

  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          end: "top 50%",
          scrub: true,
        },
        x: index === 0 ? 500 : index === 1 ? -10 : -480,
        y: index === 0 ? -20 : index === 1 ? -10 : -40,
        rotate: index === 0 ? 30 : 0,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className={styles.ExpCard}>
      {cardData.map((card, index) => (
        <div
          ref={(el) => (cardRefs.current[index] = el)}
          className={styles.card}
          key={index}
        >
          <div className={styles.iconContainer}>
            <span className={styles.icon}>{card.icon}</span>
          </div>
          <img src={card.image} alt={card.title} className={styles.image} />
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.description}>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceCards;
