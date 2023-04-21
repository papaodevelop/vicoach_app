import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Slapscreen from '../screen/Slapscreen/OnboardingFirst';
import OnboardingFirst from '../screen/Slapscreen/OnboardingFirst';

export default function Container() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnboardingFirst" component={OnboardingFirst} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
