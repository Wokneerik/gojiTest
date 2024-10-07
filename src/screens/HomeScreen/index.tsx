import {View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import Greeting from '../../components/Greeting';
import GroceryInput from '../../components/GroceryInput';
import GroceryList from '../../components/GroceryList';
import SafeAreaWrapper from '../../components/SafeAreaWrapper';

const HomeScreen: FC = () => {
  return (
    <SafeAreaWrapper>
      <View p="$4">
        <Greeting />
        <View p="$4" />
        <GroceryInput />
        <View p="$4" />
        <GroceryList state={'all'} />
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
