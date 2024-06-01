import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import LoginScreen from '../../components/LoginScreen';

type RootStackParamList = {
  Login: undefined;
  Porto: undefined;
};

type ExploreScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type ExploreScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: ExploreScreenNavigationProp;
  route: ExploreScreenRouteProp;
};

const ExploreScreen: React.FC<Props> = ({ navigation, route }) => {
  return <LoginScreen navigation={navigation} route={route} />;
};

export default ExploreScreen;
