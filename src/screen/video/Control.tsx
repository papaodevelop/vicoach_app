import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import Icon from 'react-native-vector-icons/Foundation';
import colors from '../../res/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
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
}
const Control = (props: Props) => {
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
      <View style={styles.wrapper}>
        <Icon
          onPress={props.previous}
          name="previous"
          size={sizes._screen_width * 0.09}
          color={colors.WHITE}
        />

        <Icon
          onPress={() => {
            props.onplay ? props.pause() : props.play();
          }}
          name={props.onplay ? 'play' : 'pause'}
          size={sizes._screen_width * 0.09}
          color={colors.WHITE}
        />

        <Icon
          onPress={props.next}
          name="next"
          size={sizes._screen_width * 0.09}
          color={colors.WHITE}
        />
      </View>
      <View
        style={{
          ...stylescustom.view,
          width: '98%',
          alignSelf: 'center',
          position: 'absolute',
          bottom: 10,
        }}>
        <Slider
          style={{
            width: '80%',
            left: 20,
          }}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="red"
          minimumTrackTintColor="red"
          maximumTrackTintColor="red"
          step={1}
        />
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
    right: 10,
    opacity: 0.8,
  },
});
