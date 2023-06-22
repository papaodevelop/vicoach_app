import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import stylescustom from '../../res/stylescustom';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import images from '../../res/images';
import {NavigationProp} from '@react-navigation/native';
export default function RenderItemInstructors({
  item,
  index,
  navigation,
}: {
  item: CourseCategoryType;
  index: number;
  navigation: NavigationProp<Record<string, any>>;
}) {
  return (
    <Pressable style={styles.view} key={index}>
      <View style={styles.view1}>
        {item?.image?.url ? (
          <Image source={{uri: item?.image?.url}} style={styles.img} />
        ) : (
          <Image style={styles.img} source={images.noimage} />
        )}

        {/* @ts-ignore */}
        <Text style={styles.txt}>{item?.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.42,
    paddingVertical: 10,
    backgroundColor: colors.WHITE,
    marginTop: 15,
    borderRadius: 15,
  },
  img: {
    height: sizes._csreen_width * 0.18,
    width: sizes._csreen_width * 0.18,
    borderRadius: (sizes._csreen_width * 0.18) / 2,
    marginTop: sizes._csreen_width * 0.04,
  },
  view1: {alignItems: 'center', paddingBottom: 20},
  txt: {
    ...stylescustom.txt1,
    marginTop: 8,
  },
});
