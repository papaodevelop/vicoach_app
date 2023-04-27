import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
interface Props {
  navigation: any;
  item: any;
}
export default function RenderItemDrawer(props: Props) {
  let item = props.item;
  return (
    <TouchableOpacity
      style={styles.view}
      onPress={() => props.navigation.navigate(item.navigation)}>
      <View style={stylescustom.view1}>
        <Image source={item?.icon} style={styles.icon} />
        <Text style={styles.txt}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: colors.WHITE,
    fontFamily: fonts.textRegular,
    fontSize: sizes._csreen_width * 0.04,
    marginLeft: 15,
  },
  view: {
    marginTop: sizes._screen_height * 0.035,
  },
  icon: {
    tintColor: colors.WHITE,
    height: sizes._screen_width * 0.065,
    width: sizes._screen_width * 0.065,
  },
});
