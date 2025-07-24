import React from "react";
import styles from "./Footer.module.css"; // modular CSS
import { CommonLogo } from "../assets";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogo}>
            <img src={CommonLogo} alt="Logo" />
            <p>
              Freshly baked delights made with love and tradition,
              <br />
              Baking happiness, one treat at a time.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <h4>COMPANY</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h4>POLICIES</h4>
            <ul>
              <li>
                <a href="/return-policy">Return Policy</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/payment-policy">Payment Policy</a>
              </li>
              <li>
                <a href="/declaration">Declaration</a>
              </li>
              <li>
                <a href="/terms">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className={styles.contactInfo}>
            <h4>CONTACT US</h4>
            <ul>
              <li>
                <MapPin size={16} />
                <span>123 Bakery Street, Sweet City, SC 12345</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail size={16} />
                <span>contact@aureobakery.com</span>
              </li>
            </ul>
          </div>
          <div className={styles.newsletter}>
            <h4>NEWSLETTER</h4>
            <p>Subscribe to get special offers and updates</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerContainer}>
          <p>
            &copy; {new Date().getFullYear()} Aureo Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
