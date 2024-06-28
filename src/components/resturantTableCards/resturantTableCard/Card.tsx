"use client";
import { useRestaurantTable } from "@/hooks/useRestaurantTable";
import styles from "./Card.module.scss";
import { IoMdCheckmarkCircleOutline } from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline";
import { IoRestaurantOutline } from "@react-icons/all-files/io5/IoRestaurantOutline";
import { IoIosInformationCircleOutline } from "@react-icons/all-files/io/IoIosInformationCircleOutline";
import { useCallback, memo } from "react";
import Status from "@/components/status/Status";

interface TableDetailsProps {
  TableDetails: {
    id: string;
    state: string;
    tableNumber: number;
    name: string;
    phone: string;
  };
}

const Card: React.FC<TableDetailsProps> = ({ TableDetails }) => {
  const { toggleCardSelection, selectedCardId } = useRestaurantTable();
  const { id, state, tableNumber, name, phone } = TableDetails;

  const handleSelect = useCallback(() => {
    toggleCardSelection(id);
  }, [id, toggleCardSelection]);

  return (
    <button className={styles.card} id={id} onClick={handleSelect}>
      <div
        className={`${styles.select} ${
          selectedCardId === id ? styles.selected : ""
        }`}
      >
        <svg width="0" height="0">
          <linearGradient
            id={`main-gradient-${id}`}
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
          style={{ fill: `url(#main-gradient-${id})` }}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {state && <Status TableStatus={state} />}
          <div className={styles.tableNumber}>
            <IoRestaurantOutline size={100} />
            <span>{tableNumber}</span>
          </div>
          <div className={styles.title}>
            <div className={styles.details}>
              <h1>{name}</h1>
              <p>{phone}</p>
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
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{state || ""}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </button>
  );
};

export default memo(Card);
