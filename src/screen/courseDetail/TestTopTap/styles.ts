import {StyleSheet, Dimensions, Platform} from 'react-native';
import stylescustom from '../../../res/stylescustom';
import sizes from '../../../res/sizes';
import fonts from '../../../res/fonts';
const G_WIN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabbarStyle: {
    height: 50,
    marginTop: sizes._csreen_height * 0.03,
    backgroundColor: '#fff',
  },
  tabbarBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbarImage: {
    width: 15,
    height: 15,
  },
  tabviewLayout: {
    width: G_WIN_WIDTH,
  },
  headerStyle: {
    backgroundColor: '#fff',
    width: '100%',
  },
  titleStyle: {
    color: '#333',
    fontSize: 15,
  },
  detailStyle: {
    color: '#888',
    fontSize: 12,
  },
  sectionTitle: {
    color: '#4D4D4D',
    fontSize: 15,
  },
  flatItem: {
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionItem: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
  },
  addHeaderTitle: {
    color: 'red',
    fontSize: 18,
  },
  subTitle: {
    color: '#848484',
    fontSize: 15,
    marginTop: 20,
    paddingHorizontal: 30,
    textAlign: 'center',
    ...Platform.select({
      android: {
        fontFamily: fonts.textRegular,
      },
    }),
  },
  txt: {
    ...stylescustom.txt3,
    fontSize: sizes._screen_width * 0.05,
    marginTop: sizes._screen_height * 0.03,
  },
  view: {
    width: sizes._screen_width * 0.95,
    alignSelf: 'center',
  },

  view1: {
    marginRight: sizes._screen_width * 0.05,
    ...stylescustom.view,
    marginTop: 10,
  },

  txt1: {
    ...stylescustom.txt3,
    fontSize: sizes._screen_width * 0.05,
  },
  txt2: {
    ...stylescustom.txt,
    marginLeft: 5,
  },
  view3: {
    ...stylescustom.view1,
    marginTop: 15,
  },
});
