import { getAllTableItemBItems } from "@/utils/table";
import styles from "./Tables.module.scss";
import dynamic from "next/dynamic";
import TableManger from "@/components/tableManger/TableManger";

//optmize
const DynamicCard = dynamic(() => import("@/components/cardTable/Card"), {
  loading: () => <p>loading ....</p>,
});

const tables = async () => {
  const tables = await getAllTableItemBItems();
  return (
    <main className={styles.home}>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {tables.map((table: any) => {
            return <DynamicCard TableDetails={table} key={table.id} />;
          })}
        </div>
        <div className={styles.cashContainer}>
          <TableManger />
        </div>
      </div>
    </main>
  );
};

export default tables;
