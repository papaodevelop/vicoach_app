import {StyleSheet, Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import images from '../res/images';
import fonts from '../res/fonts';
import sizes from '../res/sizes';
import Providers from '../screen/providers/Providers';
import Home from '../screen/home/Home';
import Mycourses from '../screen/mycourses/Mycourses';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconHome from 'react-native-vector-icons/Entypo';
import colors from '../res/colors';
const Tab = createBottomTabNavigator();
interface Props {
  navigation: any;
}
const Bottomtabbars = (props: Props) => {
  const isAndroid = Platform.OS === 'android';
  return (
    <Tab.Navigator
      initialRouteName="Trang chủ"
      screenOptions={{
        tabBarActiveTintColor: '#12449c',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          height: sizes._screen_height * 0.07,
          backgroundColor: '#6be799',
        },
      }}>
      <Tab.Screen
        name="Tiện ích"
        component={Providers}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return (
              <>
                {/* <Image
                  source={images.tienich}
                  style={{height: 26, width: 26, resizeMode: 'cover'}}
                /> */}
              </>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Trang chủ"
        component={Home}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Trang chủ')}
                style={{
                  height: sizes._screen_width * 0.14,
                  width: sizes._screen_width * 0.14,
                  backgroundColor: '#6be799',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 60,
                  bottom: isAndroid
                    ? sizes._screen_height * 0.025
                    : sizes._screen_height * 0.01,
                  elevation: 2,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 1.84,
                }}>
                <IconHome name="home" color={'white'} size={30} />
              </TouchableOpacity>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Khoá học"
        component={Mycourses}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return (
              <>
                <Icon name="video-camera" size={30} color={'white'} />
              </>
            );
          },

          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottomtabbars;

const styles = StyleSheet.create({});
