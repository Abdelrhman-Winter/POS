"use client";

import { RestaurantTableContextProvider } from "@/hooks/useRestaurantTable";

interface RestaurantTableProps {
  children: React.ReactNode;
}

const RTableProvider: React.FC<RestaurantTableProps> = ({ children }) => {
  return (
    <RestaurantTableContextProvider>{children}</RestaurantTableContextProvider>
  );
};

export default RTableProvider;
