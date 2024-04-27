"use client";
import { MdOutlineCrisisAlert } from "react-icons/md";
import { SiHomeassistant } from "react-icons/si";
import { IoFastFoodOutline, IoRestaurantOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <nav className={styles.sidebar}>
      <Link className={styles.header} href="/">
        <MdOutlineCrisisAlert />
        <span>POS</span>
      </Link>
      <main>
        <div className={styles.container}>
          <Link href="#">
            <SiHomeassistant />
            <span>Dasboard</span>
          </Link>
        </div>
        <div className={styles.container}>
          <Link
            href="/"
            className={`${currentPath === "/" ? styles.active : "no"}`}
          >
            <IoFastFoodOutline />
            <span>Products</span>
          </Link>

          <Link
            href="/tables"
            className={`${currentPath === "/tables" ? styles.active : "no"}`}
          >
            <IoRestaurantOutline />
            <span>Tables</span>
          </Link>
        </div>
      </main>
      <Link className={styles.footer} href="#">
        <FaRegUserCircle />

        <span>Account</span>
      </Link>
    </nav>
  );
};

export default Sidebar;
