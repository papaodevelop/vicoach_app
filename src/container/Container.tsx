import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingFirst from '../screen/slapscreen/OnboardingFirst';
import Login from '../screen/Login/Login';
import Register from '../screen/Login/Register';
import Spapscreen1 from '../screen/slapscreen/Slapscreen1';
import Bottomtabbars from './Bottomtabbars';

export default function Container() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Spapscreen1">
        <Stack.Screen name="Spapscreen1" component={Spapscreen1} />

        <Stack.Screen name="OnboardingFirst" component={OnboardingFirst} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Bottomtabbars" component={Bottomtabbars} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
