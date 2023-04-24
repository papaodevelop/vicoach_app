//best desing in
//iphone 6 (w:375)
//android (w:420)
import {
  Dimensions,
  PixelRatio,
  Platform,
  PlatformIOSStatic,
  StatusBar,
} from 'react-native';

const sizes = new (class {
  IS_NEW_WAY = true;

  width =
    Dimensions.get('window').width < Dimensions.get('window').height
      ? Dimensions.get('window').width
      : Dimensions.get('window').height;
  os = Platform.OS;
  _csreen_width = Dimensions.get('window').width;
  _csreen_height = Dimensions.get('window').height;
  _screen_width = Dimensions.get('window').width;
  _screen_height = Dimensions.get('window').height;

  ratioDesign = (this.os === 'ios' ? 414 : 414) / 896;
})();

export default sizes;
