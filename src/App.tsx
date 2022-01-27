import React from 'react';
import {SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Splash from './screens/Splash';

EStyleSheet.build({
  $pVertical: '4rem',
  $pHorizontal: '1.875rem',
});

export default function App() {
  return (
    <SafeAreaView>
      <Splash />
    </SafeAreaView>
  );
}
