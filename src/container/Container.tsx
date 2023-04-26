import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingFirst from '../screen/slapscreen/OnboardingFirst';
import Login from '../screen/Login/Login';
import Register from '../screen/Login/Register';
import Spapscreen1 from '../screen/slapscreen/Slapscreen1';
import Bottomtabbars from './Bottomtabbars';
import ViewAll from '../screen/home/NewestCourses/ViewAll';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import DrawerContent from './DrawerContent';
import DrawerCustom from './DrawerCustom';

export default function Container() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Spapscreen1"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Spapscreen1" component={Spapscreen1} />
        <Stack.Screen name="OnboardingFirst" component={OnboardingFirst} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DrawerCustoms" component={DrawerCustom} />
        <Stack.Screen name="ViewAll" component={ViewAll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
