import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {FC} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CompletedScreen from '../screens/CompletedScreen';
import HomedScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#181818',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomedScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={focused ? 30 : 25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CompletedScreen"
        component={CompletedScreen}
        options={{
          tabBarLabel: 'Completed',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="check-circle"
              color={color}
              size={focused ? 30 : 25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
