import {
  Alert,
  Dimensions,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {createRef, useEffect, useState} from 'react';
import Video from 'react-native-video';
import sizes from '../../res/sizes';
import images from '../../res/images';
import Orientation from 'react-native-orientation-locker';
import Control from './Control';
import stylescustom from '../../res/stylescustom';
import {FeaturedCoursess} from '../../datafeck/feck/Data';
import RenderListVideo from './RenderListVideo';
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
  const [duration, setDuration] = useState(0);
  const [select, setSelect] = useState(null);

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

    setCurrentTime(prevCount => (prevCount < 10 ? 0 : prevCount - 10));
  };
  const next = () => {
    videoRef.current.seek(currentTime + 10);
    setCurrentTime(prevCount =>
      prevCount >= duration - 10 ? duration : prevCount + 10,
    );
  };

  return (
    <View style={{flex: 1}}>
      <Pressable onPress={() => setShow(!show)}>
        <Video
          ref={videoRef}
          style={[
            fullscren ? styles.backgroundVideofull : styles.backgroundVideo,
          ]}
          paused={play}
          rate={1}
          muted={false}
          fullscreenOrientation="all"
          source={images.video}
          resizeMode="contain"
          volume={8}
          ignoreSilentSwitch="ignore"
          fullscreenAutorotate={true}
          onLoad={onLoad}
          onLoadStart={() => console.log('loadStart')}
          repeat={false}
          controls={false}
          onProgress={data => {
            setCurrentTime(data.currentTime);
            setDuration(data.playableDuration);
          }}
        />
        {show && (
          <View style={styles.control}>
            <Control
              back={() => navigation.goBack()}
              currentTime={currentTime}
              duration={duration > 0 ? duration : 0}
              previous={previous}
              onplay={play}
              fullscren={fullscren}
              handleFullScreen={handleFullScreen}
              show={show}
              setShow={setShow}
              pause={handlePause}
              play={handlePlay}
              next={next}
              onSlideCapture={(val: number) => {
                videoRef.current.seek(val);
                setCurrentTime(val);
              }}
            />
          </View>
        )}
      </Pressable>
      <Text style={styles.title}>
        Anh đã từ bỏ rồi đấy| Lofi chill | Nhạc tâm trạng
      </Text>
      <View
        style={{
          maxHeight: sizes._screen_height * 0.5,
          paddingBottom: sizes._screen_height * 0.01,
        }}>
        <FlatList
          data={FeaturedCoursess}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <RenderListVideo
              item={item}
              index={index}
              select={select}
              setSelect={setSelect}
            />
          )}
          contentContainerStyle={styles.view}
        />
      </View>
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
    position: 'absolute',
  },
  control: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  title: {
    ...stylescustom.txtBold,
    fontSize: sizes._screen_width * 0.05,
    width: sizes._screen_width * 0.96,
    alignSelf: 'center',
    marginTop: 10,
  },
  view: {
    marginTop: 10,
    width: sizes._screen_width,
    alignItems: 'center',
  },
});
