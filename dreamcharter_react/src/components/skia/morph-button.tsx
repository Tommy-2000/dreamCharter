import React, { ReactNode } from 'react';
import { useTapGesture } from 'react-native-gesture-handler';
import {
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import {
  AnimatedProp,
  Box,
  BoxShadow,
  FitBox,
  mix,
  rect,
  rrect
} from 'react-native-skia';
import { SkiaGestureCanvas } from './skia-gesture-canvas';

const buttonContainer = rect(0, 0, 24, 24);
const buttonOuterFrame = rrect(buttonContainer, 5, 5);
const buttonInnerFrame = rrect(rect(0, 0, 24, 24), 5, 5);

interface MorphButtonProps {
  x: number;
  y: number;
  height: number;
  width: number;
  outerShadowBlur: AnimatedProp<number>;
  innerShadowBlur: AnimatedProp<number>;
  children: ReactNode | ReactNode[];
}

export const MorphButton = React.memo(
  ({
    x,
    y,
    height,
    width,
    outerShadowBlur,
    innerShadowBlur,
    children
  }: MorphButtonProps) => {
    const buttonTapped = useSharedValue(0);

    const tapButton = useTapGesture({
      numberOfTaps: buttonTapped,
      onActivate: () => {
        withTiming(buttonTapped.value, { duration: 150 });
      },
      onDeactivate: () => {
        withTiming(buttonTapped.value, { duration: 150 });
      }
    });

    const pressedOuter = useDerivedValue(
      () => `rgba(255,255,255, ${mix(buttonTapped.value, 0, 0.8)}})`,
      [buttonTapped]
    );

    const pressedInner = useDerivedValue(
      () => `rgba(174, 175, 192, ${mix(buttonTapped.value, 0, 0.8)})`,
      [buttonTapped]
    );

    return (
      <SkiaGestureCanvas gesture={tapButton}>
        <FitBox src={buttonContainer} dst={rect(x, y, height, width)}>
          <Box box={buttonOuterFrame}>
            <BoxShadow
              dx={-1}
              dy={-1}
              blur={outerShadowBlur}
              color={pressedOuter}
            />
            <BoxShadow
              dx={1}
              dy={1}
              blur={outerShadowBlur}
              color={pressedOuter}
            />
          </Box>
          <Box box={buttonInnerFrame}>
            <BoxShadow
              dx={-1}
              dy={-1}
              blur={innerShadowBlur}
              color={pressedInner}
            />
            <BoxShadow
              dx={-1}
              dy={-1}
              blur={innerShadowBlur}
              color={pressedInner}
            />
          </Box>
          {children}
        </FitBox>
      </SkiaGestureCanvas>
    );
  }
);
