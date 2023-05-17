import {
  Alert,
  Dimensions,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import React, {createRef, useEffect, useMemo, useState} from 'react';
import Video from 'react-native-video';
import sizes from '../../res/sizes';
import images from '../../res/images';
import Orientation from 'react-native-orientation-locker';
import HeaderScreen from '../../component/header/HeaderScreen';
import Control from './Control';
const windowHeight = sizes._screen_width * (9 / 12);
const windowWith = sizes._screen_width;
export default function PlayVideo({navigation}: any) {
  const onLoad = () => {
    console.log('endload');
  };
  const videoRef = createRef<any>();
  const [fullscren, setFullscren] = useState(false);
  const [show, setShow] = useState(false);
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    Orientation.addDeviceOrientationListener(handleOrientation);
    if (!fullscren) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
  }, [fullscren]);
  const handleFullScreen = () => {
    setFullscren(!fullscren);
  };
  const handleOrientation = (orientation: any) => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      setFullscren(true);
      StatusBar.setHidden(true);
    } else {
      setFullscren(false);
      StatusBar.setHidden(false);
    }
  };
  const handlePlay = () => {
    setPlay(true);
  };
  const handlePause = () => {
    setPlay(false);
  };
  const previous = () => {
    videoRef.current.seek(currentTime - 10);
    setCurrentTime(currentTime - 10);
  };
  const next = () => {
    videoRef.current.seek(currentTime + 10);
    setCurrentTime(currentTime + 10);
  };
  return (
    <View>
      {!fullscren && (
        <View style={{paddingBottom: 30}}>
          <HeaderScreen navigation={navigation} title="Video" />
        </View>
      )}
      <Pressable onPress={() => setShow(!show)}>
        <Video
          ref={videoRef}
          style={[
            fullscren ? styles.backgroundVideofull : styles.backgroundVideo,
            ,
          ]}
          paused={play}
          fullscreenOrientation="all"
          source={images.video}
          resizeMode="contain"
          volume={3}
          ignoreSilentSwitch="ignore"
          fullscreenAutorotate={true}
          onLoad={onLoad}
          onLoadStart={() => console.log('loadStart')}
          automaticallyWaitsToMinimizeStalling={true}
          repeat={false}
          controls={false}
        />
        {show && (
          <View
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.15)',
            }}>
            <Control
              previous={previous}
              onplay={play}
              fullscren={fullscren}
              handleFullScreen={handleFullScreen}
              show={show}
              setShow={setShow}
              pause={handlePause}
              play={handlePlay}
              next={next}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundVideo: {
    height: windowHeight,
    width: windowWith,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  backgroundVideofull: {
    height: sizes.width,
    width: sizes._csreen_height,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  controlOverplay: {
    bottom: 10,
    right: 10,
    position: 'absolute',
  },
});
