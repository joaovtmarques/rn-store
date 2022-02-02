import React, {useEffect, useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors, fonts, sizes} from '../utils';

import Icon from '../components/Icon';

import Today from '../screens/Today';
import Search from '../screens/Search';
import My from '../screens/My';

import home from '../assets/icons/IC/24/home.svg';
import user from '../assets/icons/IC/24/user.svg';
import search from '../assets/icons/IC/24/search.svg';

const TabArr = [
  {
    route: 'Today',
    label: 'Today',
    icon: home,
    component: Today,
    color: colors.labelBlack5,
    alphaClr: colors.labelWhite100,
  },
  {
    route: 'Search',
    label: 'Search',
    icon: search,
    component: Search,
    color: colors.labelBlack5,
    alphaClr: colors.labelWhite100,
  },
  {
    route: 'My',
    label: 'My',
    icon: user,
    component: My,
    color: colors.labelBlack5,
    alphaClr: colors.labelWhite100,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;

  const viewRef = useRef<any>(null);
  const textViewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      viewRef.current!.animate({0: {scale: 0}, 1: {scale: 1}})!;
      textViewRef.current!.animate({0: {scale: 0}, 1: {scale: 1}})!;
    } else {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.btnContainer, {flex: focused ? 1 : 0.65}]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: item.color,
              borderRadius: EStyleSheet.value('3.125rem'),
            },
            ,
          ]}
        />
        <View
          style={[
            styles.btn,
            {backgroundColor: focused ? null : item.alphaClr},
          ]}>
          <Icon IconItem={item.icon} />
          <Animatable.View ref={textViewRef}>
            {focused && <Text style={styles.textBtn}>{item.label}</Text>}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Tabs() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            height: EStyleSheet.value('5rem'),
            width: EStyleSheet.value('16rem'),
            backgroundColor: colors.labelWhite100,
            borderRadius: EStyleSheet.value('3.75rem'),
            paddingTop: EStyleSheet.value('1rem'),
            paddingLeft: EStyleSheet.value('1rem'),
            paddingRight: EStyleSheet.value('1rem'),
            paddingBottom: EStyleSheet.value('1rem'),
            ...styles.shadow,
          },
        }}>
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '$padding',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '0.7rem',
    paddingHorizontal: '0.8rem',
  },
  textBtn: {
    fontSize: sizes.font11,
    fontFamily: fonts.textBold,
    color: colors.labelBlack100,
    paddingHorizontal: '0.5rem',
  },
  shadow: {
    shadowColor: colors.labelBlack10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
