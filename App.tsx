import React from 'react';
import {Navigation} from './src/navigation';
import {RootStore, RootStoreContext} from './src/stores';

const App = () => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <Navigation />
    </RootStoreContext.Provider>
  );
};

export default App;
