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
  const url =
    'https://public-phanmemmkt-846c4b8e-66af-4f65-bc02-44d2a784ce4f.b-cdn.net/default/e576968a-a17c-4b17-988a-05aad49a079c-9106e34e-b48d-404e-8313-d3322165b87e-Logo%20MKT%20200x200.png';
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
          source={{uri: props.item?.icon?.url ? props.item?.icon?.url : url}}
          resizeMode="contain"
          style={styles.img}
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
    marginRight: 10,
  },
  view1: {
    height: sizes._screen_width * 0.17,
    width: sizes._screen_width * 0.17,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: sizes._screen_width * 0.12,
    width: sizes._screen_width * 0.12,
    // tintColor: colors.WHITE,
    borderRadius: 10,
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
