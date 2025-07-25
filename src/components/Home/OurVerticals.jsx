import { useRef, useState, useEffect } from "react";
import axios from "axios";
import styles from "./OurVerticals.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function OurVerticals() {
  const h11ref = useRef(null);
  const h12ref = useRef(null);
  const h13ref = useRef(null);
  const cateringref = useRef(null);
  const bakeryref = useRef(null);
  const restaurantref = useRef(null);

  const [CateringImages, setCateringImages] = useState([]);
  const [BakeryImages, setBakeryImages] = useState([]);
  const [RestaurantImages, setRestaurantImages] = useState([]);
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from(h11ref.current, {
      y: 50,
      scrollTrigger: {
        trigger: h11ref.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    gsap.from(h12ref.current, {
      y: 50,
      scrollTrigger: {
        trigger: h12ref.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    gsap.from(h13ref.current, {
      y: 50,
      scrollTrigger: {
        trigger: h13ref.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    gsap.from(cateringref.current, {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        trigger: cateringref.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    gsap.from(bakeryref.current, {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        trigger: bakeryref.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    gsap.from(restaurantref.current, {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        trigger: restaurantref.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });
  });

  const [image1, setImage1] = useState(0);
  const [image2, setImage2] = useState(0);
  const [image3, setImage3] = useState(0);

 useEffect(() => {
  const fetchImages = async () => {
    try {
      const [cateringRes, bakeryRes, restaurantRes] = await Promise.all([
        axios.get("http://localhost:5000/api/upload-photo?category=catering"),
        axios.get("http://localhost:5000/api/upload-photo?category=bakery"),
        axios.get("http://localhost:5000/api/upload-photo?category=restaurant"),
      ]);

      setCateringImages(cateringRes.data.photos || []);
      setBakeryImages(bakeryRes.data.photos || []);
      setRestaurantImages(restaurantRes.data.photos || []);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  fetchImages();
}, []);

  return (
    <>
      <div className={styles.verticals}>
        <h3>Our Verticals</h3>

        {/* Catering */}
        <div style={{ overflow: "hidden" }}>
          <h2 ref={h11ref}>Catering</h2>
        </div>
        <div ref={cateringref} className={styles.one}>
          <img className={styles.mainImg} src={CateringImages[image1]?.image_url} alt="" />
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                We are specialists in doing authentic multi-cuisine food with
                focus on quality & customer satisfaction. We understand the
                taste palette of the customer and our expert team certainly
                knows how to use the best combination of spices to bring out the
                best flavour in food.
              </p>
              <button onClick={() => navigate("/values#catering-menu-section")}>Know More</button>
            </div>
            <div className={styles.images}>
              <div>
                {CateringImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.image_url}
                    alt="Catering"
                    onClick={() => setImage1(idx)}
                    style={{
                      border: idx === image1 ? "3px solid #c08a64" : "",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bakery */}
        <div style={{ overflow: "hidden" }}>
          <h2 ref={h12ref} style={{ marginTop: "100px" }}>
            B2B Bakery
          </h2>
        </div>
        <p className={styles.mobileContent}>
          Our brand Aureo Bakehouse offers a wide variety of high quality bakery
          products including breads, buns, cakes, cookies, muffins and more
          which are available across premium retail stores and e-commerce
          platforms. We also cater to institutions like flight kitchens,
          multiplexes and hospitals.
        </p>
        <div ref={bakeryref} className={styles.one}>
          <img className={styles.mainImg} src={BakeryImages[image2]?.image_url} alt="" />
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                Our brand Aureo Bakehouse offers a wide variety of high quality bakery
                products including breads, buns, cakes, cookies, muffins and more
                which are available across premium retail stores and e-commerce
                platforms. We also cater to institutions like flight kitchens,
                multiplexes and hospitals.
              </p>
              <button onClick={() => navigate("/services#b2b-bakery")}>Know More</button>
            </div>
            <div className={styles.images}>
              <div>
                {BakeryImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.image_url}
                    alt="Bakery"
                    onClick={() => setImage2(idx)}
                    style={{
                      border: idx === image2 ? "3px solid #c08a64" : "",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant */}
        <div style={{ overflow: "hidden" }}>
          <h2 ref={h13ref} style={{ marginTop: "100px" }}>
            Restaurant
          </h2>
        </div>
        <p className={styles.mobileContent}>
          Experience culinary excellence at Aureo Food Room & BYOB Central. Our
          restaurants offer a diverse menu featuring authentic multi-cuisine
          dishes, crafted with premium ingredients and served in an elegant
          ambiance.
        </p>
        <div ref={restaurantref} className={styles.one}>
          <img className={styles.mainImg} src={RestaurantImages[image3]?.image_url} alt="" />
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                Experience culinary excellence at Aureo Food Room & BYOB
                Central. Our restaurants offer a diverse menu featuring
                authentic multi-cuisine dishes, crafted with premium ingredients
                and served in an elegant ambiance. From casual dining to special
                occasions, we create memorable dining experiences.
              </p>
              <button onClick={() => navigate("/values#catering-menu-section")}>Explore Our Menu</button>
            </div>
            <div className={styles.images}>
              <div>
                {RestaurantImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.image_url}
                    alt="Restaurant"
                    onClick={() => setImage3(idx)}
                    style={{
                      border: idx === image3 ? "3px solid #c08a64" : "",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurVerticals;

