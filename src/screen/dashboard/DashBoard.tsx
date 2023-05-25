import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen1 from '../../component/header/HeaderScreen1';
import {NavigationProp} from '@react-navigation/native';

export default function DashBoard({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  return (
    <View style={stylescustom.container}>
      <HeaderScreen1 title="DashBoard" navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
