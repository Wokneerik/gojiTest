import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {changeItemTitle} from '../service/grocery';
import {TGroceryItem} from '../types';

const useEditGroceryTitle = (groceryItem: TGroceryItem) => {
  const client = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(groceryItem.title);

  const {mutate: updateTitle} = useMutation({
    mutationFn: () => changeItemTitle(groceryItem.id, newTitle),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['grocery', 'all']});
      setIsEditing(false);
    },
  });

  const handleTitleChange = () => {
    if (newTitle.trim()) {
      updateTitle();
    }
  };

  return {
    isEditing,
    setIsEditing,
    newTitle,
    setNewTitle,
    handleTitleChange,
  };
};

export default useEditGroceryTitle;
