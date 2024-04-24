/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Config from 'react-native-config';

async function enableMocking() {
  if (Config.APP_ENV !== 'test') {
    return;
  }

  await import('./msw.polyfills');
  const {server} = await import('./src/__mock__/server');
  server.listen();
}

AppRegistry.registerComponent(appName, () => App);

enableMocking().then(() => {
  AppRegistry.registerComponent(appName, () => App);
});
