import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import Icon from 'react-native-vector-icons/Foundation';
import colors from '../../res/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import Icons from 'react-native-vector-icons/Entypo';
interface Props {
  handleFullScreen: () => void;
  fullscren: boolean;
  setShow: (val: boolean) => void;
  show: boolean;
  play: () => void;
  pause: () => void;
  onplay: boolean;
  previous: () => void;
  next: () => void;
  currentTime: number;
  duration: number;
  onSlideCapture: (time: number) => void;
  back: any;
}
const Control = (props: Props) => {
  const getMinutesFronSeconds = (time: number) => {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);
    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  };
  const position = getMinutesFronSeconds(props.currentTime);
  const fullDuration = getMinutesFronSeconds(props.duration);
  const handleOnSlide = (time: number) => {
    props.onSlideCapture(time);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      props.setShow(false);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [props.show]);

  return (
    <>
      <View style={styles.dot}></View>
      <View style={styles.wrapper}>
        <Icon
          onPress={props.previous}
          name="rewind"
          size={sizes._screen_width * 0.09}
          color={colors.WHITE}
        />

        {Math.floor(props.currentTime) == Math.floor(props.duration) ? (
          <Icon
            onPress={() => props.onSlideCapture(0)}
            name={'refresh'}
            size={sizes._screen_width * 0.09}
            color={colors.WHITE}
          />
        ) : (
          <Icon
            onPress={() => {
              props.onplay ? props.pause() : props.play();
            }}
            name={props.onplay ? 'play' : 'pause'}
            size={sizes._screen_width * 0.09}
            color={colors.WHITE}
          />
        )}
        <Icon
          onPress={props.next}
          name="fast-forward"
          size={sizes._screen_width * 0.09}
          color={colors.WHITE}
        />
      </View>

      <View
        style={{
          width: props.fullscren ? sizes._csreen_height : sizes._csreen_width,
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
        }}>
        <View
          style={{
            ...stylescustom.view,
            width: props.fullscren
              ? sizes._csreen_height * 0.98
              : sizes._csreen_width * 0.95,
          }}>
          <View style={{...stylescustom.view1}}>
            <Text
              style={{
                ...stylescustom.txt1,
                color: colors.WHITE,
              }}>
              {position}/{' '}
            </Text>
            <Text
              style={{
                ...stylescustom.txt1,
                color: colors.WHITE,
                opacity: 0.8,
              }}>
              {fullDuration}
            </Text>
          </View>
          <Pressable
            style={styles.controlOverplay}
            onPress={() => {
              props.handleFullScreen();
            }}>
            <MaterialIcon
              name={props.fullscren ? 'fullscreen-exit' : 'fullscreen'}
              color={'white'}
              size={40}
              style={{opacity: 0.8}}
            />
          </Pressable>
        </View>

        <Slider
          style={{
            width: props.fullscren
              ? sizes._csreen_height * 0.98
              : sizes._csreen_width * 0.98,
          }}
          value={props.currentTime}
          onValueChange={handleOnSlide}
          minimumValue={0}
          maximumValue={props.duration}
          thumbTintColor="#F44336"
          minimumTrackTintColor="#F44336"
          maximumTrackTintColor="white"
          step={0.01}
        />
      </View>
    </>
  );
};

export default Control;

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    ...stylescustom.view,
    width: sizes._screen_width * 0.8,
    opacity: 0.8,
  },
  controlOverplay: {
    opacity: 0.8,
  },
  dot: {
    position: 'absolute',
    left: 10,
    alignSelf: 'flex-start',
    top: sizes._screen_height * 0.05,
    opacity: 0.8,
  },
});
