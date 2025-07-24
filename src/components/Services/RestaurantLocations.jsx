import React from 'react';
import styles from './RestaurantLocations.module.css';

const locations = [
  {
    name: "Aureo Food Room",
    address: "Trans Haryana Expressway - 51 Milestone, NH 152D",
    type: "Expressway Location"
  },
  {
    name: "Aureo Food Room",
    address: "Trans Haryana Expressway - 93 Milestone, NH 152D",
    type: "Expressway Location"
  },
  {
    name: "BYOB Central",
    address: "Greater Noida West",
    type: "City Location"
  }
];

const RestaurantLocations = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Locations</h2>
      <div className={styles.locationsGrid}>
        {locations.map((location, index) => (
          <div key={index} className={styles.locationCard}>
            <h3 className={styles.locationName}>{location.name}</h3>
            <p className={styles.locationAddress}>{location.address}</p>
            <span className={styles.locationType}>{location.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantLocations; 