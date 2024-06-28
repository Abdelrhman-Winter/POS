"use client";
import styles from "./TableControlPanel.module.scss";
import { MdRemoveCircle } from "@react-icons/all-files/md/MdRemoveCircle";
import { MdAddToPhotos } from "@react-icons/all-files/md/MdAddToPhotos";
import { MdPayment } from "@react-icons/all-files/md/MdPayment";
import { MdCollectionsBookmark } from "@react-icons/all-files/md/MdCollectionsBookmark";
import { IoPersonRemoveOutline } from "@react-icons/all-files/io5/IoPersonRemoveOutline";
import { useRestaurantTable } from "@/hooks/useRestaurantTable";
import { useCallback } from "react";
const TableControlPanel = () => {
  const {
    addTable,
    removeTable,
    tables,
    resetSelectedCard,
    setPaying,
    selectedCardId,
    setBooked,
  } = useRestaurantTable();

  const addRTHandler = useCallback(() => {
    addTable("", null);
  }, [addTable]);

  const handleRemoveTable = useCallback(() => {
    if (tables.length > 0) {
      removeTable(tables[tables.length - 1].id);
    }
  }, [removeTable, tables]);

  return (
    <div className={styles.actionContainer}>
      <h4>Action</h4>
      <div className={styles.action}>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={addRTHandler}>
            <MdAddToPhotos size={30} />
            <span>ADD</span>
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={handleRemoveTable}>
            <MdRemoveCircle size={30} />
            <span>Remove</span>
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            onClick={resetSelectedCard}
            disabled={!selectedCardId}
          >
            <IoPersonRemoveOutline size={30} />
            <span>Clear</span>
          </button>
        </div>
      </div>
      <h4>Status</h4>
      <div className={styles.status}>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={setPaying} disabled={!selectedCardId}>
            <MdPayment size={30} />
            Paying
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={setBooked} disabled={!selectedCardId}>
            <MdCollectionsBookmark size={30} />
            Booked up
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableControlPanel;
