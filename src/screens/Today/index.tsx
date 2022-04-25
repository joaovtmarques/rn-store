import React from 'react';
import {Text, View} from 'react-native';

import {TopTab} from '../../navigation';

import {styles} from './styles';

export default function Today() {
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.title}>Today</Text>
      </View>
      <TopTab />
    </>
  );
}
