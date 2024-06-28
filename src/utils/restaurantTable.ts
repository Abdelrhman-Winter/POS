// Define types for fast food items
export type TableItem = {
  id: string;
  state: string;
  name: string;
  tableNumber: number;
  phone: number | null;
};

// Sample fast food items
const tableItems: TableItem[] = [
  { id: "1", name: "Ahmed", tableNumber: 1, state: "", phone: 123456789 },
  { id: "2", name: "Ibrahim", tableNumber: 2, state: "", phone: 123456789 },
  { id: "3", name: "Mohamed", tableNumber: 3, state: "", phone: 123456789 },
];

// Define utility functions

//get all restaurantTable

export const getAllTableItemBItems = (): TableItem[] => {
  return tableItems;
};

//get restaurantTable by id

export const getTableItemById = (id: string): TableItem | undefined => {
  return tableItems.find((item) => item.id === id);
};

//add restaurantTable
export const addTableItem = (name: string, phone: number | null): void => {
  const newId = (tableItems.length + 1).toString();
  const newTableNumber = tableItems.length + 1;
  const newTable: TableItem = {
    id: newId,
    name: name,
    phone: phone,
    state: "",
    tableNumber: newTableNumber,
  };
  tableItems.push(newTable);
};

//remove restaurantTable

export const removeTableItem = (id: string): void => {
  const index = tableItems.findIndex((item) => item.id === id);
  if (index !== -1) {
    tableItems.splice(index, 1);
  }
};

//update restaurantTable
export const updateTableItem = (
  id: string,
  newData: Partial<TableItem>
): void => {
  const index = tableItems.findIndex((item) => item.id === id);
  if (index !== -1) {
    tableItems[index] = { ...tableItems[index], ...newData };
  }
};
