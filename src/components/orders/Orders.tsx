"use client";
import { useFastFood } from "@/hooks/useFastFood";
import styles from "./Orders.module.scss";
import React, { useMemo } from "react";
import OrderDetalis from "../orderDetalis/OrderDetalis";

const Orders = () => {
  const { cart } = useFastFood();

  const memoizedOrders = useMemo(() => {
    if (!cart) {
      return <p>No orders available</p>;
    }
    return cart.map((order: any) => (
      <div className={styles.orders} key={order.id}>
        <OrderDetalis Order={order} />
      </div>
    ));
  }, [cart]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>ORDER</p>
          <p>NAME</p>
          <p>QUANTITY</p>
        </div>

        {memoizedOrders}
      </div>
    </>
  );
};

export default React.memo(Orders);
