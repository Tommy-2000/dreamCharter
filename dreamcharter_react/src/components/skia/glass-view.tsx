import React, { ReactNode } from 'react';
import {
  BackdropBlur,
  Canvas,
  Fill,
  Group,
  rect,
  useCanvasSize
} from 'react-native-skia';

interface GlassViewProps {
  children: ReactNode | ReactNode[];
}

export const GlassView = React.memo(({ children }: GlassViewProps) => {
  const {
    size: { width, height },
    onLayout
  } = useCanvasSize();

  return (
    <Canvas style={{ flex: 3 }}>
      <Fill color="white" />
      <Group>
        {children}
        <BackdropBlur blur={4} clip={rect(0, 0, 24, 24)}></BackdropBlur>
      </Group>
    </Canvas>
  );
});
