import {createContext, useContext} from 'react';
import {RootStore} from './RootStore';

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStore = () => {
  const context = useContext(RootStoreContext);

  if (context === null) {
    throw new Error('Store is empty');
  }

  return context;
};
