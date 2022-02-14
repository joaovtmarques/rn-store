import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text, View} from 'react-native';

import {styles} from './styles';

import {colors} from '../../utils';

type ICustomButtonTab = {
  props: any;
};

export default function CustomTab({props}: ICustomButtonTab) {
  const navigation = useNavigation();

  function goTo(screenName: any) {
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          goTo('New&Popular');
        }}
        style={styles.button}>
        <Text
          style={[
            styles.text,
            {
              color:
                props.state.index === 0
                  ? colors.labelBlack100
                  : colors.labelBlack30,
            },
          ]}>
          New&Popular
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          goTo('Story');
        }}>
        <Text
          style={[
            styles.text,
            {
              color:
                props.state.index === 1
                  ? colors.labelBlack100
                  : colors.labelBlack30,
            },
          ]}>
          Story
        </Text>
      </TouchableOpacity>
    </View>
  );
}
