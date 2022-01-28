import React from 'react';
import {SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// import Splash from './screens/Splash';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

EStyleSheet.build({
  $pBottom: '1.25rem',
  $pVertical: '4rem',
  $pHorizontal: '1.875rem',
});

export default function App() {
  return (
    <SafeAreaView>
      <SignUp />
    </SafeAreaView>
  );
}
