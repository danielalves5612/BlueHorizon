import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors'; 

type ThemeProps = {
  light?: string;
  dark?: string;
};

export function useThemeColor(
  props: ThemeProps,
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme || 'light']; 
  if (colorFromProps) {
    return colorFromProps;
  }

  return Colors[theme || 'light'][colorName];
}
