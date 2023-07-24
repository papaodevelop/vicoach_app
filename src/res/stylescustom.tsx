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
  txtBold: {
    color: colors.BLACK,
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.04,
  },
  txt1: {
    color: colors.GRAY,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.035,
  },
  txtGray: {
    color: colors.GRAY,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
  },
  txt2: {
    color: colors.BLACK,
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.04,
    width: sizes._screen_width * 0.5,
  },
  txt3: {
    color: colors.BLACK,
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.035,
  },
  numbercolum2: {
    justifyContent: 'space-between',
    width: sizes._screen_width * 0.9,
    alignSelf: 'center',
  },
  paddingBottom: {
    paddingBottom: sizes._screen_height * 0.15,
  },
  container: {
    flex: 1,
  },
  shadowitem: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export default stylescustom;
