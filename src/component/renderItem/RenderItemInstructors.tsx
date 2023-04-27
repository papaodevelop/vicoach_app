import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import Star from '../Star';
import stylescustom from '../../res/stylescustom';
import fonts from '../../res/fonts';

export default function RenderItemInstructors({item, index}: any) {
  console.log(item);

  return (
    <Pressable style={styles.view}>
      <View
        style={{
          backgroundColor: item?.status ? colors.GREEN : colors.RED,
          ...styles.view1,
        }}
      />
      <View style={{alignItems: 'center'}}>
        <Image source={item.img} style={styles.img} />
        <Text style={styles.txt}>{item?.name}</Text>
        <Text style={{...styles.txt, color: colors.GRAY}}>{'Rất tốt'}</Text>

        <Star star={item.star} width={sizes._screen_width * 0.2} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.42,
    height: sizes._screen_width * 0.5,
    backgroundColor: colors.WHITE,
    marginTop: 15,
    borderRadius: 15,
  },
  img: {
    height: sizes._csreen_width * 0.18,
    width: sizes._csreen_width * 0.18,
    borderRadius: (sizes._csreen_width * 0.18) / 2,
    marginTop: sizes._csreen_width * 0.02,
  },
  txt: {...stylescustom.txt, marginTop: sizes._screen_width * 0.02},
  view1: {
    height: 12,
    width: 12,
    borderRadius: 30,
    alignSelf: 'flex-end',
    marginRight: sizes._screen_width * 0.02,
    marginTop: sizes._screen_width * 0.02,
  },
});
