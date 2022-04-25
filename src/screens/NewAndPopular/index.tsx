import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {styles} from './styles';

import Card from '../../components/Card';
import JustDroppedCard from '../../components/JustDroppedCard';
import MostPopularCard from '../../components/MostPopularCard';
import PopularBrandCard from '../../components/PopularBrandCard';

import imageNike1 from '../../assets/image1.png';
import imageNike2 from '../../assets/image2.png';
import imageNike3 from '../../assets/image3.png';
import imageAdidas from '../../assets/image1-1.png';
import imageJordan1 from '../../assets/image_1.png';
import imageJordan2 from '../../assets/image_1-1.png';

import nikeIcon from '../../assets/icons/ICON/brand/nike.svg';
import vansIcon from '../../assets/icons/ICON/brand/vans.svg';
import adidasIcon from '../../assets/icons/ICON/brand/adidas.svg';
import jordanIcon from '../../assets/icons/ICON/brand/jordan.svg';
import newBalanceIcon from '../../assets/icons/ICON/brand/newBalance.svg';

const JustDroppedArr = [
  {
    image: imageNike1,
    icon: nikeIcon,
    title: 'Nike ISPA Overreact Sail Multi',
    price: '233',
  },
  {
    image: imageAdidas,
    icon: adidasIcon,
    title: 'Adidas Yeezy Boost 700 MNVN Bone',
    price: '373',
  },
  {
    image: imageNike1,
    icon: nikeIcon,
    title: 'Nike ISPA Overreact Sail Multi',
    price: '233',
  },
  {
    image: imageAdidas,
    icon: adidasIcon,
    title: 'Adidas Yeezy Boost 700 MNVN Bone',
    price: '373',
  },
];

const MostPopularArr = [
  {
    image: imageJordan1,
    Icon: jordanIcon,
    title: 'Jordan 5 Retro Alternate Grape',
    price: '252',
  },
  {
    image: imageJordan2,
    Icon: jordanIcon,
    title: 'Jordan 14 Retro Gym Red Toro',
    price: '214',
  },
];

const PopularBrandsArr = [
  {
    icon: nikeIcon,
    title: 'NIKE',
  },
  {
    icon: adidasIcon,
    title: 'Adidas',
  },
  {
    icon: vansIcon,
    title: 'Vans',
  },
  {
    icon: newBalanceIcon,
    title: 'New Balance',
  },
  {
    icon: nikeIcon,
    title: 'NIKE',
  },
  {
    icon: adidasIcon,
    title: 'Adidas',
  },
];

const NewLowestArr = [
  {
    image: imageNike2,
    Icon: nikeIcon,
    title: 'Nike Air Max 98 Black Off Noir (W)',
    price: '120',
  },
  {
    image: imageNike3,
    Icon: nikeIcon,
    title: 'Nike Air Max 97 Corduroy Desert...',
    price: '251',
  },
];

export default function NewAndPopular() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: EStyleSheet.value('8rem')}}>
      <Card />
      <View>
        <Text
          style={[
            styles.sectionText,
            {marginTop: EStyleSheet.value('4.25rem')},
          ]}>
          Just Dropped
        </Text>
        <ScrollView
          horizontal
          style={styles.justDroppedContainer}
          showsHorizontalScrollIndicator={false}>
          {JustDroppedArr.map((item, index) => {
            return <JustDroppedCard props={JustDroppedArr[index]} />;
          })}
        </ScrollView>
      </View>
      <View style={styles.mostPopularContainer}>
        <Text style={styles.sectionText}>Most Popular</Text>
        <ScrollView horizontal contentContainerStyle={styles.mostPopularList}>
          {MostPopularArr.map((item, index) => {
            return <MostPopularCard props={MostPopularArr[index]} />;
          })}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.sectionText}>Popular Brands</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {PopularBrandsArr.map(item => {
            return <PopularBrandCard Icon={item.icon} title={item.title} />;
          })}
        </ScrollView>
      </View>
      <View>
        <Text
          style={[
            styles.sectionText,
            {marginTop: EStyleSheet.value('4.25rem')},
          ]}>
          Recommended For You
        </Text>
        <ScrollView
          horizontal
          style={styles.justDroppedContainer}
          showsHorizontalScrollIndicator={false}>
          {JustDroppedArr.map((item, index) => {
            return <JustDroppedCard props={JustDroppedArr[index]} />;
          })}
        </ScrollView>
      </View>
      <View>
        <Text
          style={[
            styles.sectionText,
            {marginTop: EStyleSheet.value('4.25rem')},
          ]}>
          New Lowest Asks
        </Text>
        <ScrollView horizontal contentContainerStyle={styles.mostPopularList}>
          {NewLowestArr.map((item, index) => {
            return <MostPopularCard props={NewLowestArr[index]} />;
          })}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.sectionText}>New Highest Asks</Text>
        <ScrollView horizontal contentContainerStyle={styles.mostPopularList}>
          {MostPopularArr.map((item, index) => {
            return <MostPopularCard props={MostPopularArr[index]} />;
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
