import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import Purchased from '../mycourses/Purchased';
import Organization from '../mycourses/Organization';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="damua"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {
          fontSize: sizes._screen_width * 0.03,
          color: colors.BLACK,
          fontFamily: fonts.textRegular,
        },
        lazy: false,
        tabBarStyle: {backgroundColor: 'transparent', marginBottom: 10},
        tabBarIndicatorStyle: {
          height: 2,
          borderRadius: 10,
          backgroundColor: colors.BLACK,
        },
      }}>
      <Tab.Screen
        name="damua"
        component={Purchased}
        options={{tabBarLabel: 'Đã Mua'}}
      />

      <Tab.Screen
        name="tochuc"
        component={Organization}
        options={{tabBarLabel: 'Chuyên Gia'}}
      />
    </Tab.Navigator>
  );
}
export default function TopTabCoursesDetail() {
  return <MyTabs />;
}
