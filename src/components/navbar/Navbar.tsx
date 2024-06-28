"use client";
import React, { useState } from "react";
import { FaBars, FaUser, FaSignInAlt, FaCog, FaBell } from "react-icons/fa";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>
          <span>Pages / Tables</span>
          <h2>Tables</h2>
        </div>
        <div className={`${styles.navbarLinks} ${isOpen ? styles.active : ""}`}>
          <input
            type="text"
            placeholder="Type here..."
            className={styles.searchBox}
          />
          <FaUser className={styles.icon} />
          <FaSignInAlt className={styles.icon} />
          <FaCog className={styles.icon} />
          <FaBell className={styles.icon} />
        </div>
        <FaBars className={styles.menuIcon} onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
