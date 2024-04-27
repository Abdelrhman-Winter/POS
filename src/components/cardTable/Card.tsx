"use client";
import styles from "./Card.module.scss";
import { TbInfoSquareRounded } from "react-icons/tb";

interface TableDetailsProps {
  TableDetails: any;
  // onClick: () => void;
}

const Card: React.FC<TableDetailsProps> = ({ TableDetails }) => {
  return (
    <>
      <button
        className={styles.card}
        id={TableDetails.id}
        // onClick={handleSelect}
      >
        <div className={`${styles.select}`}>selected</div>

        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.tableNumber}>{TableDetails.tableNumber}</div>
            <div className={styles.title}>
              <div className={styles.details}>
                <h1>{TableDetails.name}</h1>
                <p>{TableDetails.phone}</p>
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
