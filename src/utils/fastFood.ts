// Define types for fast food items
export type FastFoodItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
};

// Sample fast food items
const fastFoodItems: FastFoodItem[] = [
  {
    id: "1",
    name: "Cheese Burger",
    price: 80,
    quantity: 1,
    img: "/assets/Cheeseburger.webp",
  },
  {
    id: "2",
    name: "Chicken Burge",
    price: 70,
    quantity: 1,
    img: "/assets/ChickenBurger.webp",
  },
  {
    id: "3",
    name: "Chicken Nugget",
    price: 50,
    quantity: 1,
    img: "/assets/ChickenNugget.webp",
  },
  {
    id: "4",
    name: "French Fries",
    price: 30,
    quantity: 1,
    img: "/assets/FrenchFries.webp",
  },
  {
    id: "5",
    name: "Greek Salad",
    price: 40,
    quantity: 1,
    img: "/assets/GreekSalad.webp",
  },
  {
    id: "6",
    name: "Shawarma Kebab",
    price: 80,
    quantity: 1,
    img: "/assets/ShawarmaKebab.webp",
  },
  // Add more items as needed
];

// Define utility functions
export const getAllFastFoodItems = (): FastFoodItem[] => {
  return fastFoodItems;
};

export const getFastFoodItemById = (id: string): FastFoodItem | undefined => {
  return fastFoodItems.find((item) => item.id === id);
};
