import React from "react";// or wherever it is
import Hero from "../components/Home/Hero";
import HeroSlider from "../components/Home/HeroSlider";
import WhyUs from "../components/Home/WhyUs";
import OurVerticals from "../components/Home/OurVerticals";
import Founders from "../components/Home/Founders";
import InnovationSection from "../components/Home/Innovation";
import Collaboration from "../components/Home/Collaboration";
import ContactUs from "../components/Home/Contact.jsx";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroSlider />
      <WhyUs />
      <OurVerticals />
      <Founders />
      <InnovationSection />
      <Collaboration />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
