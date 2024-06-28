// components/DashboardCard.js
import React from "react";
import { Card } from "../../ui/card";
import styles from "./DashboardCard.module.scss";

const DashboardCard = ({ icon, title, value, percentage, isPositive }: any) => {
  return (
    <Card className={styles.card}>
      <div className={styles.card__header}>
        <h2 className={styles.card__title}>{title}</h2>
        <div className={styles.card__icon}>{icon}</div>
      </div>
      <div className={styles.card__body}>
        <p className={styles.card__value}>{value}</p>
        <p
          className={`${styles.card__percentage} ${
            isPositive ? styles["card--positive"] : styles["card--negative"]
          }`}
        >
          {isPositive ? "+" : "-"}
          {percentage}%
        </p>
      </div>
    </Card>
  );
};

export default React.memo(DashboardCard);
