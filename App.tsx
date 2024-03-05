import React from 'react';
import {Navigation} from './src/navigation';
import {rootStore, RootStoreContext} from './src/stores';

const App = () => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <Navigation />
    </RootStoreContext.Provider>
  );
};

export default App;
