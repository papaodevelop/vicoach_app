import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerContent from './DrawerContent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Bottomtabbars from './Bottomtabbars';
const Drawer = createDrawerNavigator();

const DrawerCustoms = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, swipeEdgeWidth: 0}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Bottomtabbars" component={Bottomtabbars} />
    </Drawer.Navigator>
  );
};
export default function DrawerCustom() {
  return <DrawerCustoms />;
}

const styles = StyleSheet.create({});
