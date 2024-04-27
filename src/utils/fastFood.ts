// Define types for fast food items
export type FastFoodItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

// Sample fast food items
const fastFoodItems: FastFoodItem[] = [
  { id: "1", name: "Burger", price: 5, quantity: 1 },
  { id: "2", name: "Fries", price: 3, quantity: 1 },
  { id: "3", name: "Pizza", price: 8, quantity: 1 },
  // Add more items as needed
];

// Define utility functions
export const getAllFastFoodItems = (): FastFoodItem[] => {
  return fastFoodItems;
};

export const getFastFoodItemById = (id: string): FastFoodItem | undefined => {
  return fastFoodItems.find((item) => item.id === id);
};
