import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

type IButton = {
  title: string;
  backColor: string;
  textColor: string;
};

export default function Button({title, backColor, textColor}: IButton) {
  return (
    <TouchableOpacity style={[{backgroundColor: backColor}, styles.button]}>
      <Text style={[{color: textColor}, styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
}
