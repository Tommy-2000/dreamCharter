import { View, type ViewProps } from 'react-native';

import { useTheme } from '@/hooks/use-theme';
import { ThemeColor } from '@/utils/theme';

export type CardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
};

export function Card({
  style,
  lightColor,
  darkColor,
  type,
  ...otherProps
}: CardProps) {
  const theme = useTheme();

  return (
    <View
      style={[{ backgroundColor: theme[type ?? 'background'] }, style]}
      {...otherProps}
    />
  );
}
