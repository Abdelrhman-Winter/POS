"use client";
import { useFastFood } from "@/hooks/useFastFood ";
import styles from "./Orders.module.scss";
import OrderDetalis from "../orderDetalis/OrderDetalis";

const Oraders = () => {
  const { cart } = useFastFood();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>ORDER</p>
          <p>NAME</p>
          <p>QUANTITY</p>
        </div>

        {cart
          ? cart.map((order: any) => {
              return (
                <div className={styles.orders} key={order.id}>
                  <OrderDetalis Order={order} />{" "}
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default Oraders;
