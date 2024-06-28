import styles from "./Home.module.scss";
import CardsContainer from "@/components/cardsContainer/CardsContainer";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import FFoodProvider from "@/providers/FastFoodProvider";
const Orders = dynamic(() => import("@/components/orders/Orders"), {
  ssr: false,
});
const CasherCalculator = dynamic(
  () => import("@/components/calculator/CasherCalculator"),
  { ssr: false }
);
const Modal = dynamic(() => import("@/components/modal/Modal"), { ssr: false });

export default function Home() {
  return (
    <main className={styles.home}>
      <FFoodProvider>
        <div className={styles.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <CardsContainer />
          </Suspense>
          <div className={styles.cashContainer}>
            <Orders />
            <CasherCalculator />
            <Suspense fallback={<div>Loading...</div>}>
              <Modal />
            </Suspense>
          </div>
        </div>
      </FFoodProvider>
    </main>
  );
}
