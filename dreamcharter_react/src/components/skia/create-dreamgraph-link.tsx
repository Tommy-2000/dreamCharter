import {
  DreamGraphLink,
  DreamGraphNode,
  DreamGraphPath
} from '@/utils/types/dreamgraph-props';
import createDreamGraphNode from './create-dreamgraph-node';
import createDreamChartPath from './create-dreamgraph-path';

export default function createDreamGraphLink(
  {
    position: currentNodePosition,
    radius: currentNodeRadius,
    colour: currentNodeColor
  }: DreamGraphNode,
  {
    position: nextNodePosition,
    radius: nextNodeRadius,
    colour: nextNodeColor
  }: DreamGraphNode,
  {
    pathStartPosition: currentNodePathPosition,
    pathEndPosition: nextNodePathPosition,
    strength: pathStrength,
    colour: pathColour,
    shape: pathShape,
    strokeWidth: pathStrokeWidth
  }: DreamGraphPath
): DreamGraphLink {
  const currentDGNode = createDreamGraphNode(
    currentNodePosition,
    currentNodeRadius,
    currentNodeColor
  );
  const nextDGNode = createDreamGraphNode(
    nextNodePosition,
    nextNodeRadius,
    nextNodeColor
  );
  const linkedPath = createDreamChartPath(
    currentNodePathPosition,
    nextNodePathPosition,
    pathStrength,
    pathColour,
    pathShape,
    pathStrokeWidth
  );

  return {
    currentNode: currentDGNode,
    nextNode: nextDGNode,
    path: linkedPath
  };
}
