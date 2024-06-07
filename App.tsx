import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from './app/(tabs)/explore';
import LoginScreen from './components/LoginScreen';
import PortoScreen from './components/PortoScreen';
import RegisterScreen from './components/RegisterScreen';

type RootStackParamList = {
  Explore: undefined;
  Login: undefined;
  Porto: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Porto" component={PortoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
