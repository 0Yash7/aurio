// src/components/Home/ContactUs.jsx
import React, { useRef, useState } from "react";
import styles from "./ContactUs.module.css";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
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

  return (
    <div id="contact-section" className={styles.contactSection}>
      {toast.show && (
        <div className={`${styles.toast} ${styles[toast.type]}`}>
          {toast.message}
        </div>
      )}
      <div className={styles.contactLeft}>
        <iframe
          title="Aureo Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7579109657077!2d77.4672888749525!3d28.516930489321826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce90b7142c587%3A0x6fc0aae0796b0a1e!2sAureo%20Bake%20House!5e0!3m2!1sen!2sin!4v1746083966672!5m2!1sen!2sin"
          className={styles.map}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className={styles.contactInfo}>
          <h3>Contact Information</h3>
          <p>Let's get connected</p>
          <div className={styles.infoItem}>
            <span>📞</span>
            <p>91 9871402107</p>
          </div>
          <div className={styles.infoItem}>
            <span>📧</span>
            <p>Aureo@gmail.com</p>
          </div>
          <div className={styles.infoItem}>
            <span>📍</span>
            <p>
              Plot 406, Udhyog Kendra II, Ecotech III, Greater Noida, Uttar
              Pradesh
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contactRight}>
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            name="user_lastname"
            placeholder="Last Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="text"
            name="user_contact"
            placeholder="Contact Number"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
