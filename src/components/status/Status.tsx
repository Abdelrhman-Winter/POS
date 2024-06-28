import styles from "./Status.module.scss";

interface TableStatusProps {
  TableStatus: string;
  // onClick: () => void;
}
const Status: React.FC<TableStatusProps> = ({ TableStatus }) => {
  return (
    <>
      <div
        className={
          TableStatus === "Booked up"
            ? `${styles.bookedStatus}`
            : TableStatus === "Paying"
            ? `${styles.payingStatus}`
            : ""
        }
      >
        {TableStatus}
      </div>
    </>
  );
};

export default Status;
