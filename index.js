/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $padding: '2.625rem',
  // $padding: '1.25rem',
  $pVertical: '4rem',
  $pHorizontal: '1.875rem',
});

AppRegistry.registerComponent(appName, () => App);
