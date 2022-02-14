import React from 'react';
import {Text, View} from 'react-native';

import {TopTab} from '../../navigation';

import {styles} from './styles';
import {globalStyles} from '../../utils/styles/global.styles';

export default function Today() {
  return (
    <>
      <View>
        <Text>Today</Text>
      </View>
      <TopTab />
    </>
  );
}
