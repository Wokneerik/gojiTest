export type GroceryItemState = 'all' | 'completed';

export type TGroceryItem = {
  id: string;
  title: string;
  amount: number;
  completed: boolean;
};
