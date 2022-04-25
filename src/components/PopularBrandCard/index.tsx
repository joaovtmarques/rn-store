import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

type IPopularBrandCard = {
  Icon: any;
  title: string;
};

export default function PopularBrandCard({Icon, title}: IPopularBrandCard) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.all601Text}>All 601</Text>
      </View>
    </View>
  );
}
