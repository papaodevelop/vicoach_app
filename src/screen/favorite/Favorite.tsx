import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';

export default function Favorite({navigation}: any) {
  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={navigation} title="Yêu thích" />
    </View>
  );
}

const styles = StyleSheet.create({});
