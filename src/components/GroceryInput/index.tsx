import {
  AddIcon,
  Button,
  ButtonIcon,
  ButtonText,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {useCreateGroceryItem} from '../../hooks';

const GroceryInput: FC = () => {
  const {title, setTitle, onAdd} = useCreateGroceryItem();

  return (
    <Input
      variant="outline"
      size="xl"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      style={{
        width: '100%',
        backgroundColor: '#F0F0F0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 15,
      }}>
      <InputField
        placeholder="Enter Text here"
        value={title}
        onChangeText={setTitle}
        style={{
          color: 'black',
          paddingVertical: 0,
        }}
        placeholderTextColor="#A9A9A9"
      />
      <Button size="xs" borderRadius="$md" onPress={onAdd}>
        <ButtonText>Add</ButtonText>
        <ButtonIcon as={AddIcon} />
      </Button>
    </Input>
  );
};

export default GroceryInput;
