import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
import Purchased from './Purchased';
import ClassCouse from './ClassCouse';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MyResults"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {
          fontSize: sizes._screen_width * 0.03,
          color: colors.BLACK,
          fontFamily: fonts.textRegular,
        },
        lazy: false,
        tabBarStyle: {backgroundColor: 'white'},
        tabBarIndicatorStyle: {
          height: 2,
          borderRadius: 10,
          backgroundColor: colors.BLACK,
        },
      }}>
      <Tab.Screen
        name="Purchased"
        component={Purchased}
        options={{tabBarLabel: 'Khoá học'}}
      />
      <Tab.Screen
        name="ClassCouse"
        component={ClassCouse}
        options={{tabBarLabel: 'Lớp học'}}
      />
    </Tab.Navigator>
  );
}
export default function TopTabCourse() {
  return <MyTabs />;
}
