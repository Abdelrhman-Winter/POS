"use client";
import { useState, useRef } from "react";
import { IoIosAddCircleOutline } from "@react-icons/all-files/io/IoIosAddCircleOutline";
import Image from "next/image";
import styles from "./ImageInput.module.scss";

const ImageInput = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImageSrc(objectURL);
    }
  };

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.addpic} onClick={handleDivClick}>
      {imageSrc ? (
        <Image src={imageSrc} alt="Preview" width={200} height={200} />
      ) : (
        <label htmlFor="upload" className={styles.picLabel}>
          <svg width="0" height="0">
            <linearGradient
              id="main-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#ff0080" offset="0%" />
              <stop stopColor="#7928ca" offset="100%" />
            </linearGradient>
          </svg>
          <IoIosAddCircleOutline
            size={100}
            className={styles.picIcon}
            id="uploadicon"
            style={{ fill: "url(#main-gradient)" }}
          />
          <span className="text-gray-600 font-medium">Upload file</span>
        </label>
      )}
      <input
        ref={fileInputRef}
        id="upload"
        type="file"
        className="hidden"
        accept="image/png, image/jpeg"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageInput;
