import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import ExploreScreen from './explore';
import IndexScreen from './index';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Explore"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap | undefined;

            if (route.name === 'Explore') {
              iconName = 'compass';
            } else if (route.name === 'Index') {
              iconName = 'list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen 
          name="Explore" 
          component={ExploreScreen} 
        />
        <Tab.Screen 
          name="Index" 
          component={IndexScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
