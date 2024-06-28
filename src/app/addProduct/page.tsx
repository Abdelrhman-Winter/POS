import styles from "./AddProduct.module.scss";
import InputDetails from "@/components/addProduct/inputDetails/InputDetails";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const ImageInput = dynamic(
  () => import("@/components/addProduct/imageInput/ImageInput"),
  { ssr: false }
);

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.addForm}>
        <Suspense fallback={<div>Loading...</div>}>
          <ImageInput />
        </Suspense>
        <InputDetails />
      </form>
    </div>
  );
};

export default AddProduct;
