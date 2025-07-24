import React from "react";
import styles from "./TimelineComponent.module.css";
import { Share } from "lucide-react";
import { Arrow } from "../../assets";
export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.one}>
        <div className={styles.child}>
          <Share />
          <p>
            Started Business Operations as Quick Pick Enterprises with Jaypee
            Group on Yamuna Expressway (one of the most elite highways in the
            country). Initially a 9 months agreement duly extended to 24 months
            basis our operational effectiveness in handling a daily footfall of
            3500 customers.
          </p>
        </div>
        <div className={styles.child}>
          <h2>2014</h2>
        </div>
        <div className={styles.child}>
          <Share />
          <p>
            Commencement of Industrial Bakery manufacturing set up. Ramped up
            operations by successfully leveraging supply opportunities with
            flight kitchens, corporates and institutional buyers.
          </p>
        </div>
        <div className={styles.child}>
          <h2>2022</h2>
        </div>
      </div>
      <div className={styles.two}>
        <div className={styles.child}>
          {/* <img src={Arrow} alt="" /> */}
          <div className={styles.breadcontainer}>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.breadcrumb}>breadcrumb</div>
          </div>
        </div>
        <div className={styles.child}>
          {/* <img src={Arrow} alt="" /> */}
          <div className={styles.breadcontainer}>
            <div
              style={{ transform: "translate(2700%, 50%)" }}
              className={styles.line}
            ></div>
            <div className={styles.circle}></div>
            <div className={styles.breadcrumb}>breadcrumb</div>
          </div>
        </div>
        <div className={styles.child}>
          {/* <img src={Arrow} alt="" /> */}
          <div className={styles.breadcontainer}>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.breadcrumb}>breadcrumb</div>
          </div>
        </div>
        <div className={styles.child}>
          {/* <img src={Arrow} alt="" /> */}
          <div className={styles.breadcontainer}>
            <div
              style={{ transform: "translate(2700%, 50%)" }}
              className={styles.line}
            ></div>
            <div className={styles.circle}></div>
            <div className={styles.breadcrumb}>breadcrumb</div>
          </div>
        </div>
      </div>
      <div className={styles.one}>
        <div className={styles.child}>
          <h2>2013</h2>
        </div>
        <div className={styles.child}>
          <Share />
          <p>
            Started our own bakery and restaurant serving world cuisine under
            the brand name “AUREO” in NOIDA. The exposure and experience of
            running this venture encouraged us to explore other opportunities in
            the F&B industry.
          </p>
        </div>
        <div className={styles.child}>
          <h2>2015</h2>
        </div>
        <div className={styles.child}>
          <share />
          <p>
            Among the first ones to launch food outlets at Trans Haryana
            Expressway, 51st Milestone and 93rd Milestone.
          </p>
        </div>
      </div>
    </div>
  );
}
