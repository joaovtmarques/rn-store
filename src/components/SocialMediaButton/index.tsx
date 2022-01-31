import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

type IButton = {
  Icon: any;
};

export default function SocialMediaButton({Icon}: IButton) {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon />
    </TouchableOpacity>
  );
}
