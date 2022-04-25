import React from 'react';
import {Text, ImageBackground, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

import imgCard from '../../assets/img.png';

export default function Card() {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={imgCard} style={styles.image}>
        <View>
          <Text style={styles.textNewIn}>New in</Text>
          <Text style={styles.textNike}>
            {'Nike SB Janoski QS Turbo\nGreen Tie Dye Skate Shoes'}
          </Text>
          <Text style={styles.textPrice}>$89.95 USD</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
