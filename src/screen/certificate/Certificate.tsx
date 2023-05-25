import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import {NavigationProp} from '@react-navigation/native';
import HeaderScreen1 from '../../component/header/HeaderScreen1';

export default function Certificate({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  return (
    <View style={stylescustom.container}>
      <HeaderScreen1 navigation={navigation} title="Chứng chỉ" />
    </View>
  );
}

const styles = StyleSheet.create({});
