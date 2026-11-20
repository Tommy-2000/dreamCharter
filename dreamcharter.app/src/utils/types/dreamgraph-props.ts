import { SkColor, SkPoint, SkSize } from 'react-native-skia';

export type DreamGraphNode = {
  position: SkPoint;
  radius: number;
  colour: string;
};

export type DreamGraphPath = {
  pathStartPosition: SkPoint;
  pathEndPosition: SkPoint;
  strength: number;
  colour: string;
  shape?: 'normal' | 'dashed' | 'discreted';
  strokeWidth?: number;
};

export type DreamGraphLink = {
  currentNode: DreamGraphNode;
  nextNode: DreamGraphNode;
  path: DreamGraphPath;
};

export type DreamGraphLinks = DreamGraphLink[];

export type DreamGraphState = {
  links: DreamGraphLinks;
  backgroundColor: SkColor;
  size: SkSize;
  hasLinks: boolean;
};

export type DreamGraphCommands = {
  addLink: (
    currentNode: DreamGraphNode,
    nextNode: DreamGraphNode,
    path: DreamGraphPath
  ) => void;
  setCurrentNodeInAllLinks: (currentNode: DreamGraphNode) => void;
  setNextNodeInAllLinks: (nextNode: DreamGraphNode) => void;
  setPathInAllLinks: (path: DreamGraphPath) => void;
  checkIfLinksExist: () => boolean;
  setBackgroundColor: (backgroundColor: SkColor) => void;
  deleteSelectedLinks: () => void;
  deleteAllLinks: () => void;
};

export interface DreamGraphContextProps {
  state: DreamGraphState;
  commands: DreamGraphCommands;
  addListener: (
    graphListener: (dreamGraphState: DreamGraphState) => void
  ) => () => void;
}
