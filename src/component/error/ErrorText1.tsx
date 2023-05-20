import {StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
interface Props {
  err: string;
}
export default function ErrorText1(props: Props) {
  return <>{props.err && <Text style={styles.txt}>{props.err}</Text>}</>;
}

const styles = StyleSheet.create({
  txt: {
    color: colors.RED,
    fontFamily: fonts.textRegular,
    fontSize: sizes._csreen_width * 0.03,
    marginTop: 5,
    alignSelf: 'center',

    width: sizes._screen_width * 0.8,
    textAlign: 'right',
  },
});
