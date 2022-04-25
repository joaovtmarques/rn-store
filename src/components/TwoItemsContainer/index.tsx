import React from 'react';
import {View} from 'react-native';
import MostPopularCard from '../MostPopularCard';

import {styles} from './styles';

export default function TwoItemsContainer({props1, props2}: any) {
  return (
    <View style={styles.container}>
      <MostPopularCard props={props1} />
      <MostPopularCard props={props2} />
    </View>
  );
}
