import dynamic from "next/dynamic";
import styles from "./CardsContainer.module.scss";
import ComponentLoader from "@/components/componentLoader/ComponentLoader";
import { FastFoodItem, getAllFastFoodItems } from "@/utils/fastFood";
import React, { useMemo } from "react";

// Dynamic import for Card component
const DynamicCard = dynamic(() => import("@/components/card/Card"), {
  loading: () => (
    <div className={styles.loaderContainer}>
      <ComponentLoader />
    </div>
  ),
});
const CardsContainer = () => {
  // Memoize the result of getAllFastFoodItems
  const fFood: FastFoodItem[] = useMemo(() => getAllFastFoodItems(), []);

  return (
    <div className={styles.cardsContainer}>
      {fFood.length === 0 ? (
        <p>No food available</p>
      ) : (
        fFood.map((food: any) => (
          <DynamicCard FoodDetails={food} key={food.id} />
        ))
      )}
    </div>
  );
};

export default CardsContainer;
