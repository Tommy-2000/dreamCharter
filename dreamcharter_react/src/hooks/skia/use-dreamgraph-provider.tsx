import {
  DreamGraphContextProps,
  DreamGraphLink,
  DreamGraphNode,
  DreamGraphPath,
  DreamGraphState
} from '@/utils/types/dreamgraph-props';
import React, { PropsWithChildren, useMemo } from 'react';
import { size, SkColor, Skia } from 'react-native-skia';

// Think of a way to use a SkMatrix as an adjecency matrix and translate it into a Skia graph
// What algorithm works best for finding the closest distance?
// Matrix first, then render the graph
// Is every node in the graph connected? Or can you allow nodes that are not connected?

const createDreamGraphProviderValue = (): DreamGraphContextProps => {
  const dreamGraphState: DreamGraphState = {
    links: [],
    hasLinks: false,
    backgroundColor: Skia.Color('#ffffff'),
    size: size(24, 24)
  };

  const dreamGraphListeners = [] as ((
    dreamGraphState: DreamGraphState
  ) => void)[];
  const notifyDreamGraphListeners = (dreamChartState: DreamGraphState) =>
    dreamGraphListeners.forEach(l => l(dreamChartState));

  const dreamGraphCommands = {
    addLink: (
      currentNode: DreamGraphNode,
      nextNode: DreamGraphNode,
      path: DreamGraphPath
    ) => {
      dreamGraphState.links.forEach((stateLink: DreamGraphLink) => {
        // If the link doesn't exist with the same nodes and path in state then add it to the state
        if (
          stateLink.currentNode !== currentNode &&
          stateLink.nextNode !== nextNode &&
          stateLink.path !== path
        ) {
          dreamGraphState.links.push({ currentNode, nextNode, path });
        }
      });
      notifyDreamGraphListeners(dreamGraphState);
    },
    setCurrentNodeInAllLinks: (currentNode: DreamGraphNode) => {
      dreamGraphState.links.map(link => {
        if (currentNode !== link.currentNode) {
          link.currentNode = currentNode;
        }
      });
      notifyDreamGraphListeners(dreamGraphState);
    },
    setNextNodeInAllLinks: (nextNode: DreamGraphNode) => {
      dreamGraphState.links.map(link => {
        if (nextNode !== link.nextNode) {
          link.nextNode = nextNode;
        }
      });
      notifyDreamGraphListeners(dreamGraphState);
    },
    setPathInAllLinks: (path: DreamGraphPath) => {
      dreamGraphState.links.map(link => {
        if (path !== link.path) {
          link.path = path;
        }
      });
      notifyDreamGraphListeners(dreamGraphState);
    },
    findNodeInLinks: (inputNode: DreamGraphNode) => {
      dreamGraphState.links.map(link => {
        if (
          link.currentNode.position.x === inputNode.position.x &&
          link.currentNode.position.y === inputNode.position.y
        ) {
          return link.currentNode;
        } else if (
          link.nextNode.position.x === inputNode.position.x &&
          link.nextNode.position.y
        ) {
          return link.nextNode;
        }
      });
    },
    checkIfLinksExist: (): boolean => {
      if (dreamGraphState.links.length == 0) {
        dreamGraphState.hasLinks = false;
        notifyDreamGraphListeners(dreamGraphState);
        return dreamGraphState.hasLinks;
      } else {
        dreamGraphState.hasLinks = true;
        notifyDreamGraphListeners(dreamGraphState);
        return dreamGraphState.hasLinks;
      }
    },
    setBackgroundColor: (backgroundColor: SkColor) => {
      dreamGraphState.backgroundColor = backgroundColor;
      notifyDreamGraphListeners(dreamGraphState);
    },
    deleteSelectedLinks: () => {
      dreamGraphState.links.filter(l => !dreamGraphState.links.includes(l));
      dreamGraphState.links = [];
      notifyDreamGraphListeners(dreamGraphState);
    },
    deleteAllLinks: () => {
      dreamGraphState.links = [];
      notifyDreamGraphListeners(dreamGraphState);
    }
  };
  return {
    state: dreamGraphState,
    commands: dreamGraphCommands,
    addListener: (cds: (dreamGraphState: DreamGraphState) => void) => {
      dreamGraphListeners.push(cds);
      return () =>
        dreamGraphListeners.splice(dreamGraphListeners.indexOf(cds), 1);
    }
  };
};

export const DreamGraphContext = React.createContext<DreamGraphContextProps>(
  createDreamGraphProviderValue()
);

export const useDreamGraphProvider = () => {
  const contextValue = useMemo(() => createDreamGraphProviderValue(), []);
  const dreamGraphProviderComponent = ({ children }: PropsWithChildren) => (
    <DreamGraphContext.Provider value={contextValue}>
      {children}
    </DreamGraphContext.Provider>
  );
  return dreamGraphProviderComponent;
};
