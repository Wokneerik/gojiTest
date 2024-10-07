import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteItem} from '../service/grocery';
import {TGroceryItem} from '../types';

const useRemoveGroceryItem = (groceryItem: TGroceryItem) => {
  const client = useQueryClient();

  const {mutate: removeItem} = useMutation({
    mutationFn: () => deleteItem(groceryItem.id),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['grocery']});
    },
  });

  return {removeItem};
};

export default useRemoveGroceryItem;
