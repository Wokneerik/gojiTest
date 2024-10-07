import {useMutation, useQueryClient} from '@tanstack/react-query';
import {changeAmountOfItem} from '../service/grocery';
import {TGroceryItem} from '../types';

const useChangeGroceryAmount = (groceryItem: TGroceryItem) => {
  const client = useQueryClient();

  const {mutate: changeAmount} = useMutation({
    mutationFn: (newAmount: number) =>
      changeAmountOfItem(groceryItem.id, newAmount),
    onSuccess: () => client.invalidateQueries({queryKey: ['grocery']}),
  });

  const handleIncrement = () => {
    changeAmount(groceryItem.amount + 1);
  };

  const handleDecrement = () => {
    if (groceryItem.amount > 0) {
      changeAmount(groceryItem.amount - 1);
    }
  };

  return {
    handleIncrement,
    handleDecrement,
  };
};

export default useChangeGroceryAmount;
