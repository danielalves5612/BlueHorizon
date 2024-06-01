import React, { ReactNode } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

type ParallaxScrollViewProps = {
  children: ReactNode;
};

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({ children }) => {
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ParallaxScrollView;
