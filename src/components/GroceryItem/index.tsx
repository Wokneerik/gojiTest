import {
  AddIcon,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  Icon,
  RemoveIcon,
  Text,
  TrashIcon,
} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {Pressable, TextInput, View} from 'react-native';

import {
  useChangeGroceryAmount,
  useEditGroceryTitle,
  useRemoveGroceryItem,
  useToggleGroceryStatus,
} from '../../hooks';

import {TGroceryItem} from '../../types';

type GroceryProps = {
  groceryItem: TGroceryItem;
};

const GroceryItem: FC<GroceryProps> = ({groceryItem}) => {
  const {toggleStatus} = useToggleGroceryStatus(groceryItem);
  const {handleIncrement, handleDecrement} =
    useChangeGroceryAmount(groceryItem);
  const {isEditing, setIsEditing, newTitle, setNewTitle, handleTitleChange} =
    useEditGroceryTitle(groceryItem);
  const {removeItem} = useRemoveGroceryItem(groceryItem);

  return (
    <View
      style={{
        padding: 14,
        backgroundColor: groceryItem.completed ? '#D3D3D3' : 'white',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Checkbox
          size="md"
          isInvalid={false}
          isDisabled={false}
          value={groceryItem.id}
          isChecked={groceryItem.completed}
          onChange={() => toggleStatus()}>
          <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
        </Checkbox>

        <View style={{paddingHorizontal: 12, flex: 1}}>
          {isEditing && !groceryItem.completed ? (
            <TextInput
              value={newTitle}
              onChangeText={setNewTitle}
              onBlur={handleTitleChange}
              onSubmitEditing={handleTitleChange}
              style={{fontSize: 18, borderBottomWidth: 1}}
              autoFocus
            />
          ) : (
            <Pressable
              onPress={() => !groceryItem.completed && setIsEditing(true)}>
              <Text
                style={{
                  fontSize: 18,
                  textDecorationLine: groceryItem.completed
                    ? 'line-through'
                    : 'none',
                }}>
                {groceryItem.title}
              </Text>
            </Pressable>
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Pressable
            onPress={() => !groceryItem.completed && handleDecrement()}>
            <Icon as={RemoveIcon} m="$2" w="$5" h="$5" />
          </Pressable>
          <Text style={{fontSize: 18}}>{groceryItem.amount.toString()}</Text>
          <Pressable
            onPress={() => !groceryItem.completed && handleIncrement()}>
            <Icon as={AddIcon} m="$2" w="$5" h="$5" />
          </Pressable>
        </View>

        <Pressable onPress={() => removeItem()}>
          <Icon as={TrashIcon} m="$2" w="$5" />
        </Pressable>
      </View>
    </View>
  );
};

export default GroceryItem;
