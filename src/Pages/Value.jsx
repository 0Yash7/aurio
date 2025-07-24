import React from "react";
import ValueHero from "../components/Values/Hero";
import Values from "../components/Values/Values";
import ValueRestaurantAndCatering from "../components/Values/RestaurantAndCatering";
import Gallery from "../components/Values/Gallery";
import Clients from "../components/Values/Clients";

export default function Value() {
  return (
    <div>
      <ValueHero />
      <Values />
      <ValueRestaurantAndCatering />
      <Gallery />
      <Clients />
    </div>
  );
}
