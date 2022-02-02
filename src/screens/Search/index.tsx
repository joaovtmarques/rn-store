import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../utils/styles/global.styles';

// import { Container } from './styles';

export default function Search() {
  return (
    <View style={globalStyles.container}>
      <View>
        <Text style={globalStyles.text28Bold}>Search</Text>
      </View>
    </View>
  );
}
