import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

type IButton = {
  title: string;
  backColor: string;
  textColor: string;
  onPress?: any;
};

export default function Button({
  title,
  backColor,
  textColor,
  onPress,
}: IButton) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{backgroundColor: backColor}, styles.button]}>
      <Text style={[{color: textColor}, styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
}
