"use client";
import styles from "./Card.module.scss";
import { IoIosInformationCircleOutline } from "@react-icons/all-files/io/IoIosInformationCircleOutline";
import { IoMdCheckmarkCircleOutline } from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline";

import Image from "next/image";
import React, { useCallback } from "react";
import { useFastFood } from "@/hooks/useFastFood";

interface FoodDetailsProps {
  FoodDetails: any;
  // onClick: () => void;
}

const Card: React.FC<FoodDetailsProps> = ({ FoodDetails }) => {
  const { toggleCardSelection, selectedCardIds } = useFastFood();
  const cardID = FoodDetails.id;

  const handleSelect = useCallback(() => {
    toggleCardSelection(cardID);
  }, [toggleCardSelection, cardID]);

  return (
    <button className={styles.card} id={FoodDetails.id} onClick={handleSelect}>
      <div
        className={`${styles.select} ${
          selectedCardIds.includes(cardID) ? styles.selected : ""
        }`}
      >
        <svg width="0" height="0">
          <linearGradient
            id={`main-gradient-${cardID}`}
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#ff0080" offset="0%" />
            <stop stopColor="#7928ca" offset="100%" />
          </linearGradient>
        </svg>

        <IoMdCheckmarkCircleOutline
          size={100}
          style={{ fill: `url(#main-gradient-${cardID})` }}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <picture>
            <source
              media="(max-width:699px)"
              srcSet={FoodDetails.img}
              type="image/webp"
            />
            <source
              media="(max-width:640px)"
              srcSet={FoodDetails.img}
              type="image/webp"
            />
            <Image
              className={styles.top}
              src={FoodDetails.img}
              alt={FoodDetails.name}
              width={190}
              height={190}
              priority
              blurDataURL="URL"
              placeholder="blur"
            />
          </picture>

          <div className={styles.title}>
            <div className={styles.details}>
              <h1>{FoodDetails.name}</h1>
              <p>{FoodDetails.price} EGP</p>
            </div>
          </div>
        </div>
        <div className={styles.inside}>
          <div className={styles.icon}>
            <IoIosInformationCircleOutline size={30} />
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
  );
};

export default React.memo(Card);
