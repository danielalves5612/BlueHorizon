import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ThemedText from '../components/ThemedText'; 

const Collapsible = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapsed}>
        <ThemedText style={styles.header}>Toggle</ThemedText>
      </TouchableOpacity>
      {!collapsed && (
        <View style={styles.content}>
          <Text>Content goes here</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default Collapsible;
