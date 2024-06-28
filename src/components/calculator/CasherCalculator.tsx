"use client";
import { useFastFood } from "@/hooks/useFastFood";
import styles from "./CasherCalculator.module.scss";
import { useMemo } from "react";

const CasherCalculator = () => {
  const { calcValue, handleNumberClick, handleOperationClick } = useFastFood();

  // Memoize the button click handlers
  const memoizedNumberClickHandler = useMemo(() => {
    return (number: { toString: () => string }) =>
      handleNumberClick(number.toString());
  }, [handleNumberClick]);

  const memoizedOperationClickHandler = useMemo(() => {
    return (operation: string) => handleOperationClick(operation);
  }, [handleOperationClick]);

  return (
    <div className={styles.container}>
      <div className={styles.calcText}>
        <p className={styles.userInput}>{calcValue}</p>
      </div>
      <div className={styles.calcKeys}>
        <button
          type="button"
          className={`${styles.keyOthers} ${styles.operations}`}
          onClick={() => memoizedOperationClickHandler("AC")}
        >
          AC
        </button>
        <button
          type="button"
          className={`${styles.keyOthers} ${styles.operations}`}
          onClick={() => memoizedOperationClickHandler("DEL")}
        >
          DEL
        </button>
        <button
          type="button"
          className={`${styles.keyOthers} ${styles.operations}`}
          onClick={() => memoizedOperationClickHandler("%")}
        >
          %
        </button>
        <button
          type="button"
          className={`${styles.keyOperate} ${styles.operations}`}
          onClick={() => memoizedOperationClickHandler("/")}
        >
          /
        </button>
        {[7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="].map(
          (number) => (
            <button
              key={number}
              type="button"
              className={`${styles.numbers} ${
                typeof number === "number"
                  ? ""
                  : `${styles.keyOperate} ${styles.operations}`
              } ${number === "=" ? `${styles.eqal}` : ""}`}
              onClick={
                typeof number === "number"
                  ? () => memoizedNumberClickHandler(number.toString())
                  : () => memoizedOperationClickHandler(number)
              }
            >
              {number}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default CasherCalculator;
