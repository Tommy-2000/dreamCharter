import { useContext } from 'react';
import { DreamGraphContext } from './use-dreamgraph-provider';

export const useDreamGraphContext = () => {
  const dreamGraphContext = useContext(DreamGraphContext);

  // The context object obtained from the hook SHOULD NOT be null or undefined
  if (dreamGraphContext === null || undefined) {
    throw Error(
      'DreamGraphContext is missing or undefined, please try again later'
    );
  }
  return dreamGraphContext;
};
