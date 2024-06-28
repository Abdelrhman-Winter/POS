"use client";
import Image from "next/image";
import SetQuantity from "../setQuantity/SetQuantity";
import { useEffect, useState } from "react";
import { useFastFood } from "@/hooks/useFastFood";
import ComponentLoader from "../componentLoader/ComponentLoader";

interface Orderprops {
  Order: any;
}

const OrderDetalis: React.FC<Orderprops> = ({ Order }) => {
  const { selectedCardIds } = useFastFood();
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (selectedCardIds.includes(Order.id)) {
      Order.quantity = 1;
    }
  }, [Order.id]);

  return (
    <>
      <div className=" relative w-[70px] aspect-square">
        {!imageLoaded && (
          <div className="placeholder">
            <ComponentLoader />
          </div>
        )}
        <Image
          src={Order.img}
          alt={Order.name}
          fill
          unoptimized
          className=" object-contain"
          loading="lazy"
          onLoad={handleImageLoad}
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
