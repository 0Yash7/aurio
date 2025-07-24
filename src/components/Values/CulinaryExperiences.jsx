import React, { useEffect, useRef } from "react";
import {
  Building2,
  PartyPopper,
  Tent,
  ChefHat,
  Award,
  Users,
  Clock,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./CulinaryExperiences.module.css";
import EventCard from "./EventCard";
import Testimonials from "./Testimonials";
import ImageGallery from "./ImageGalary";
import AureoMenu from "./AureoMenu";

// Direct image imports
import Food1 from "../../assets/images/values/Food1.jpg";
import Food2 from "../../assets/images/values/Food2.jpg";
import Food3 from "../../assets/images/values/Food3.jpg";
import Food4 from "../../assets/images/values/Food4.jpeg";
import Food5 from "../../assets/images/values/Food5.jpeg";
import Food6 from "../../assets/images/values/Food6.jpeg";
import Food7 from "../../assets/images/values/Food7.jpeg";
import Rest1 from "../../assets/images/values/Rest1.jpg";
import Rest2 from "../../assets/images/values/Rest2.jpg";
import Vegies from "../../assets/images/values/Vegies.jpeg";

const events = [
  {
    id: 1,
    title: "Corporate Events & Conferences",
    description:
      "Professional catering solutions for business meetings, conferences, and corporate gatherings. From executive lunches to large-scale corporate events, we ensure impeccable service and premium quality.",
    icon: <Building2 size={24} />,
    image: Rest2,
  },
  {
    id: 2,
    title: "Festive Gatherings",
    description:
      "Celebrate special occasions with our curated menus. From Diwali to Christmas, we bring authentic flavors and festive cheer to your celebrations with our special seasonal menus.",
    icon: <PartyPopper size={24} />,
    image: Food6,
  },
  {
    id: 3,
    title: "Outdoor Events",
    description:
      "Create memorable experiences in the open air with our specialized outdoor catering services. Perfect for garden parties, beach events, and outdoor weddings with complete setup and service.",
    icon: <Tent size={24} />,
    image: Vegies,
  },
  {
    id: 4,
    title: "Social Celebrations",
    description:
      "From intimate gatherings to grand parties, we bring exceptional flavors to every social occasion. Weddings, anniversaries, birthdays, and more - each event gets our personal touch.",
    icon: <ChefHat size={24} />,
    image: Food7,
  },
];

const galleryImages = [
  {
    url: Vegies,
    caption: "Rustic Outdoor Wedding with Farm-to-Table Menu",
  },
  {
    url: Food5,
    caption: "Corporate Brunch for 200+ Guests with Live Cooking Stations",
  },
  {
    url: Food6,
    caption: "Diwali House Party with Traditional Indian Delicacies",
  },
  {
    url: Rest1,
    caption: "Summer Garden Party with Mediterranean Spread",
  },
  {
    url: Rest2,
    caption: "Executive Lunch Meeting with International Cuisine",
  },
  {
    url: Food7,
    caption: "Anniversary Celebration with Custom Menu Design",
  },
];

const testimonials = [
  {
    id: 1,
    text: "From start to finish, the team was professional, warm, and detail-oriented. Our wedding guests still talk about the food! The attention to dietary requirements and personal touches made it special.",
    author: "Rhea & Aman",
  },
  {
    id: 2,
    text: "They handled our corporate annual meet seamlessly. Punctual, tasteful, and highly recommended. The variety of cuisines and presentation was outstanding.",
    author: "Vikram, HR Head, Fintronics",
  },
  {
    id: 3,
    text: "Not just catering — they truly understand hospitality. The best team we've worked with for our events. Their flexibility and creativity in menu planning is remarkable.",
    author: "Shweta, Event Manager",
  },
];

const features = [
  {
    icon: <Award size={24} />,
    title: "Excellence in Service",
    description:
      "Award-winning culinary team with years of experience in creating memorable dining experiences.",
  },
  {
    icon: <Users size={24} />,
    title: "Expert Team",
    description:
      "Professional chefs and service staff trained to deliver exceptional quality and attention to detail.",
  },
  {
    icon: <Clock size={24} />,
    title: "Timely Delivery",
    description:
      "Punctual service and efficient execution, ensuring your event runs smoothly from start to finish.",
  },
  {
    icon: <Heart size={24} />,
    title: "Passion for Quality",
    description:
      "Using only the finest ingredients and maintaining the highest standards in food preparation.",
  },
];

const CulinaryExperiences = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);

    const animatedItems = document.querySelectorAll(`.${styles.animateItem}`);
    animatedItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);

      animatedItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const menuItems = [
    "Quick Bites - Sandwiches/Burgers",
    "Bakery Items - Puffs & Muffin",
    "Chips & Namkeen",
    "Biscuits & Confectionery",
    "Hot & Cold Beverages",
    "Personal Essentials",
  ];

  const menuItems2 = [
    "Chinese Starters Veg/Non Veg",
    "Tandoor Starters Veg/Non Veg",
    "Indian & Pan-Asian Main Course",
    "Pastas & Quick Bites",
    "Thails & Combos",
    "Desserts & Beverages",
  ];

  const handlePlanEvent = () => {
    navigate("/contact");
    // Scroll to top after navigation
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className={styles.culinaryExperiences}>
      <div className={styles.contentContainer}>
        <div className={`${styles.eventsSection} ${styles.animateItem}`}>
          <h3 className={styles.sectionTitle}>Events We Cater</h3>
          <p className={styles.sectionDescription}>
            Whether you're planning a lavish celebration, a high-powered
            corporate event, or a festive gathering— we have the menu, manpower,
            and magic to match the mood. Our comprehensive services include
            custom menu planning, professional staff, complete setup, and
            cleanup, ensuring a seamless experience from start to finish.
          </p>
          <div className={styles.eventsContainer}>
            {events.map((event, index) => (
              <div
                className={`${styles.animateItem} ${styles.eventCardWrapper}`}
                key={event.id}
                style={{ animationDelay: `${index * 0.15}s`, marginTop: 40 }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        <AureoMenu title="Self Service" menuItems={menuItems} id="catering-menu-section" />
        <div
          style={{ marginTop: "170px" }}
          className={`${styles.gallerySection} ${styles.animateItem}`}
        >
          <h3 className={styles.sectionTitle}>
            A Glimpse Into Our Culinary Showcase
          </h3>
          <p className={styles.sectionDescription}>
            Take a look at some of the events we've recently catered. Each setup
            tells a story — of taste, ambiance, and attention to detail. From
            elegant corporate events to vibrant social gatherings, our portfolio
            showcases our versatility and commitment to excellence.
          </p>
          <ImageGallery images={galleryImages} />
        </div>
        <div
          style={{ marginTop: "170px" }}
          className={`${styles.testimonialSection} ${styles.animateItem}`}
        >
          <h3 className={styles.sectionTitle}>What Our Clients Say</h3>
          <p className={styles.sectionDescription}>
            Our work speaks for itself, but our clients say it best. Here's what
            they have to say about the experience we delivered — both on the
            plate and beyond. Their satisfaction is our greatest reward.
          </p>
          <Testimonials testimonials={testimonials} />
        </div>

        <AureoMenu title="Ala-Carte" menuItems={menuItems2} />
        <div
          style={{ marginTop: "170px" }}
          className={`${styles.aboutSection} ${styles.animateItem}`}
        >
          <h3 className={styles.sectionTitle}>More Than Just Catering</h3>
          <p className={styles.sectionDescription}>
            We are a team of passionate chefs, event experts, and service
            professionals who believe every event deserves excellence. With over
            15 years of experience, we've catered hundreds of events with one
            simple goal — to leave a lasting taste of quality. Our commitment to
            using fresh, premium ingredients and our attention to detail sets us
            apart in creating memorable culinary experiences.
          </p>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryExperiences;
