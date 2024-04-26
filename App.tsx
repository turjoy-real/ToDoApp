import React from 'react';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';

import {Provider} from 'react-redux';

import store from './src/store';

import Config from 'react-native-config';

async function enableMocking(): Promise<void> {
  if (Config.APP_ENV !== 'test') {
    return;
  }

  await import('./msw.polyfills');
  const {server} = await import('./src/__mock__/server');
  server.listen();
}

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    enableMocking().then(() => setLoading(false));
  }, []);

  return (
    !loading && (
      <PaperProvider>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </PaperProvider>
    )
  );
}

export default App;
