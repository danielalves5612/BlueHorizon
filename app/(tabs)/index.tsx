import React from 'react';
import { StyleSheet, View } from 'react-native';
import PortoScreen from '../../components/PortoScreen'; // Caminho ajustado para PortoScreen

type IndexScreenProps = {
  navigation: any;
  route: any;
};

const IndexScreen: React.FC<IndexScreenProps> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <PortoScreen navigation={navigation} route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IndexScreen;
