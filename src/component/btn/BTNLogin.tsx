import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
interface Props {
  txt: string;
  onPress: () => void;
}
const BTNLogin = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btn}>
      <Text style={styles.txt}>{props.txt}</Text>
    </TouchableOpacity>
  );
};
export default BTNLogin;
const styles = StyleSheet.create({
  btn: {
    height: sizes._screen_height * 0.05,
    width: sizes._screen_width * 0.7,
    backgroundColor: colors.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  txt: {
    color: colors.WHITE,
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.045,
  },
});
