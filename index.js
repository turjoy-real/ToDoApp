/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

async function enableMocking() {
  if (!__DEV__) {
    return;
  }

  await import('./msw.polyfills');
  const {server} = await import('./src/mocks/server');
  server.listen();
}

enableMocking().then(() => {
  AppRegistry.registerComponent(appName, () => App);
});

AppRegistry.registerComponent(appName, () => App);
