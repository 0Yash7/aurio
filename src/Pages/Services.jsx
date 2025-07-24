import React from 'react'
import Hero from '../components/Services/Hero'
import BandC from '../components/Services/BakeryAndCatering'
import RestaurantAnd247 from '../components/Services/RestaurantAnd247'
import RestaurantLocations from '../components/Services/RestaurantLocations'

export default function Services() {
  return (
    <div>
      <Hero/>  
      <div id="b2b-bakery">
        <BandC />
      </div>
      <div id="outlets">
        <RestaurantAnd247 />
      </div>
      <div id="restaurants">
        <RestaurantLocations />
      </div>
    </div>
  )
}
