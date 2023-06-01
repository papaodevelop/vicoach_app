import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import sizes from '../../../res/sizes';
import stylescustom from '../../../res/stylescustom';
import {Time} from '../../../res/convert';

const CountTime = ({time}: {time: number}) => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={time * 60}
      size={sizes._screen_width * 0.4}
      colors={['#F7B801', '#A30000']}
      colorsTime={[10, 0]}>
      {({remainingTime}) => {
        if (remainingTime === 0) {
        }
        return (
          <>
            <Text style={stylescustom.txt}>
              {remainingTime == 0 ? 'Hết giờ' : Time(remainingTime)}
            </Text>
          </>
        );
      }}
    </CountdownCircleTimer>
  );
};

export default CountTime;

const styles = StyleSheet.create({});
