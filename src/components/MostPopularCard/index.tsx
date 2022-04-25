import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';

import {styles} from './styles';

type IMostPopularCard = {
  props: {
    image: any;
    Icon: any;
    title: string;
    price: string;
  };
};

export default function MostPopularCard({props}: IMostPopularCard) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={props.image} />
      </View>
      <View>
        <props.Icon />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.lowestAskText}>Lowest ask</Text>
        <Text style={styles.priceText}>${props.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
