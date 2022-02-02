import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../utils/styles/global.styles';

// import { Container } from './styles';

export default function Today() {
  return (
    <View style={globalStyles.container}>
      <View>
        <Text style={globalStyles.text28Bold}>Today</Text>
      </View>
    </View>
  );
}
