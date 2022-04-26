import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainTab} from './';
import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import PhoneVerification from '../screens/PhoneVerification';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
}
