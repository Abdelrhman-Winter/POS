"use client";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { TableItem, getAllTableItemBItems } from "../utils/restaurantTable";

// Define the shape of the context value
type RestaurantTableContextValue = {
  toggleCardSelection: (cardId: string) => void;
  selectedCardId: string | null;
  setSelectedCardId: React.Dispatch<React.SetStateAction<string | null>>;
  tables: TableItem[];
  addTable: (name: string, phone: number | null) => void;
  removeTable: (value: string) => void;
  updateTable: (id: string, newData: Partial<TableItem>) => void;
  resetSelectedCard: () => void;
  setPaying: () => void;
  setBooked: () => void;
};

// Create the context
const RestaurantTableContext = createContext<
  RestaurantTableContextValue | undefined
>(undefined);

// Create a custom hook to use the RestaurantTableContext
export const useRestaurantTable = () => {
  const context = useContext(RestaurantTableContext);
  if (!context) {
    throw new Error(
      "useRestaurantTable must be used within a RestaurantTableProvider"
    );
  }
  return context;
};

interface Props {
  [propname: string]: any;
}

// Create the provider component
export const RestaurantTableContextProvider = (props: Props) => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [tables, setTables] = useState<TableItem[]>(getAllTableItemBItems());

  const toggleCardSelection = useCallback((cardId: string) => {
    setSelectedCardId((prevId) => (prevId === cardId ? null : cardId));
  }, []);

  const addNewTable = useCallback((name: string, phone: number | null) => {
    setTables((prevTables) => {
      const newId = (prevTables.length + 1).toString();
      const newTableNumber = prevTables.length + 1;
      const newTable: TableItem = {
        id: newId,
        name,
        phone,
        state: "",
        tableNumber: newTableNumber,
      };
      return [...prevTables, newTable];
    });
  }, []);

  const removeTable = useCallback((id: string) => {
    setTables((prevTables) => prevTables.filter((table) => table.id !== id));
  }, []);

  const updateTable = useCallback((id: string, newData: Partial<TableItem>) => {
    setTables((prevTables) =>
      prevTables.map((table) =>
        table.id === id ? { ...table, ...newData } : table
      )
    );
  }, []);

  const resetSelectedCard = useCallback(() => {
    if (selectedCardId) {
      updateTable(selectedCardId, { name: "", phone: null });
    }
  }, [selectedCardId, updateTable]);

  const setPaying = useCallback(() => {
    if (selectedCardId) {
      const currentState =
        tables.find((table) => table.id === selectedCardId)?.state || "";
      const newState = currentState === "Paying" ? "" : "Paying";
      updateTable(selectedCardId, { state: newState });
    }
  }, [selectedCardId, tables, updateTable]);

  const setBooked = useCallback(() => {
    if (selectedCardId) {
      const currentState =
        tables.find((table) => table.id === selectedCardId)?.state || "";
      const newState = currentState === "Booked up" ? "" : "Booked up";
      updateTable(selectedCardId, { state: newState });
    }
  }, [selectedCardId, tables, updateTable]);

  const value = useMemo(
    () => ({
      toggleCardSelection,
      selectedCardId,
      setSelectedCardId,
      tables,
      addTable: addNewTable,
      removeTable,
      updateTable,
      resetSelectedCard,
      setPaying,
      setBooked,
    }),
    [
      toggleCardSelection,
      selectedCardId,
      tables,
      addNewTable,
      removeTable,
      updateTable,
      resetSelectedCard,
      setPaying,
      setBooked,
    ]
  );

  return <RestaurantTableContext.Provider value={value} {...props} />;
};
