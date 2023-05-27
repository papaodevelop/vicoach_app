import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
import Infomation from './Infomation';
import {CourseDetail} from '../../../types/CourseDetail';
import Content from './Content';
import {NavigationProp} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function MyTabs({
  data,
  navigation,
}: {
  data: CourseDetail | undefined;
  navigation: NavigationProp<Record<string, any>>;
}) {
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
        name="Thông tin"
        component={() => <Infomation datas={data} />}
        options={{tabBarLabel: 'Thông tin'}}
      />
      <Tab.Screen
        name="Nội dung"
        component={() => <Content navigation={navigation} datas={data} />}
        options={{tabBarLabel: 'Nội dung'}}
      />
    </Tab.Navigator>
  );
}
export default function TopTapDetail({
  data,
  navigation,
}: {
  data: CourseDetail | undefined;
  navigation: NavigationProp<Record<string, any>>;
}) {
  return <MyTabs data={data} navigation={navigation} />;
}
