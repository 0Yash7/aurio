import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import { CommonLogo } from "../assets";
import { Menu, X, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Animate in
  useEffect(() => {
    gsap.from(navRef.current, { opacity: 0, y: -100 });
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleServicesClick = (e) => {
    e.stopPropagation();
    setServicesOpen(!servicesOpen);
  };

  const handleSectionClick = (sectionId) => {
    setMenuOpen(false);
    setServicesOpen(false);

    // If we're already on the services page, scroll to the section
    if (location.pathname === "/services") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to services and then scroll
      navigate(`/services#${sectionId}`);
    }
  };

  const handleMenuDownload = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Menu.pdf';
    link.download = 'Aureo-Menu.pdf';
    link.type = 'application/pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Handle hash navigation when the page loads
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <header ref={navRef} className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src={CommonLogo} alt="Logo" />
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className={styles.dropdown} ref={dropdownRef}>
              <button
                onClick={handleServicesClick}
                className={styles.dropdownTrigger}
              >
                Services <ChevronDown size={16} />
              </button>
              <div
                className={`${styles.dropdownMenu} ${servicesOpen ? styles.open : ""}`}
              >
                <Link
                  to="/services#b2b-bakery"
                  onClick={() => handleSectionClick("b2b-bakery")}
                >
                  B2B Bakery
                </Link>
                <Link
                  to="/services#outlets"
                  onClick={() => handleSectionClick("outlets")}
                >
                  24x7 Outlets
                </Link>
                <Link
                  to="/services#restaurants"
                  onClick={() => handleSectionClick("restaurants")}
                >
                  Restaurants
                </Link>
              </div>
            </li>
            <li>
              <Link to="/values" onClick={() => setMenuOpen(false)}>
                Catering
              </Link>
            </li>
            <li>
              <a
                href="/aureo-menu.pdf"
                onClick={handleMenuDownload}
                className={styles.contactButton}
              >
                Download Menu
              </a>
            </li>
            <li>
              <Link to="/contact" className={styles.contactButton}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
