import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type ISignUpAndInButton = {
  styleButton: object;
  styleText: object;
  title: string;
};

export default function SignUpAndInButton({
  styleButton,
  styleText,
  title,
}: ISignUpAndInButton) {
  return (
    <TouchableOpacity style={styleButton}>
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
}
