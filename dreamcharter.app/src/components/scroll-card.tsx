import { PropsWithChildren } from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { Card } from './card';

export interface ScrollCardProps extends PropsWithChildren {
  style: StyleProp<Readonly<Partial<ViewStyle>>> | undefined;
  contentInset:
    | Readonly<{
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
      }>
    | undefined;
  contentContainerStyle: StyleProp<Readonly<Partial<ViewStyle>>> | undefined;
}

export default function ScrollCard({
  style,
  contentInset,
  contentContainerStyle,
  children
}: ScrollCardProps) {
  return (
    <Card style={style}>
      <ScrollView
        contentInset={contentInset}
        contentContainerStyle={contentContainerStyle}>
        {children}
      </ScrollView>
    </Card>
  );
}
