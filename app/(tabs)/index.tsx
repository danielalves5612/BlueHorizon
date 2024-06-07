import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PortoScreen from '../../components/PortoScreen';

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <PortoScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IndexScreen;
