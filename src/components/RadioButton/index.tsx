import React from 'react';
import {TouchableOpacity} from 'react-native';

type IRadioButton = {
  onPress: any;
  style: object;
  visible: boolean;
};

import Icon from '../../assets/icons/IC/24/checkOn.svg';
import {styles} from './styles';

export default function RadioButton({onPress, visible}: IRadioButton) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButton}>
      {visible ? <Icon /> : null}
    </TouchableOpacity>
  );
}
