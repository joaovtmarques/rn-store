import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {MainTab, MainStack, RootStackParamList} from './navigation';

import EStyleSheet from 'react-native-extended-stylesheet';
import {sizes} from './utils';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* <MainStack /> */}
        <MainTab />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = EStyleSheet.create({
  container: {
    height: sizes.height,
    width: sizes.width,
  },
});
