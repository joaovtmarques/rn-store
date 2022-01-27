import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type IButton = {
  title: string;
  color: string;
  button: object;
  text: object;
  textColor: string;
};

export default function Button({
  title,
  button,
  color,
  text,
  textColor,
}: IButton) {
  return (
    <TouchableOpacity style={[{backgroundColor: color}, button]}>
      <Text style={[{color: textColor}, text]}>{title}</Text>
    </TouchableOpacity>
  );
}
