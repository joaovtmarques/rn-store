import React from 'react';
import {TextInput, View} from 'react-native';

import {styles} from './styles';
import {colors, fonts} from '../../utils';

type IInput = {
  Icon?: any;
  value: any;
  secure?: boolean;
  content: boolean;
  onChangeText: any;
  placeholder: string;
};

export default function Input({
  Icon,
  placeholder,
  secure,
  value,
  onChangeText,
  content,
}: IInput) {
  return (
    <View style={styles.input}>
      <Icon style={styles.icon} />
      <TextInput
        style={
          content
            ? styles.textInput
            : [
                styles.input,
                {
                  fontFamily: fonts.textRegular,
                  color: colors.labelBlack30,
                },
              ]
        }
        placeholder={placeholder}
        placeholderTextColor={colors.labelBlack30}
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
      />
    </View>
  );
}
