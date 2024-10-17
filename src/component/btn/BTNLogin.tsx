import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
interface Props {
  txt: string;
  onPress: () => void;
  active?: boolean;
  pnc?: boolean;
}
const BTNLogin = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.active ? undefined : props.onPress}
      activeOpacity={0.5}
      style={{
        ...styles.btn,
        backgroundColor: props.active ? '#DDDDDD' : colors.GREEN,
      }}>
      <Text style={props?.pnc ? styles.txt1 : styles.txt}>{props.txt}</Text>
    </TouchableOpacity>
  );
};
export default BTNLogin;
const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: sizes._screen_width * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  txt: {
    color: colors.WHITE,
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.045,
  },
  txt1: {
    color: colors.BLACK,
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.045,
  },
});
