import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../../res/sizes';
import colors from '../../../res/colors';
import stylescustom from '../../../res/stylescustom';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import Star from '../../../component/Star';
import fonts from '../../../res/fonts';
import {money} from '../../../res/convert';
interface Props {
  navigation: any;
  item: any;
}
export default function RenderItemCouses(props: Props) {
  let item = props.item;

  return (
    <View style={styles.view}>
      <Image
        source={{uri: item.img}}
        style={{
          height: sizes._screen_height * 0.1,
          width: sizes._screen_width * 0.35,
          borderRadius: 15,
        }}
      />
      <View style={styles.view1}>
        <Text style={styles.txt}>{item.name}</Text>
        <View style={stylescustom.view1}>
          <FontAwesome
            name="user"
            color={colors.GRAY}
            size={sizes._screen_width * 0.04}
          />
          <Text style={styles.txt1}>{item.lecturers}</Text>
        </View>
        <Star star={item.star} />
        <View style={stylescustom.view}>
          <View style={stylescustom.view1}>
            <Icon
              name="clockcircle"
              color={colors.GRAY}
              size={sizes._screen_width * 0.035}
            />
            <Text style={styles.txt1}>{item.time} giờ </Text>
          </View>
          <Text style={styles.txt2}>
            {money(item.pricenew) ? money(item.pricenew) : item.pricenew}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.9,
    backgroundColor: colors.WHITE,
    padding: 10,
    alignSelf: 'center',
    marginTop: sizes._screen_height * 0.017,
    borderRadius: 20,
    ...stylescustom.view1,
  },
  view1: {
    marginLeft: sizes._screen_width * 0.05,
    height: sizes._screen_height * 0.1,
    justifyContent: 'space-between',
    width: sizes._screen_width * 0.9 - sizes._screen_width * 0.46,
  },
  txt: {
    ...stylescustom.txt,
    fontFamily: fonts.textBold,
  },
  txt1: {
    color: colors.GRAY,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.035,
    marginLeft: 5,
  },
  txt2: {
    color: colors.GREEN,
    fontFamily: fonts.textRegular,
    fontSize: sizes._csreen_width * 0.04,
  },
});
