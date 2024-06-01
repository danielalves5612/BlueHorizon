import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import PortoScreen from '../../components/PortoScreen';

type RootStackParamList = {
  Login: undefined;
  Porto: undefined;
};

type IndexScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Porto'>;
type IndexScreenRouteProp = RouteProp<RootStackParamList, 'Porto'>;

type Props = {
  navigation: IndexScreenNavigationProp;
  route: IndexScreenRouteProp;
};

const IndexScreen: React.FC<Props> = ({ navigation, route }) => {
  return <PortoScreen navigation={navigation} route={route} />;
};

export default IndexScreen;
