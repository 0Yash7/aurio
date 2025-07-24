import React, { lazy, Suspense, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Left247 from '../../assets/images/services/247Left.png'
import Right247 from '../../assets/images/services/247Right.png'
import LeftRestaurant from '../../assets/images/services/RestaurantLeft.png'
import RightRestaurant from '../../assets/images/services/RestaurantRight.png'
import styles from './RestaurantAnd247.module.css'

const data = [
  {
    title: 'Twenty Four Seven (24*7)',
    description: [
      "Welcome to Aureo's round-the-clock culinary haven, where exceptional taste meets unparalleled convenience.",
      "Experience the perfect blend of freshly baked delights and gourmet cuisine, available 24/7 to satisfy your cravings at any hour.",
      "From sunrise breakfasts to midnight snacks, our dedicated team ensures consistent quality and warm service throughout the day.",
      "Your trusted destination for premium bakery products and delicious meals, making every moment special with our commitment to excellence."
    ],
    left: Left247,
    right: Right247
  },
  {
    title: 'Restaurant',
    description: [
      "Step into a world of culinary excellence at Aureo, where every dish is a masterpiece of authentic flavors and innovative presentation.",
      "Our expert chefs craft each creation using the finest ingredients, combining traditional techniques with contemporary flair.",
      "Immerse yourself in our thoughtfully designed ambiance, complemented by attentive service that makes every visit memorable.",
      "Whether it's an intimate dinner, family celebration, or corporate gathering, we create perfect moments through exceptional dining experiences."
    ],
    left: LeftRestaurant,
    right: RightRestaurant
  },
]

// Loading placeholder component
const LoadingPlaceholder = () => (
  <div className={styles.loadingPlaceholder}>
    <div className={styles.loadingSpinner}></div>
  </div>
);

// Optimized Image component
const OptimizedImage = ({ src, alt, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  if (error) {
    return <div className={styles.errorPlaceholder}>Failed to load image</div>;
  }

  return (
    <div className={`${styles.imageContainer} ${isLoaded ? styles.loaded : ''}`}>
      {!isLoaded && <LoadingPlaceholder />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width="40vw"
        height="400"
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default function RestaurantAnd247() {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate('/values');
  };

  return (
    <div className={styles.RestaurantAnd247}>
      {
        data.map((item, index) => (
          <div 
            style={{
              background: index === 0 ? "#ffffff" : "#071A3B", 
              color: index === 0 ? "#000" : "#ffffff"
            }} 
            className={styles.card} 
            key={index}
          >
            <h1>{item.title}</h1>
            <div className={styles.images}>
              <OptimizedImage 
                src={item.left} 
                alt={`${item.title} left image`}
                title={item.title}
              />
              <OptimizedImage 
                src={item.right} 
                alt={`${item.title} right image`}
                title={item.title}
              />
            </div>
            <div className={styles.text}>
              {item.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
            <button onClick={handleKnowMore}>Know more</button>
          </div>
        ))
      }
    </div>
  )
}
