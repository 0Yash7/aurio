import React from "react";
import styles from "./Mission.module.css";
import { PastryBag, VectorImg } from "../../assets";

const credentials = [
  "MSME Registered - UDYAM-UP-28-0022315",
  "ISO 22000:2018 - Food Safety Management System",
  "ISO 9001:2015 - Quality Management System",
  "FOSTAC & FSSAI Registered",
  "Nominated for “India 5000 Best MSME Award”",
];

const managementTeam = [
  {
    name: "Sachin Gaur",
    role: "Investor & Consultant",
    details: ["B. Tech Computers", "Jamia Milia Islamia, Delhi"],
  },
  {
    name: "Daniel Jogal",
    role: "Consultant, Food Quality & Production",
    details: ["Ex- Britannia", "St. Mary’s College, Chennai"],
  },
  {
    name: "Trapta Rastogi",
    role: "Consultant, Legal Compliance | Food Technologist",
    details: ["Ex- Jubilant Foods", "LLB, MBA, MSc. & BSc. Food"],
  },
  {
    name: "Rameesh Kailasam",
    role: "Mentor",
    details: ["Alumni of ICAI", "Cost Management"],
  },
  {
    name: "CA Sunil Kumar Soni",
    role: "Financial Advisor, Chartered Accountant",
    details: ["Alumni of ICAI"],
  },
  {
    name: "Chef Praveen Mathur",
    role: "Consultant, Manpower & Product Development",
    details: ["Ex. Taj and Costa Coffee", "Food Craft Institute, Delhi"],
  },
];

export default function AboutCredentials() {
  return (
    <div className={styles.mission}>
      <img className={styles.pastry} src={PastryBag} alt="Pastry Bag" />

      <div className={styles.cardWrapper}>
        <div>
          <div style={{ fontFamily: "verdana " }} className={styles.card}>
            <div className={styles.text}>
              <img className={styles.vector} src={VectorImg} alt="" />
              <h3>Our Credentials</h3>
              <ul>
                {credentials.map((item, index) => (
                  <div>
                    <br />
                    <li key={index}>{item}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 20 }} className={styles.card}>
            <div className={styles.text}>
              <img className={styles.vector} src={VectorImg} alt="" />
              <h3>Why Us?</h3>
              <p>
                Prior experience of handling sports events like ISL 2018
                (Delhi), ARCC Moto Race, Ferrari Events, Honda Racing Events,
                DPL 2024, and ECL 2024.
              </p>
              <p>
                With over 9 years of experience in the airline industry, we have
                developed extensive expertise in ensuring product quality and
                delivery standards. This experience has also enabled us to
                uphold the highest levels of hygiene and raw material quality.
              </p>
              <p>
                With "Aureo", we aim to cater the best dining experience with
                our world cuisine menu. We work on making home-style, simple,
                and authentic preparations that are always appreciated by
                international and national players.
              </p>
              <p>
                Our strong backend, experienced team, and in-house production
                capabilities, combined with our deep understanding of food, make
                us well-qualified to undertake prestigious sports events.
              </p>
            </div>
          </div>
        </div>

        <div style={{ fontFamily: "verdana " }} className={styles.card}>
          <div className={styles.text}>
            <img className={styles.vector} src={VectorImg} alt="" />
            <h3>Management Team</h3>
            {managementTeam.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <br />
                <strong>{member.name}</strong> – {member.role}
                <ul>
                  {member.details.map((detail, i) => (
                    <div>
                      <br />
                      <li key={i}>{detail} </li>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
