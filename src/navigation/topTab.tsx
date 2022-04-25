import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Story from '../screens/Story';
import NewAndPopular from '../screens/NewAndPopular';

import CustomTab from '../components/CustomTab';
import {colors} from '../utils';

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTab {...props} props={props} />}
      initialRouteName="New&Popular"
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: {
          backgroundColor: colors.labelWhite100,
        },
        tabBarContentContainerStyle: {
          backgroundColor: colors.labelWhite100,
        },
      }}>
      <Tab.Screen name="New&Popular" component={NewAndPopular} />
      <Tab.Screen name="Story" component={Story} />
    </Tab.Navigator>
  );
}
