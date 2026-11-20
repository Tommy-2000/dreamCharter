import { PropsWithChildren } from 'react';
import {
  ComposedGesture,
  GestureDetector,
  GestureHandlerRootView
} from 'react-native-gesture-handler';
import {
  TouchAction,
  UserSelect
} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
import { CanvasProps } from 'react-native-skia';
import { SkiaCanvas } from './skia-canvas';

export function SkiaGestureCanvas({
  ref,
  style,
  gesture,
  userSelect,
  enableContextMenu,
  touchAction,
  children
}: {
  gesture: ComposedGesture;
  userSelect?: UserSelect | undefined; // userSelect, enableContextMenu and touchAction are web-only gesture properties
  enableContextMenu?: boolean | undefined;
  touchAction?: TouchAction;
} & CanvasProps &
  PropsWithChildren) {
  return (
    <>
      <GestureHandlerRootView>
        <GestureDetector
          gesture={gesture}
          userSelect={userSelect}
          enableContextMenu={enableContextMenu}
          touchAction={touchAction}>
          <SkiaCanvas ref={ref} style={style}>
            {children}
          </SkiaCanvas>
        </GestureDetector>
      </GestureHandlerRootView>
    </>
  );
}
