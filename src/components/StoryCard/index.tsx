import React from 'react';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import {styles} from './styles';

type IStoryCard = {
  props: {
    image: any;
    icon?: any;
    title: string;
    text: string;
    avatar?: any;
    viewsText?: string;
    timeText?: string;
  };
};

export default function StoryCard({props}: IStoryCard) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={props.image} style={styles.image}>
        <View>
          {props.icon && <Image source={props.icon} style={styles.icon} />}
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.textContainer}>
            <View style={styles.avatarContainer}>
              {props.avatar && (
                <Image source={props.avatar} style={styles.avatar} />
              )}
              <Text style={styles.text}>{props.text}</Text>
            </View>
            <Text style={styles.secondText}>{props.viewsText}</Text>
            <Text style={styles.secondText}>{props.timeText}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
