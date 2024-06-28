"use client";

import { FastFoodContextProvider } from "@/hooks/useFastFood";

interface FastFoodProps {
  children: React.ReactNode;
}

const FFoodProvider: React.FC<FastFoodProps> = ({ children }) => {
  return <FastFoodContextProvider>{children}</FastFoodContextProvider>;
};

export default FFoodProvider;
