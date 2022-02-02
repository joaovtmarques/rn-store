import React from 'react';
import {TouchableOpacity} from 'react-native';

import {styles} from './styles';

import CloseIcon from '../../assets/icons/IC/24/close.svg';

type ICloseButton = {
  onPress: any;
};

export default function CloseButton({onPress}: ICloseButton) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <CloseIcon />
    </TouchableOpacity>
  );
}
