import {StyleSheet, Text, Platform, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Providers from '../screen/providers/Providers';
import Home from '../screen/home/Home';
import Mycourses from '../screen/mycourses/Mycourses';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconHome from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Blog from '../screen/blog/Blog';
import Categories from '../screen/categories/Categories';
import fonts from '../res/fonts';
import sizes from '../res/sizes';
import {NavigationProp} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import {navigate} from '../../RootNavigation';
const Tab = createBottomTabNavigator();
interface Props {
  navigation: NavigationProp<Record<string, any>>;
}
const isAndroid = Platform.OS === 'android';

const CustomtabBarBuuton = ({children, onPress}: any) => (
  <TouchableOpacity
    activeOpacity={1}
    style={{
      top: isAndroid ? -32 : -sizes._csreen_height * 0.02,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ee782c',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);
const Bottomtabbars = (props: Props) => {
  const [notifi, setnotifi] = useState<any>();

  useEffect(() => {
    const timeout = setTimeout(async () => {
      await messaging().onNotificationOpenedApp(remoteMessage => {
        navigate('Notification');
      });
      if (Platform.OS === 'ios') {
        messaging().setBackgroundMessageHandler(async remoteMessage => {
          await messaging()
            .getInitialNotification()
            .then(remoteMessages => {
              if (remoteMessage) {
                navigate('Notification');
              }
            });
        });
      } else {
        await messaging()
          .getInitialNotification()
          .then(remoteMessages => {
            if (remoteMessages) {
              navigate('Notification');
            }
          });
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Trang chủ"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#12449c',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: styles.item1,
        tabBarItemStyle: {height: 70},
      }}>
      <Tab.Screen
        name="Phân loại"
        component={Categories}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return (
              <View style={styles.item}>
                <Ionicons
                  name="grid"
                  size={sizes._screen_width * 0.065}
                  color={'white'}
                />
                {focused ? <Text style={styles.txt}>Phân loại</Text> : null}
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Giáo viên"
        component={Providers}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return (
              <View style={styles.item}>
                <FontAwesome5
                  name="users"
                  size={sizes._screen_width * 0.065}
                  color={'white'}
                />
                {focused ? <Text style={styles.txt}>Giáo viên</Text> : null}
              </View>
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
              <>
                <IconHome
                  name="home"
                  color={'white'}
                  size={sizes._screen_width * 0.09}
                />
                {focused ? (
                  <Text
                    style={{top: sizes._screen_height * 0.03, ...styles.txt}}>
                    Trang chủ
                  </Text>
                ) : null}
              </>
            );
          },
          tabBarButton: props => <CustomtabBarBuuton {...props} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return (
              <View style={styles.item}>
                <Fontisto
                  name="blogger"
                  size={sizes._screen_width * 0.065}
                  color={'white'}
                />
                {focused ? <Text style={styles.txt}>Blog</Text> : null}
              </View>
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
              <View style={styles.item}>
                <Icon
                  name="video-camera"
                  size={sizes._screen_width * 0.065}
                  color={'white'}
                />
                {focused ? <Text style={styles.txt}>Khoá học</Text> : null}
              </View>
            );
          },

          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottomtabbars;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  item: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  item1: {
    height: 70,
    backgroundColor: '#ee782c',
    position: 'absolute',
    justifyContent: 'center',
    shadowColor: '#7F5DF0',
    bottom: 25,
    right: 10,
    borderRadius: 15,
    left: 10,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  txt: {
    color: 'white',
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.03,
  },
});
