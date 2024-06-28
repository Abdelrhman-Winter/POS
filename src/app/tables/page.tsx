import styles from "./Tables.module.scss";
import TableManger from "@/components/tableManger/TableManger";
import RTableProvider from "@/providers/RestaurantTableProvider";
import TableCardsContainer from "@/components/resturantTableCards/TableCardsContainer";

const tables = () => {
  return (
    <main className={styles.home}>
      <RTableProvider>
        <div className={styles.container}>
          <TableCardsContainer />

          <div className={styles.cashContainer}>
            <TableManger />
          </div>
        </div>
      </RTableProvider>
    </main>
  );
};

export default tables;
