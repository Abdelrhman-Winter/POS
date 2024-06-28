import React, { useMemo } from "react";
import styles from "./TopSellingOrdersTable.module.scss";
import Image from "next/image";

interface OrderData {
  name: string;
  orders: number;
  value: string;
  imgSrc: string;
}

const TopSellingOrdersTable: React.FC = () => {
  const data: OrderData[] = useMemo(
    () => [
      {
        name: "Shawarma Kebab",
        orders: 940,
        value: "$9,805.32",
        imgSrc: "/assets/ShawarmaKebab.webp",
      },
      {
        name: "Chicken Nugget",
        orders: 860,
        value: "$9,485.90",
        imgSrc: "/assets/ChickenNugget.webp",
      },
      {
        name: "Chicken Burger",
        orders: 1250,
        value: "$8,932.49",
        imgSrc: "/assets/ChickenBurger.webp",
      },
      {
        name: "Cheese Burger",
        orders: 745,
        value: "$8,500.40",
        imgSrc: "/assets/Cheeseburger.webp",
      },
      {
        name: "French Fries",
        orders: 786,
        value: "$7,950.44",
        imgSrc: "/assets/FrenchFries.webp",
      },
      {
        name: "Greek Salad",
        orders: 592,
        value: "$7,200.40",
        imgSrc: "/assets/GreekSalad.webp",
      },
    ],
    []
  );

  return (
    <div className={styles["table-container"]}>
      <h2>Top Selling Orders</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Orders</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={styles["table__avatar"]}>
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  width={40}
                  height={40}
                  loading="lazy"
                  blurDataURL={item.imgSrc} // Placeholder blur image
                  placeholder="blur"
                />
                <span className={styles["table__name"]}>{item.name}</span>
              </td>
              <td>{item.orders}</td>
              <td className={styles["table__value"]}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(TopSellingOrdersTable);
