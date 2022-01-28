import React from 'react';
import {TextInput, View} from 'react-native';

type IInput = {
  style: object;
  Icon: any;
  iconStyle: object;
  textInputStyle: object;
  placeholder: string;
  placeholderTextColor: string;
  secure?: boolean;
  value: any;
  onChangeText: any;
};

export default function Input({
  style,
  Icon,
  iconStyle,
  textInputStyle,
  placeholder,
  placeholderTextColor,
  secure,
  value,
  onChangeText,
}: IInput) {
  return (
    <View style={style}>
      <Icon style={iconStyle} />
      <TextInput
        style={textInputStyle}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
      />
    </View>
  );
}
