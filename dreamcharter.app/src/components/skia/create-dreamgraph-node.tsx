import { DreamGraphNode } from '@/utils/types/dreamgraph-props';
import { SkPoint } from 'react-native-skia';

export default function createDreamChartNode(
  nodePosition: SkPoint,
  nodeRadius: number,
  nodeColor: string
): DreamGraphNode {
  return {
    position: nodePosition,
    radius: nodeRadius,
    colour: nodeColor
  };
}
