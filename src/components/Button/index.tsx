import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type IButton = {
  title: string;
  visible: boolean;
  disabled: boolean;
  content: boolean;
  onPress: any;
};

import Icon from '../../assets/icons/IC/24/chevronRightWhite.svg';
import {colors} from '../../utils';
import {styles} from './styles';

export default function SignUpAndInButton({
  title,
  visible,
  disabled,
  content,
  onPress,
}: IButton) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={
        content
          ? styles.button
          : [styles.button, {backgroundColor: colors.labelWhite100}]
      }>
      <Text
        style={
          content
            ? styles.textButton
            : [styles.textButton, {color: colors.labelBlack60, marginRight: 0}]
        }>
        {title}
      </Text>
      {visible ? <Icon /> : null}
    </TouchableOpacity>
  );
}
