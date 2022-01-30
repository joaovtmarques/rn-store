import React from 'react';
import {TouchableOpacity} from 'react-native';

type IRadioButton = {
  onPress: any;
  style: object;
  visible: boolean;
};

import Icon from '../../assets/icons/IC/24/checkOn.svg';

export default function RadioButton({onPress, style, visible}: IRadioButton) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {visible ? <Icon /> : null}
    </TouchableOpacity>
  );
}
