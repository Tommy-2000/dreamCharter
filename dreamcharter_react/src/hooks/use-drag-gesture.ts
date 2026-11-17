import { useMemo } from 'react';
import {
    useHoverGesture,
    usePanGesture,
    useSimultaneousGestures
} from 'react-native-gesture-handler';
import { SharedValue } from 'react-native-reanimated';

export const useDragGesture = (
  gestureX: SharedValue<number>,
  gestureY: SharedValue<number>,
  offsetX: SharedValue<number>,
  offsetY: SharedValue<number>,
  activated: boolean,
  removeOnFinished?: boolean
) => {
  return useMemo(() => {
    const hoverGesture = useHoverGesture({
      enabled: activated,
      activeCursor: 'pointer',
      onActivate: pos => {
        gestureX.value = pos.x - offsetX.value;
        gestureY.value = pos.y - offsetY.value;
      },
      onUpdate: pos => {
        gestureX.value = pos.x - offsetX.value;
        gestureY.value = pos.y - offsetY.value;
      },
      onDeactivate: pos => {
        gestureX.value = pos.x - offsetX.value;
        gestureY.value = pos.y - offsetY.value;
        if (removeOnFinished) {
          gestureX.value = Infinity;
          gestureY.value = Infinity;
        }
      }
    });

    const panGesture = usePanGesture({
      onActivate: pos => {
        gestureX.value = pos.x - offsetX.value;
        gestureY.value = pos.y - offsetY.value;
      },
      onUpdate: pos => {
        gestureX.value = pos.x - offsetX.value;
        gestureY.value = pos.y - offsetY.value;
      },
      onDeactivate: pos => {
        gestureX.value = pos.x - offsetX.value;
        gestureY.value = pos.y - offsetY.value;
        if (removeOnFinished) {
          gestureX.value = Infinity;
          gestureY.value = Infinity;
        }
      }
    });

    const composedGesture = useSimultaneousGestures(hoverGesture, panGesture);
    return composedGesture;
  }, [activated, gestureX, gestureY, offsetX, offsetY, removeOnFinished]);
};
