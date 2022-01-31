import React from 'react';
import {TouchableOpacity} from 'react-native';

import {styles} from './styles';

import CloseIcon from '../../assets/icons/IC/24/close.svg';

export default function CloseButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <CloseIcon />
    </TouchableOpacity>
  );
}
