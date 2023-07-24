import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import {NavigationProp} from '@react-navigation/native';

import WatchCoses from './WatchCoses';
export default function PlayVideo({
  navigation,
  route,
}: {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}) {
  const item = route?.params;

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          height: sizes._screen_width * (9 / 12),
        }}>
        <WatchCoses navigation={navigation} item={item} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    ...stylescustom.txtBold,
    fontSize: sizes._screen_width * 0.05,
    width: sizes._screen_width * 0.96,
    alignSelf: 'center',
    marginTop: 10,
  },
  view: {
    marginTop: 10,
    width: sizes._screen_width,
    alignItems: 'center',
  },
});
