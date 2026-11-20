import { DreamGraphPath } from '@/utils/types/dreamgraph-props';
import { SkPoint } from 'react-native-skia';

export default function createDreamChartPath(
  pathStartPosition: SkPoint,
  pathEndPosition: SkPoint,
  strength: number,
  colour: string,
  shape?: 'normal' | 'dashed' | 'discreted',
  strokeWidth?: number
): DreamGraphPath {
  return {
    pathStartPosition: pathStartPosition,
    pathEndPosition: pathEndPosition,
    strength: strength,
    colour: colour,
    shape: shape,
    strokeWidth: strokeWidth
  };
}
