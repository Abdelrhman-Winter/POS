"use client";
import dynamic from "next/dynamic";
import styles from "./Container.module.scss";
import { useRestaurantTable } from "@/hooks/useRestaurantTable";
import { memo } from "react";

const DynamicCard = dynamic(
  () => import("@/components/resturantTableCards/resturantTableCard/Card"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const TableCardsContainer = () => {
  const { tables } = useRestaurantTable();

  return (
    <div className={styles.cardsContainer}>
      {tables.length === 0 ? (
        <p>No tables available</p>
      ) : (
        tables.map((table: any) => (
          <DynamicCard TableDetails={table} key={table.id} />
        ))
      )}
    </div>
  );
};

export default memo(TableCardsContainer);
