import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import stylescustom from '../../res/stylescustom';
import Star from '../Star';
import fonts from '../../res/fonts';
import Icon from 'react-native-vector-icons/AntDesign';
import {DateTime, Time, money} from '../../res/convert';
import images from '../../res/images';
interface Props {
  item: ClassCourse;
  index: number;
}
const RenderItemCourses = (props: Props) => {
  let item = props.item;
  const text = item?.category?.vi || item?.category?.en;
  const texts = item?.title?.vi || item?.title?.en;

  return (
    <Pressable style={styles.view} key={props.index}>
      <View style={stylescustom.view}>
        <View style={stylescustom.view1}>
          <Image
            source={item?.thumbnail ? {uri: item?.thumbnail} : images.i1}
            style={styles.img}
          />
          <View
            style={{
              ...styles.height,
              marginLeft: sizes._screen_width * 0.02,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.txt}>{texts}</Text>
              <View style={styles.view1}>
                <Star star={item.reviews} width={sizes._screen_width * 0.2} />
              </View>
            </View>
            <View style={stylescustom.view1}>
              <Icon
                name="clockcircle"
                color={colors.GRAY}
                size={sizes._screen_width * 0.03}
              />
              <Text style={styles.txt1}>{Time(item.duration)}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={stylescustom.view}>
        <View>
          <Text style={styles.txt2}>Loại</Text>
          <Text style={styles.txt3}>{text}</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginRight: sizes._screen_width * 0.05,
          }}>
          <Text style={styles.txt2}>Ngày bắt đầu</Text>
          <Text style={styles.txt3}>{DateTime(item.start_date)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RenderItemCourses;

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.9,
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: sizes._screen_height * 0.02,
    padding: 10,
  },
  img: {
    height: sizes._screen_width * 0.18,
    width: sizes._screen_width * 0.3,
    borderRadius: 15,
  },
  height: {height: sizes._screen_width * 0.18},
  view1: {marginTop: sizes._screen_height * 0.01},
  txt: {
    color: colors.BLACK,
    fontFamily: fonts.textBold,
    fontSize: sizes._csreen_width * 0.038,
    width: sizes._screen_width * 0.55,
  },
  txt1: {
    color: colors.GRAY,
    fontFamily: fonts.textBold,
    fontSize: sizes._csreen_width * 0.03,
    marginLeft: 5,
  },
  txt2: {
    color: colors.GRAY,
    fontFamily: fonts.textBold,
    fontSize: sizes._csreen_width * 0.03,
    marginTop: 10,
  },
  txt3: {
    ...stylescustom.txt,
    fontSize: sizes._screen_width * 0.035,
  },
});
