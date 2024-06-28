"use client";

import { IoPerson } from "@react-icons/all-files/io5/IoPerson";
import { IoFastFoodOutline } from "@react-icons/all-files/io5/IoFastFoodOutline";
import { IoRestaurantOutline } from "@react-icons/all-files/io5/IoRestaurantOutline";
import { IoAnalyticsOutline } from "@react-icons/all-files/io5/IoAnalyticsOutline";
import { IoAddCircleOutline } from "@react-icons/all-files/io5/IoAddCircleOutline";
import { IoRocketOutline } from "@react-icons/all-files/io5/IoRocketOutline";

import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <nav className={styles.sidebar}>
      <Link className={styles.header} href="/" aria-label="Go to POS home">
        <IoRocketOutline />
        <span>POS</span>
      </Link>
      <main>
        <div className={styles.container}>
          <Link
            href="/dashboard"
            className={currentPath === "/dashboard" ? styles.active : "no"}
            aria-label="Go to Dashboard"
          >
            <IoAnalyticsOutline />
            <span>Dashboard</span>
          </Link>
        </div>
        <div className={styles.container}>
          <div className={styles.productContainer}>
            <Link
              href="/"
              className={currentPath === "/" ? styles.active : "no"}
              aria-label="Go to Products"
            >
              <IoFastFoodOutline />
              <span>Products</span>
            </Link>
            <Link
              href="/addProduct"
              className={currentPath === "/addProduct" ? styles.active : "no"}
              aria-label="Go to Add Product"
            >
              <IoAddCircleOutline />
              <span>Add Product</span>
            </Link>
          </div>
          <Link
            href="/tables"
            className={currentPath === "/tables" ? styles.active : "no"}
            aria-label="Go to Tables"
          >
            <IoRestaurantOutline />
            <span>Tables</span>
          </Link>
        </div>
      </main>
      <Link className={styles.footer} href="#" aria-label="Go to Account">
        <IoPerson />
        <span>Account</span>
      </Link>
    </nav>
  );
};

export default React.memo(Sidebar);
