import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DateTimes, txt4} from '../../res/convert';
export default function RenderNotifi({
  item,
  onPressItem,
}: {
  item: Notification;
  onPressItem: (val: any) => void;
}) {
  return (
    <Pressable style={styles.view} onPress={() => onPressItem(item)}>
      <View style={stylescustom.view1}>
        <View style={styles.view1}>
          <Icon
            name="notifications"
            size={sizes._screen_width * 0.08}
            color={colors.WHITE}
          />
          {item?.status == 'READ' && <View style={styles.view3} />}
        </View>
        <View style={styles.view2}>
          <Text style={stylescustom.txtBold}>{txt4(item?.title)}</Text>
          <Text style={stylescustom.txt}>{txt4(item?.body)}</Text>
          <Text style={stylescustom.txtGray}>
            {DateTimes(item?.created_at)}
          </Text>
        </View>
      </View>
      <FontAwesome
        name="trash"
        color={colors.BLACK}
        size={sizes._screen_width * 0.08}
      />
    </Pressable>
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
    justifyContent: 'space-between',
    marginLeft: 10,
    height: sizes._screen_width * 0.15,
  },
  view3: {
    backgroundColor: 'red',
    height: sizes._screen_width * 0.03,
    width: sizes._screen_width * 0.03,
    position: 'absolute',
    top: 10,
    right: 17,
    borderRadius: 20,
  },
});
