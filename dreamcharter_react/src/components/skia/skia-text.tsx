import { AnimatedProp, SkFont, Text } from 'react-native-skia';

interface SkiaTextProps {
  skFont: SkFont | null;
  skText: AnimatedProp<string>;
}

export default function SkiaText({ skFont, skText }: SkiaTextProps) {
  return <Text font={skFont} text={skText} />;
}
