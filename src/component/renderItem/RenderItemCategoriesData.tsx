import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import fonts from '../../res/fonts';

export default function RenderItemCategoriesData({item, index}: any) {
  return (
    <View style={styles.view}>
      <View style={{backgroundColor: item.color, ...styles.view1}}>
        <Image source={item.img} style={styles.img} />
      </View>
      <View style={styles.view2}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.txt}>{item.courses?.length} Courses</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.WHITE,
    marginLeft: sizes._screen_width * 0.05,
    padding: 10,
    borderRadius: 20,
    ...stylescustom.view1,
    width: sizes._csreen_width * 0.6,
  },
  view1: {
    height: sizes._screen_width * 0.17,
    width: sizes._screen_width * 0.17,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: sizes._screen_width * 0.1,
    width: sizes._screen_width * 0.1,
    tintColor: colors.WHITE,
  },
  view2: {
    marginLeft: sizes._screen_width * 0.03,
    width: sizes._screen_width * 0.35,
  },
  title: {
    ...stylescustom.txt,
    fontSize: sizes._screen_width * 0.044,
    fontFamily: fonts.textBold,
  },
  txt: {...stylescustom.txt, color: colors.GRAY},
});
