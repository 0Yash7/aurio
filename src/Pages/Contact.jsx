// src/pages/Contact.jsx
import React from "react";
import ContactUs from "../components/Home/Contact"; // Ensure this path is correct
import ContactHero from "../components/Contact/Hero";
import ContactBody from "../components/Contact/Body";
import ContactMap from "../components/Contact/Map";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactBody />
      <ContactMap />
    </>
  );
}
