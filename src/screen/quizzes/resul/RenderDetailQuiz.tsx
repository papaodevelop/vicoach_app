import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../res/colors';
import sizes from '../../../res/sizes';
import stylescustom from '../../../res/stylescustom';
interface Props {
  item: any;
  index: number;
  choose: any;
  answer: any;
}
export default function RenderDetailQuiz(props: Props) {
  const color =
    props.item.name === props.choose
      ? colors.GREEN
      : props.item.name === props.answer && props.answer !== props.choose
      ? colors.RED
      : 'transparent';
  const text = props.item.name === props.answer ? 'Bạn chọn' : null;

  return (
    <>
      <View style={{...styles.view, borderColor: color, borderWidth: 1}}>
        <Text style={stylescustom.txt}>{props.item.name}</Text>

        {text ? (
          <View
            style={{
              ...styles.view1,
              backgroundColor: color == colors.GREEN ? '#83d59f' : '#fd9292',
            }}>
            <Text
              style={{
                ...styles.txt,
                color: color == colors.GREEN ? colors.GREEN : colors.RED,
              }}>
              {text}
            </Text>
          </View>
        ) : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.WHITE,
    height: sizes._screen_width * 0.4,
    width: sizes._screen_width * 0.4,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  txt: {
    ...stylescustom.txt1,
    padding: 3,
    fontSize: sizes._screen_width * 0.03,
  },
  view1: {
    backgroundColor: '#83d59f',
    padding: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 15,
  },
});
