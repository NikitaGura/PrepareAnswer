import React from 'react';
import {Navigation} from './src/navigation';
import {rootStore, RootStoreContext} from './src/stores';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootStoreContext.Provider value={rootStore}>
        <Navigation />
      </RootStoreContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
