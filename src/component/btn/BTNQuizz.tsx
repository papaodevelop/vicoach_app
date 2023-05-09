import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import {Pressable} from 'react-native';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
interface Props {
  view: ViewStyle;
  next: () => void;
  return: () => void;
  index: number;
}
export default function BTNQuizz(props: Props) {
  return (
    <View style={{...styles.view, ...props.view}}>
      {props.index == 0 ? (
        <Pressable onPress={props.next} style={styles.btn}>
          <Text style={styles.txt}>Tiếp theo</Text>
        </Pressable>
      ) : props.index == 4 ? (
        <Pressable
          onPress={props.return}
          style={{...styles.btn, backgroundColor: colors.GRAY}}>
          <Text style={styles.txt}>Trở lại</Text>
        </Pressable>
      ) : (
        <>
          <Pressable
            style={{...styles.view1, backgroundColor: colors.GRAY}}
            onPress={props.return}>
            <Text style={styles.txt}>Trở lại</Text>
          </Pressable>
          <Pressable style={styles.view1} onPress={props.next}>
            <Text style={styles.txt}>Tiếp theo</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    ...stylescustom.view,
  },
  view1: {
    backgroundColor: colors.ORANGE,
    height: sizes._screen_width * 0.12,
    width: sizes._screen_width * 0.4,
    borderRadius: (sizes._screen_width * 0.12) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    ...stylescustom.txt,
    color: colors.WHITE,
  },
  btn: {
    backgroundColor: colors.ORANGE,
    height: sizes._screen_width * 0.12,
    width: sizes._screen_width * 0.9,
    borderRadius: (sizes._screen_width * 0.12) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
