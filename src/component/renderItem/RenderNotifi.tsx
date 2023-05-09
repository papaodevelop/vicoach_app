import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function RenderNotifi({item}: any) {
  return (
    <View style={styles.view}>
      <View style={stylescustom.view1}>
        <View style={styles.view1}>
          <Icon
            name="notifications"
            size={sizes._screen_width * 0.08}
            color={colors.WHITE}
          />
        </View>
        <View style={styles.view2}>
          <Text>{item.name}</Text>
          <View style={stylescustom.view1}>
            <Text>{item.date}</Text>
            <Text>{item.time}</Text>
          </View>
        </View>
      </View>
      <FontAwesome
        name="trash"
        color={colors.BLACK}
        size={sizes._screen_width * 0.08}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    padding: 8,
    width: sizes._screen_width * 0.9,
    alignSelf: 'center',
    marginTop: 10,
    ...stylescustom.view,
  },
  view1: {
    height: sizes._screen_width * 0.15,
    width: sizes._screen_width * 0.15,
    backgroundColor: '#FFCC99',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    height: sizes._screen_width * 0.12,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
});
