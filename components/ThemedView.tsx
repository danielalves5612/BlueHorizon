import React from 'react';
import { View, ViewProps } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor'; 

type Props = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedView: React.FC<Props> = ({ style, lightColor, darkColor, ...otherProps }) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default ThemedView;
