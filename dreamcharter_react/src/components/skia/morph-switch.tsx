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
  Group,
  mix,
  rect,
  rrect
} from 'react-native-skia';
import { SkiaGestureCanvas } from './skia-gesture-canvas';

const buttonContainer = rect(0, 0, 24, 24);
const buttonOuterFrame = rrect(buttonContainer, 5, 5);
const buttonInnerFrame = rrect(rect(0, 0, 24, 24), 5, 5);
const buttonDot = rrect(rect(6, 6, 12, 12), 12, 12);

interface MorphSwitchProps {
  x: number;
  y: number;
  size: number;
  outerShadowBlur: AnimatedProp<number>;
  innerShadowBlur: AnimatedProp<number>;
}

export default function MorphSwitch({
  x,
  y,
  size,
  outerShadowBlur,
  innerShadowBlur
}: MorphSwitchProps) {
  const switchTapped = useSharedValue(0);

  const tapSwitch = useTapGesture({
    numberOfTaps: switchTapped,
    onFinalize: () => {
      withTiming(switchTapped.value === 1 ? 0 : 1, { duration: 150 });
    }
  });

  const transformSwitch = useDerivedValue(
    () => [{ translateX: mix(switchTapped.value, 0, 24) }],
    [switchTapped]
  );

  return (
    <SkiaGestureCanvas gesture={tapSwitch}>
      <FitBox src={buttonContainer} dst={rect(x, y, size, size)}>
        <Box box={buttonOuterFrame}>
          <BoxShadow
            dx={-1}
            dy={-1}
            blur={outerShadowBlur}
            color="rgba(255,255,255, 0.7)"
          />
          <BoxShadow
            dx={1}
            dy={1}
            blur={outerShadowBlur}
            color="rgba(174,174,192, 0.2)"
          />
        </Box>
        <Box box={buttonInnerFrame}>
          <BoxShadow
            dx={-1}
            dy={-1}
            blur={innerShadowBlur}
            color="rgba(255,255,255, 0.7)"
          />
          <BoxShadow
            dx={-1}
            dy={-1}
            blur={innerShadowBlur}
            color="rgba(174,174,192, 0.2)"
          />
        </Box>
        <Group transform={transformSwitch}>
          <Box box={buttonDot} color="white">
            <BoxShadow
              dx={-1}
              dy={-1}
              blur={3}
              color="rgba(255,255,255, 0.7)"
            />
            <BoxShadow dx={1} dy={1} blur={3} color="rgba(174,174,192, 0.2)" />
          </Box>
        </Group>
      </FitBox>
    </SkiaGestureCanvas>
  );
}
