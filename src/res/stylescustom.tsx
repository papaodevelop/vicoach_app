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
  numbercolum2: {
    justifyContent: 'space-between',
    width: sizes._screen_width * 0.9,
    alignSelf: 'center',
  },
  paddingBottom: {
    paddingBottom: sizes._screen_height * 0.15,
  },
});
export default stylescustom;
