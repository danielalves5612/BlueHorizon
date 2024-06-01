import React from 'react';
import { Text, TextProps } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor'; 

type Props = TextProps & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedText: React.FC<Props> = ({ style, lightColor, darkColor, ...otherProps }) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  return <Text style={[{ color }, style]} {...otherProps} />;
};

export default ThemedText;
