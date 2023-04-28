import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';

export default function RenderComment({data}: any) {
  console.log(data);

  return (
    <View style={styles.view}>
      <Text>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.95,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
});
