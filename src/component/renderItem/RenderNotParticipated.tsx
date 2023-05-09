import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import stylescustom from '../../res/stylescustom';
import fonts from '../../res/fonts';
import Icon from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  item: any;
  index: number;
}
const RenderNotParticipated = (props: Props) => {
  let item = props.item;
  return (
    <Pressable style={styles.view} key={props.index}>
      <View style={stylescustom.view}>
        <View style={stylescustom.view1}>
          <Image source={{uri: item?.img}} style={styles.img} />
          <View
            style={{
              ...styles.height,
              marginLeft: sizes._screen_width * 0.02,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.txt}>{item.name}</Text>
              <View style={styles.view1}>
                <Text style={stylescustom.txt1}>{item.title}</Text>
              </View>
            </View>
            <View style={stylescustom.view1}>
              <AntDesign
                name="clockcircle"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
              />
              <Text style={styles.txt1}>{item.time} p</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...stylescustom.view1,
            alignSelf: 'flex-end',
          }}>
          <AntDesign
            name="questioncircle"
            color={colors.GRAY}
            size={sizes._screen_width * 0.04}
          />
          <Text style={{...styles.txt4, color: colors.GRAY}}>
            {item.numberofsentences}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RenderNotParticipated;

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
  txt3: {...stylescustom.txt, fontSize: sizes._screen_width * 0.035},
  txt4: {
    ...stylescustom.txt,
    marginLeft: 5,
  },
});
