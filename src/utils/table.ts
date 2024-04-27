// Define types for fast food items
export type TableItem = {
  id: string;
  state: string;
  name: string;
  tableNumber: number;
  phone: number;
};

// Sample fast food items
const tableItems: TableItem[] = [
  { id: "1", name: "Ahmed", tableNumber: 1, state: "", phone: 123456789 },
  { id: "2", name: "Ibrahim", tableNumber: 2, state: "", phone: 123456789 },
  { id: "3", name: "Mohamed", tableNumber: 3, state: "", phone: 123456789 },
];

// Define utility functions
export const getAllTableItemBItems = (): TableItem[] => {
  return tableItems;
};

export const getTableItemById = (id: string): TableItem | undefined => {
  return tableItems.find((item) => item.id === id);
};
