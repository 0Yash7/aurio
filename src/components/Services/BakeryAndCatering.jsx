import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './BakeryAndCatering.module.css'
import BakeryTopLeft from '../../assets/images/services/BakeryTop1.jpg'
import BakeryTopRight1 from '../../assets/images/services/BakeryTop2.1.jpg'
import BakeryTopRight2 from '../../assets/images/services/BakeryTop2.2.jpg'
import BakeryBottom from '../../assets/images/services/BakeryBottom.jpg'

const data = [
  {
    title: "B2B Bakery and Confectionary",
    description: [
      "Experience the art of artisanal baking at Aureo Bakehouse, where every creation tells a story of passion and craftsmanship.",
      "Indulge in our signature collection of handcrafted breads, decadent pastries, and exquisite cakes, each made with premium ingredients and traditional techniques.",
      "Discover our premium bakery products at exclusive retail locations and top e-commerce platforms, bringing artisanal quality to your doorstep.",
      "Trusted by leading institutions including flight kitchens, multiplexes, and healthcare facilities for our consistent quality and exceptional taste."
    ],
    images: {
      top: {
        left: BakeryTopLeft,
        right: {
          one: BakeryTopRight1,
          two: BakeryTopRight2,
        },
      },
      bottom: BakeryBottom,
    },
  }
];

const BandC = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate('/values');
  };

  return (
    <>
      <div className={styles.BandC}>
        {
          data.map((item, index) => (
            <div key={index} style={{
              background: "#ffffff", 
              color: "#000000", 
              flexDirection: "row"
            }} className={styles.card}>
              <div className={styles.left}>
                <h1>{item.title}</h1>
                <div className={styles.images}>
                  <div className={styles.top}>
                    <img className={styles.topleft} src={item.images.top.left} alt="" />
                    <div className={styles.topright}>
                      <img src={item.images.top.right.one} alt="" />
                      <img src={item.images.top.right.two} alt="" />
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <img src={item.images.bottom} alt="" className={styles.mediaElement} />
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.description}>
                  {item.description.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
                <button onClick={handleKnowMore}>Know more</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default BandC