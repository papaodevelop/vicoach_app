import {StyleSheet} from 'react-native';
import colors from './colors';
import fonts from './fonts';
import sizes from './sizes';

const stylescustom = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    color: colors.BLACK,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
  },
});
export default stylescustom;
