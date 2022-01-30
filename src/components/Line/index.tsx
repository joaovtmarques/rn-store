import React from 'react';
import {View} from 'react-native';

type ILine = {
  style: object;
};

export default function Line({style}: ILine) {
  return <View style={style} />;
}
