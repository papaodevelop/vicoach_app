import {BackHandler, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import DrawerContent from './DrawerContent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Bottomtabbars from './Bottomtabbars';
import Meetings from '../screen/meetings/Meetings';
import Quizzes from '../screen/quizzes/Quizzes';
import Favorite from '../screen/favorite/Favorite';
import Support from '../screen/support/Support';
import Certificate from '../screen/certificate/Certificate';
import DashBoard from '../screen/dashboard/DashBoard';
import Comment from '../screen/comment/Comment';
import {NavigationProp} from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const DrawerCustoms = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, swipeEdgeWidth: 0}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Bottomtabbars" component={Bottomtabbars} />
      <Drawer.Screen name="Meetings" component={Meetings} />
      <Drawer.Screen name="Quizzes" component={Quizzes} />
      <Drawer.Screen name="Favorite" component={Favorite} />
      <Drawer.Screen name="Support" component={Support} />
      <Drawer.Screen name="Certificate" component={Certificate} />
      <Drawer.Screen name="DashBoard" component={DashBoard} />
      <Drawer.Screen name="Comment" component={Comment} />
    </Drawer.Navigator>
  );
};
export default function DrawerCustom({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  let backPressCount = 0;
  let backPressTimer: any = null;
  const [currentScreen, setCurrentScreen] = useState<number>(0);

  const handleBackPress = () => {
    if (backPressCount === 0) {
      backPressCount += 1;
      ToastAndroid.show('Nhấn back một lần nữa để thoát', ToastAndroid.SHORT);
      backPressTimer = setTimeout(() => {
        backPressCount = 0;
      }, 2000);
      return true;
    } else {
      clearTimeout(backPressTimer);

      BackHandler.exitApp();
      return false;
    }
  };

  const handleBackPresss = () => {
    if (currentScreen === 2) {
      return handleBackPress();
    } else {
      return false;
    }
  };

  useEffect(() => {
    const navigationStateListener = navigation.addListener('state', state => {
      const currentRoute = state.data.state.index;
      setCurrentScreen(currentRoute);
    });

    BackHandler.addEventListener('hardwareBackPress', handleBackPresss);

    return () => {
      navigationStateListener();
      BackHandler.removeEventListener('hardwareBackPress', handleBackPresss);
    };
  }, [navigation, currentScreen]);

  return <DrawerCustoms />;
}

const styles = StyleSheet.create({});
