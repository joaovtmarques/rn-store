import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type ISignUpAndInButton = {
  styleButton: object;
  styleText: object;
  title: string;
  visible: boolean;
  disabled: boolean;
};

import Icon from '../assets/icons/IC/24/chevronRightWhite.svg';

export default function SignUpAndInButton({
  styleButton,
  styleText,
  title,
  visible,
  disabled,
}: ISignUpAndInButton) {
  return (
    <TouchableOpacity disabled={disabled} style={styleButton}>
      <Text style={styleText}>{title}</Text>
      {visible ? <Icon /> : null}
    </TouchableOpacity>
  );
}
