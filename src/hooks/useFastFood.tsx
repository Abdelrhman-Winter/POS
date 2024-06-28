"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { FastFoodItem, getFastFoodItemById } from "../utils/fastFood";

// Define the shape of the context value
type FastFoodContextValue = {
  fastFoodItems: FastFoodItem[];
  getFastFoodItemByIdHandler: (id: string) => FastFoodItem | undefined;
  calcValue: string;
  setCalcValue: (value: string) => void;
  handleNumberClick: (value: string) => void;
  handleOperationClick: (operation: string) => void;
  selectedCardIds: string[];
  setSelectedCardIds: React.Dispatch<string[]>;
  getSelectedProducts: () => FastFoodItem[];
  toggleCardSelection: (cardId: string) => void;
  cart: FastFoodItem[] | null;
  setCart: (value: FastFoodItem[]) => void;
  handelCartQtyIncrease: (product: FastFoodItem) => void;
  handelCartQtyDecrease: (product: FastFoodItem) => void;
  cartTotalQty: number;
  cartTotalAmount: number;
  handelClearCart: () => void;
};
// Create the context
const FastFoodContext = createContext<FastFoodContextValue | undefined>(
  undefined
);

// Create a custom hook to use the FastFoodContext
export const useFastFood = () => {
  const context = useContext(FastFoodContext);
  if (!context) {
    throw new Error("useFastFood must be used within a FastFoodProvider");
  }
  return context;
};

interface Props {
  [propname: string]: any;
}
// Create the provider component
export const FastFoodContextProvider = (props: Props) => {
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [calcValue, setCalcValue] = useState(cartTotalAmount.toString() || "0");
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([]); // Initialize selected card ID state
  const [cart, setCart] = useState<FastFoodItem[] | null>(null);

  //appends the clicked number to the current value (unless it’s “0” or “NaN”).
  const handleNumberClick = (value: string) => {
    setCalcValue((prevValue) => {
      if (prevValue === "0" || prevValue === "NaN") {
        return value;
      } else {
        return prevValue + value;
      }
    });
  };

  //performs different actions based on the operation
  const handleOperationClick = (operation: string) => {
    let result = "";
    switch (operation) {
      case "AC":
        result = "0";
        break;
      case "DEL":
        result = calcValue.slice(0, -1) || "0";
        break;
      case "=":
        try {
          result = eval(calcValue.trim()).toFixed(2);
        } catch (error) {
          result = "NaN";
        }
        break;
      default:
        result = calcValue + operation;
        break;
    }
    setCalcValue(result);
  };

  //get the fast food by id
  const getFastFoodItemByIdHandler = (id: string) => {
    return getFastFoodItemById(id);
  };

  // Function to retrieve selected products based on their IDs
  const getSelectedProducts = useCallback(() => {
    return selectedCardIds
      .map((id) => getFastFoodItemByIdHandler(id))
      .filter((item): item is FastFoodItem => item !== undefined);
  }, [selectedCardIds, getFastFoodItemByIdHandler]);

  //set the fastfood to cart
  useEffect(() => {
    const products = getSelectedProducts();
    setCart(products);

    localStorage.setItem("CartFood", JSON.stringify(products));
  }, [selectedCardIds]);

  //This function toggles the selection of a card (product) by adding or removing its ID from the selectedCardIds array.
  const toggleCardSelection = (cardId: string) => {
    setSelectedCardIds((prevIds) => {
      if (prevIds.includes(cardId)) {
        // Card is already selected, remove it
        return prevIds.filter((id) => id !== cardId);
      } else {
        // Card is not selected, add it
        return [...prevIds, cardId];
      }
    });
  };

  // Increase  number of fast food in cart

  const handelCartQtyIncrease = useCallback(
    (product: FastFoodItem) => {
      let updatedCart;
      if (product.quantity === 99) {
        return console.log("Ooops! Maximum reached");
      }
      if (cart) {
        updatedCart = [...cart];

        const existingIndex = cart.findIndex((item) => item.id === product.id);

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }

        setCart(updatedCart);
      }
    },
    [cart]
  );

  // Decrease  number of fast food in cart
  const handelCartQtyDecrease = useCallback(
    (product: FastFoodItem) => {
      let updatedCart;
      if (product.quantity === 1) {
        return console.log("Ooops! Minimum reached");
      }
      if (cart) {
        updatedCart = [...cart];

        const existingIndex = cart.findIndex((item) => item.id === product.id);

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
            .quantity;
        }

        setCart(updatedCart);
      }
    },
    [cart]
  );

  //get how many cost of all product and how many product
  useEffect(() => {
    const getTotal = () => {
      if (cart) {
        const { total, qty } = cart?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;

            acc.total += itemTotal;
            acc.qty += item.quantity;

            return acc;
          },
          { total: 0, qty: 0 }
        );

        setCartTotalQty(qty);
        setCartTotalAmount(total);
        // set the calc value when fastfood added
        setCalcValue(total.toString());
      }
    };

    getTotal();
  }, [cart]);

  //resets the cart, quantities, and selected IDs.
  const handelClearCart = useCallback(() => {
    setCart((prevCart) => {
      if (prevCart) {
        // Reset the quantity of each product to 1
        const updatedCart = prevCart.map((item) => ({
          ...item,
          quantity: 1,
        }));

        localStorage.setItem("CartFood", JSON.stringify(null));
        setCartTotalQty(0);
        setCartTotalAmount(0);
        setSelectedCardIds([]);

        return updatedCart;
      }

      return null;
    });
  }, []);

  //set value
  const value: FastFoodContextValue = {
    calcValue,
    setCalcValue,
    handleNumberClick,
    handleOperationClick,
    fastFoodItems: [],
    getFastFoodItemByIdHandler,
    selectedCardIds,
    setSelectedCardIds,
    getSelectedProducts,
    toggleCardSelection,
    handelCartQtyDecrease,
    handelCartQtyIncrease,
    cart,
    setCart,
    cartTotalQty,
    cartTotalAmount,
    handelClearCart,
  };

  return <FastFoodContext.Provider value={value} {...props} />;
};
