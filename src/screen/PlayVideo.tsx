import {
  Alert,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {createRef, useState} from 'react';
import Video from 'react-native-video';
import sizes from '../res/sizes';
import images from '../res/images';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const windowHeight = sizes._screen_width * (9 / 12);
const windowWith = sizes._screen_width;
export default function PlayVideo() {
  const onLoad = () => {
    console.log('endload');
  };
  const videoRef = createRef<any>();
  const [fullscren, setFullscren] = useState(false);
  const handleFullScreen = () => {
    if (fullscren) {
    }
  };
  return (
    <View>
      <StatusBar hidden={true} />

      <Video
        ref={videoRef}
        style={styles.backgroundVideo}
        fullscreenOrientation="all"
        source={images.video}
        resizeMode="contain"
        volume={5}
        muted={false}
        ignoreSilentSwitch="ignore"
        fullscreen={false}
        fullscreenAutorotate={true}
        onLoad={onLoad}
        onLoadStart={() => console.log('loadStart')}
        automaticallyWaitsToMinimizeStalling={true}
        repeat={false}
        controls={false}
        accessibilityViewIsModal={false}
      />
      <View style={styles.controlOverplay}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: windowHeight,
    width: windowWith,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 50,
  },
  controlOverplay: {},
});
