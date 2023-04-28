import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Instructors from '../screen/providers/Instructors';
import Organizations from '../screen/providers/Organizations';
import Consultants from '../screen/providers/Consultants';
import sizes from '../res/sizes';
import colors from '../res/colors';
import fonts from '../res/fonts';
import Purchased from '../screen/mycourses/Purchased';

import Organization from '../screen/mycourses/Organization';

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
        tabBarStyle: {backgroundColor: 'white'},
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
export default function TopTabCourses() {
  return <MyTabs />;
}
