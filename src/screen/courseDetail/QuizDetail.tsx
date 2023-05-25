import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';

const QuizDetail = ({item}: {item: any}) => {
  return (
    <View style={styles.view}>
      <View
        style={{
          ...styles.view1,
        }}>
        <Icon
          name="grav"
          color={colors.WHITE}
          size={sizes._csreen_width * 0.08}
        />
      </View>
      <View style={styles.view2}>
        <Text style={stylescustom.txt2}>{item?.quiz?.title?.vi} </Text>
      </View>
    </View>
  );
};
export default QuizDetail;

const styles = StyleSheet.create({
  view: {
    height: sizes._screen_width * 0.2,
    width: sizes._screen_width * 0.7,
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    ...stylescustom.view1,
    padding: 10,
    marginLeft: sizes._screen_width * 0.05,
  },
  view1: {
    width: sizes._screen_width * 0.15,
    height: sizes._screen_width * 0.15,
    backgroundColor: colors.ORANGE,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {marginLeft: 10},
});
