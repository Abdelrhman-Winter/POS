import { getAllFastFoodItems } from "@/utils/fastFood";
import dynamic from "next/dynamic";
import styles from "./Home.module.scss";
import CasherCalculator from "@/components/calculator/CasherCalculator";
import Orders from "@/components/orders/Orders";
import Modal from "@/components/modal/Modal";

const DynamicCard = dynamic(() => import("@/components/card/Card"), {
  loading: () => <p>loading ....</p>,
});

export default async function Home() {
  const fFood = await getAllFastFoodItems();

  if (fFood.length === 0) {
    console.log("no food ");
  }

  return (
    <main className={styles.home}>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {fFood.map((food: any) => {
            return <DynamicCard FoodDetails={food} key={food.id} />;
          })}
        </div>
        <div className={styles.cashContainer}>
          <Orders />
          <CasherCalculator />
          <Modal />
        </div>
      </div>
    </main>
  );
}
