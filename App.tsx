import React from 'react';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';

import {Provider} from 'react-redux';

import store from './src/store';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </PaperProvider>
  );
}

export default App;
