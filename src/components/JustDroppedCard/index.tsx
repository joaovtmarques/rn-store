import React from 'react';
import {ImageBackground, TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

import {View} from 'react-native-animatable';

type IJustDroppedCard = {
  props: {
    image: any;
    icon: any;
    title: string;
    price: string;
  };
};

export default function JustDroppedCard({props}: IJustDroppedCard) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={props.image}
          style={styles.image}
          resizeMode="contain">
          <props.icon />
        </ImageBackground>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.lowestAskText}>Lowest Ask</Text>
        <Text style={styles.priceText}>${props.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
