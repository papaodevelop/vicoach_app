import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Instructors from '../screen/providers/Instructors';
import Organizations from '../screen/providers/Organizations';
import Consultants from '../screen/providers/Consultants';
import sizes from '../res/sizes';
import colors from '../res/colors';
import fonts from '../res/fonts';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="giangvien"
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
        name="giangvien"
        component={Instructors}
        options={{tabBarLabel: 'Giảng Viên'}}
      />
      <Tab.Screen
        name="tochuc"
        component={Organizations}
        options={{tabBarLabel: 'Tổ Chức'}}
      />
      <Tab.Screen
        name="chuyengia"
        component={Consultants}
        options={{tabBarLabel: 'Các Chuyên Gia'}}
      />
    </Tab.Navigator>
  );
}
export default function TopTabProviders() {
  return <MyTabs />;
}
