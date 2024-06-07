import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../components/LoginScreen';
import RegisterScreen from '../../components/RegisterScreen';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const ExploreScreen: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default ExploreScreen;
