import React from 'react';
import {TextInput, View} from 'react-native';
import {colors} from '../../utils';

import {styles} from './styles';

type ICodeInput = {
  focus?: boolean;
  onChange: any;
  value: string;
};

export default function CodeInput({focus, onChange, value}: ICodeInput) {
  return (
    <View
      style={
        value
          ? [
              styles.container,
              {
                borderColor: colors.labelBlack100,
                backgroundColor: colors.labelWhite100,
              },
            ]
          : styles.container
      }>
      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        maxLength={1}
        caretHidden
        returnKeyType="next"
        autoFocus={focus}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
}
