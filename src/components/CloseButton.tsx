import React from 'react';
import {TouchableOpacity} from 'react-native';

import CloseIcon from '../assets/icons/IC/24/close.svg';

type IButton = {
  style: object;
};

export default function CloseButton({style}: IButton) {
  return (
    <TouchableOpacity style={style}>
      <CloseIcon />
    </TouchableOpacity>
  );
}
