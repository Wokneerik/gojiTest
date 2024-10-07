import {Text, View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import GroceryList from '../../components/GroceryList';
import SafeAreaWrapper from '../../components/SafeAreaWrapper';

const CompletedScreen: FC = () => {
  return (
    <SafeAreaWrapper>
      <View p="$4">
        <Text size="2xl" fontWeight="500" color="white">
          Purchased item
        </Text>
        <Text size="2xl" fontWeight="500" color="white">
          {}
        </Text>
        <View p="$4" />
        <GroceryList state={'completed'} />
      </View>
    </SafeAreaWrapper>
  );
};

export default CompletedScreen;
