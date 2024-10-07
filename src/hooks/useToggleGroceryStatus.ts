import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toggleItemStatus} from '../service/grocery';
import {TGroceryItem} from '../types';

const useToggleGroceryStatus = (groceryItem: TGroceryItem) => {
  const client = useQueryClient();

  const {mutate: toggleStatus} = useMutation({
    mutationFn: () => toggleItemStatus(groceryItem.id, !groceryItem.completed),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['grocery']});
    },
  });

  return {toggleStatus};
};

export default useToggleGroceryStatus;
