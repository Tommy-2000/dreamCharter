import { SkPoint } from 'react-native-skia';
import { DreamGraphLinks, DreamGraphPath } from './types/dreamgraph-props';

export function GetResultsFromLinks(links: DreamGraphLinks) {}

export function CreateGraphFromLinks(links: DreamGraphLinks) {}

export function CreateSkMatrixFromArray(array: []) {}

export function FindNextNodeInLinks(skPoint: SkPoint, links: DreamGraphLinks) {
  if (links.length === 0) {
    return undefined;
  }

  for (let i = links.length - 1; i >= 0; i--) {
    if (
      links[i].nextNode.position.x === skPoint.x &&
      links[i].nextNode.position.y === skPoint.y
    ) {
      return links[i].nextNode;
    }
  }
}

export function FindConnectedPathInLinks(
  path: DreamGraphPath,
  links: DreamGraphLinks
) {}

export function DjikstrasGraphSearch(links: DreamGraphLinks) {
  let visitedGraph: DreamGraphLinks = [];
  let i, j, k: number;

  // for (i = 0; i < links.length; i++) {
  //   for (j = 0; j < links.length; j++) {}
  // }
}

export function FloydWarshallGraphSearch(
  skPoint: SkPoint,
  links: DreamGraphLinks
) {}

export function DisjointSetUnionGraphSearch(
  skPoint: SkPoint,
  links: DreamGraphLinks
) {}
