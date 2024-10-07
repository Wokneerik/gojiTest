import {Spinner, View} from '@gluestack-ui/themed';
import {FC} from 'react';
import {FlatList} from 'react-native';

import {useGroceryListQuery} from '../../hooks';
import {GroceryItemState} from '../../types';
import GroceryItem from '../GroceryItem';

type GroceryListProps = {
  state: GroceryItemState;
};

const GroceryList: FC<GroceryListProps> = ({state}) => {
  const {data, isLoading, isSuccess} = useGroceryListQuery(state);

  if (isLoading) return <Spinner size="large" color="$amber600" />;

  return (
    <>
      {isSuccess && (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <GroceryItem groceryItem={item} />}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
        />
      )}
    </>
  );
};

export default GroceryList;
