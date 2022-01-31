import React from 'react';
import {SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Splash from './screens/Splash';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import ForgotPassword from './screens/ForgotPassword';

export default function App() {
  return (
    <SafeAreaView>
      <ForgotPassword />
    </SafeAreaView>
  );
}
