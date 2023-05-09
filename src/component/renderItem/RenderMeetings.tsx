import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MeetingsTypes} from '../../../types/MeetingsType';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import fonts from '../../res/fonts';
import {NavigationProp} from '@react-navigation/native';
interface Props {
  item: MeetingsTypes;
  index: number;
  navigation: NavigationProp<Record<string, any>>;
}
export default function RenderMeetings(props: Props) {
  return (
    <Pressable
      key={props.index}
      style={styles.view}
      onPress={() =>
        props.navigation.navigate('MeetingsDetails', {
          item: props.item,
        })
      }>
      <View style={styles.item}>
        <Image
          source={props.item.image}
          style={styles.img}
          resizeMode="contain"
        />
        <View style={styles.view1}>
          <View style={stylescustom.view}>
            <Text style={stylescustom.txt2}>{props.item.name}</Text>
            <View style={styles.view2}>
              <Text style={styles.status}>{props.item.status}</Text>
            </View>
          </View>
          <View style={stylescustom.view}>
            <View style={stylescustom.view1}>
              <Icon
                name="calendar"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
              />
              <Text style={styles.txt}>{props.item.startDate}</Text>
            </View>
            <View style={{...stylescustom.view1, marginLeft: 10}}>
              <Icon
                name="clock-o"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
              />
              <Text style={styles.txt}>
                {props.item.startTime + '-' + props.item.endTime}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    ...stylescustom.view1,
    width: sizes._screen_width * 0.85,
    alignSelf: 'center',
  },
  img: {
    height: sizes._screen_width * 0.18,
    width: sizes._screen_width * 0.18,
    borderRadius: sizes._screen_width * 0.18 * 0.3,
  },
  view: {
    width: sizes._screen_width * 0.9,
    alignSelf: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: sizes._screen_width * 0.9 * 0.04,
    paddingTop: 5,
    paddingBottom: 5,
  },
  view1: {
    justifyContent: 'space-between',
    marginLeft: 10,
    height: sizes._screen_width * 0.14,
  },
  txt: {
    marginLeft: 5,
    ...stylescustom.txt1,
  },
  status: {
    color: colors.WHITE,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.035,
  },
  view2: {
    backgroundColor: colors.GREEN,
    paddingHorizontal: 8,
    borderRadius: 10,
    paddingVertical: 3,
  },
});
