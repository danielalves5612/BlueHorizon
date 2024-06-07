import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from './explore';
import IndexScreen from './index';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
