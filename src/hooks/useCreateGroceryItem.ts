import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {createItem} from '../service/grocery';

const useCreateGroceryItem = () => {
  const [title, setTitle] = useState('');
  const client = useQueryClient();

  const {mutate: create} = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['grocery', 'all']});
    },
  });

  const onAdd = () => {
    if (title.trim() !== '') {
      create(title);
      setTitle('');
    }
  };

  return {
    title,
    setTitle,
    onAdd,
  };
};

export default useCreateGroceryItem;
