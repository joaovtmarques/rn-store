import React from 'react';
import {ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {styles} from './styles';

import StoryCard from '../../components/StoryCard';

import image1 from '../../assets/bg.png';
import image2 from '../../assets/img-1.png';
import image3 from '../../assets/img-2.png';
import image4 from '../../assets/img-3.png';
import icon1 from '../../assets/play-icon.png';
import icon2 from '../../assets/live-icon.png';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';

export default function Story() {
  const StoryCardArr = [
    {
      image: image1,
      text: 'X-S-Store',
      title: 'Welcome X-S-Store',
    },
    {
      icon: icon1,
      image: image4,
      avatar: avatar1,
      text: 'Unbox Therapy',
      timeText: '3 min ago',
      viewsText: '949K Views',
      title: 'Nike Adapt BB Unboxing - Futuristic Self Lacing Sneakers',
    },
    {
      icon: icon2,
      image: image2,
      avatar: avatar2,
      text: 'fideletty',
      timeText: '3 min ago',
      viewsText: '32.4K Views',
      title:
        'Nike Alphafly Next% Full & Final Review | Carbon Fiber Plate Marathon Shoe',
    },
    {
      image: image3,
      avatar: avatar3,
      text: 'TheOffWhiteDealer',
      timeText: '3 min ago',
      viewsText: '32.4K Views',
      title: 'About Jordan 1 Mid Chicago Toe',
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: EStyleSheet.value('8rem')}}
      showsVerticalScrollIndicator={false}>
      {StoryCardArr.map((item, index) => {
        return <StoryCard props={StoryCardArr[index]} />;
      })}
    </ScrollView>
  );
}
