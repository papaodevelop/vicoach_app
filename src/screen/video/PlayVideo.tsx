import {View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
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
