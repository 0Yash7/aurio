import React, { useRef, useState } from "react";
import styles from "./Body.module.css";
import { Location, Mail, Phone } from "../../assets";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactBody() {
  const form = useRef();
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yllu07a",
        "template_mhxd38j",
        form.current,
        "lr676kfQs8RXr9c_H",
      )
      .then(
        () => {
          showToast(
            "Message sent successfully! We'll get back to you soon.",
            "success",
          );
          form.current.reset();
        },
        (error) => {
          showToast("Failed to send message. Please try again.", "error");
          console.error(error.text);
        },
      );
  };

  const info = [
    {
      id: 1,
      icon: Phone,
      title: "Phone",
      data: "+91 9871402107",
      additional: "Available 24/7 for urgent inquiries",
    },
    {
      id: 2,
      icon: Mail,
      title: "Email",
      data: "Aureo@gmail.com",
      additional: "Response within 24 hours",
    },
    {
      id: 3,
      icon: Location,
      title: "Address",
      data: "Plot 406, Udhyog Kendra II, Ecotech III, Greater Noida, Uttar Pradesh",
      additional: "Near Metro Station, Easy to locate",
    },
    {
      id: 4,
      title: "Business Hours",
      data: "Monday - Saturday",
      additional: "9:00 AM - 8:00 PM",
    },
  ];

  return (
    <div className={styles.ContactBody}>
      <div className={styles.left}>
        <h2>Contact Information</h2>
        <p>
          Let's get connected and start creating delicious memories together
        </p>
        <div className={styles.infoContainer}>
          <div className={styles.infoItems}>
            {info.map((item) => (
              <div key={item.id} className={styles.infoItem}>
                {item.icon && <img src={item.icon} alt={item.title} />}
                <div className={styles.infoContent}>
                  <h3>{item.title}</h3>
                  <p>{item.data}</p>
                  <span>{item.additional}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoContent}>
              <h3>Social Media</h3>
              <p>Follow us on</p>
              <div className={styles.socialLinks}>
                <a
                  href="https://instagram.com/aureobakery"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com/AureoBakeHouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://twitter.com/aureobakery"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://youtube.com/aureobakery"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.contactTitle}>
          <em>Contact Us</em>
        </h2>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formFields}>
            <label>First Name</label>
            <input type="text" name="user_name" required />

            <label>Last Name</label>
            <input type="text" name="user_lastname" required />

            <label>Email</label>
            <input type="email" name="email" required />

            <label>Contact Number</label>
            <input type="text" name="user_contact" required />

            <label>Message</label>
            <textarea name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className={styles.sendButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
