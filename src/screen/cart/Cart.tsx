import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';

export default function Cart({navigation}: any) {
  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={navigation} title="Đơn hàng" />
    </View>
  );
}

const styles = StyleSheet.create({});
