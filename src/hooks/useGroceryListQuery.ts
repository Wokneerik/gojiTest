import {useQuery} from '@tanstack/react-query';
import {fetchGrocery} from '../service/grocery';
import {GroceryItemState} from '../types';

const useGroceryListQuery = (state: GroceryItemState) => {
  return useQuery({
    queryFn: () => fetchGrocery(state),
    queryKey: ['grocery', state],
    staleTime: 1000 * 5,
  });
};

export default useGroceryListQuery;
