import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {HScrollView} from 'react-native-head-tab-view';

const Location = ({index}: {index: number}) => {
  return (
    <HScrollView index={index} showsVerticalScrollIndicator={false}>
      <View></View>
    </HScrollView>
  );
};

export default Location;

const styles = StyleSheet.create({});
