import React from 'react';
import {TouchableOpacity} from 'react-native';

type IButton = {
  style: object;
  Icon: any;
};

export default function SocialMediaButton({style, Icon}: IButton) {
  return (
    <TouchableOpacity style={style}>
      <Icon />
    </TouchableOpacity>
  );
}
