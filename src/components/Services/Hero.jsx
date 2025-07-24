import React from 'react'
import styles from './Hero.module.css'
import { Hero1, Hero2, Hero3, Vessel } from '../../assets'

export default function Hero() {
  return (
    <div className={styles.servicehero}>
        <div className={styles.text}>
            <h2>Services</h2>
            <img src={Vessel} alt="" />
        </div>
        <p>Small bites or full spreads — we bring the oven’s warmth and a host’s heart to every table</p>
        <div className={styles.images}>
  <img className={styles.image1} src={Hero1} alt="Service 1" />
  <img className={styles.image2} src={Hero2} alt="Service 2" />
  <img className={styles.image3} src={Hero3} alt="Service 3" />
</div>

        
      
    </div>
  )
}
