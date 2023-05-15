import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import stylescustom from '../../res/stylescustom';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
interface Props {
  item: any;
  index: number;
  title: string;
}
export default function RenderContent(props: Props) {
  return (
    <View style={styles.view}>
      <View
        style={{
          ...styles.view1,
          backgroundColor:
            props.title == 'Chứng nhận' ? colors.ORANGE : colors.GREEN,
        }}>
        {props.title == 'Chứng nhận' ? (
          <Icons
            name="certificate"
            color={colors.WHITE}
            size={sizes._csreen_width * 0.08}
          />
        ) : (
          <Icon
            name="play"
            color={colors.WHITE}
            size={sizes._csreen_width * 0.08}
          />
        )}
      </View>
      <View style={styles.view2}>
        <Text style={stylescustom.txt2}>{props.item.name}</Text>
        <Text style={stylescustom.txt1}>{'4.10'}</Text>
      </View>
    </View>
  );
}

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
    backgroundColor: colors.GREEN,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {marginLeft: 10},
});
