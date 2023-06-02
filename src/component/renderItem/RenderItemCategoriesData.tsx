import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import fonts from '../../res/fonts';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import images from '../../res/images';
import {NavigationProp} from '@react-navigation/native';
interface Props {
  item: CourseCategoryType;
  index: number;
  navigation: NavigationProp<Record<string, any>>;
}
export default function RenderItemCategoriesData(props: Props) {
  const textTitle = props.item?.name?.vi || props.item?.name?.en;
  return (
    <Pressable
      style={styles.view}
      onPress={() =>
        props.item.number_of_course
          ? props.navigation.navigate('DetailCategories', {
              title: textTitle,
              item: props.item?.id,
            })
          : undefined
      }>
      <View style={{...styles.view1}}>
        <Image
          source={
            props.item?.thumbnail_image?.url
              ? {uri: props.item?.thumbnail_image?.url}
              : images.i2
          }
          style={styles.img}
          defaultSource={images.i2}
        />
      </View>
      <View style={styles.view2}>
        <Text style={styles.title}>{textTitle}</Text>
        <Text style={styles.txt}>{props.item.number_of_course} Courses</Text>
      </View>
    </Pressable>
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
    // tintColor: colors.WHITE,
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
