"use client";
import Image from "next/image";
import SetQuantity from "../setQuantity/SetQuantity";
import { useEffect, useState } from "react";
import { useFastFood } from "@/hooks/useFastFood ";

interface Orderprops {
  Order: any;
}

const OrderDetalis: React.FC<Orderprops> = ({ Order }) => {
  const { selectedCardIds } = useFastFood();

  useEffect(() => {
    if (selectedCardIds.includes(Order.id)) {
      Order.quantity = 1;
    }
  }, [Order]);
  return (
    <>
      <div className=" relative w-[70px] aspect-square">
        <Image
          src={"/assets/15-inch-macbook-air-2tb-midnight.png"}
          alt={"image"}
          fill
          unoptimized
          className=" object-contain"
        />
      </div>
      <p className=" w-9 ">{Order.name}</p>
      <div className=" justify-self-center text-[#847577]">
        {" "}
        <SetQuantity Order={Order} />
      </div>
    </>
  );
};

export default OrderDetalis;
