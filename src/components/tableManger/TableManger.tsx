import dynamic from "next/dynamic";
import styles from "./TableManger.module.scss";
import BookingInput from "./bookingInput/BookingInput";
// import TableControlPanel from "./tableControlPanel/TableControlPanel";
const TableControlPanel = dynamic(
  () => import("./tableControlPanel/TableControlPanel"),
  { ssr: false }
);

import { Suspense } from "react";

const TableManager = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <BookingInput />
      </Suspense>
      <TableControlPanel />
    </div>
  );
};

export default TableManager;
