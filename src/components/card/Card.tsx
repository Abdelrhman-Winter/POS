"use client";
import styles from "./Card.module.scss";
import { TbInfoSquareRounded } from "react-icons/tb";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useFastFood } from "@/hooks/useFastFood ";

interface FoodDetailsProps {
  FoodDetails: any;
  // onClick: () => void;
}

const Card: React.FC<FoodDetailsProps> = ({ FoodDetails }) => {
  const { toggleCardSelection, selectedCardIds } = useFastFood();
  const cardID = FoodDetails.id;
  const handleSelect = useCallback(() => {
    toggleCardSelection(FoodDetails.id);
  }, []);

  return (
    <>
      <button
        className={styles.card}
        id={FoodDetails.id}
        onClick={handleSelect}
      >
        <div
          className={`${styles.select} ${
            selectedCardIds.includes(cardID) ? styles.selected : ""
          }`}
        >
          selected
        </div>

        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Image
              className={styles.top}
              src={"/assets/15-inch-macbook-air-2tb-midnight.png"}
              alt={"image"}
              width={500}
              height={500}
              loading="eager"
              priority
            />
            <div className={styles.title}>
              <div className={styles.details}>
                <h1>{FoodDetails.name}</h1>
                <p>{FoodDetails.price} EGP</p>
              </div>
            </div>
          </div>
          <div className={styles.inside}>
            <div className={styles.icon}>
              <TbInfoSquareRounded size={30} />
            </div>
            <div className={styles.contents}>
              <table>
                <thead>
                  <tr>
                    <th>Width</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3000mm</td>
                  </tr>
                  <tr>
                    <td>Something</td>
                  </tr>
                  <tr>
                    <td>200mm</td>
                  </tr>
                  <tr>
                    <td>Something</td>
                  </tr>
                  <tr>
                    <td>200mm</td>
                  </tr>
                  <tr>
                    <td>Something</td>
                  </tr>
                  <tr>
                    <td>200mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

export default Card;
