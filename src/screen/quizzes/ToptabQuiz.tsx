import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
import MyResults from './MyResults';
import NotParticipated from './NotParticipated';

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
        name="MyResults"
        component={MyResults}
        options={{tabBarLabel: 'Đã làm'}}
      />
      <Tab.Screen
        name="NotParticipated"
        component={NotParticipated}
        options={{tabBarLabel: 'Chưa làm'}}
      />
    </Tab.Navigator>
  );
}
export default function ToptabQuiz() {
  return <MyTabs />;
}
