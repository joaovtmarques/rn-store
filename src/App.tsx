import React from 'react';
import {SafeAreaView} from 'react-native';

// import Splash from './screens/Splash';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
// import ForgotPassword from './screens/ForgotPassword';
import PhoneVerification from './screens/PhoneVerification';

export default function App() {
  return (
    <SafeAreaView>
      <PhoneVerification />
    </SafeAreaView>
  );
}
