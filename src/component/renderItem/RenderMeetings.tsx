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
      <Image
        source={props.item.image}
        style={styles.img}
        resizeMode="contain"
      />
      <View style={{marginLeft: 15}}>
        <Text
          style={{
            fontFamily: fonts.textRegular,
            fontSize: 20,
            color: colors.BLACK,
          }}>
          {props.item.name}
        </Text>
        <View style={styles.view1}>
          <Icon name="user" color={colors.BLACK} size={20} />
          <Text style={styles.txt}>{props.item.position}</Text>
        </View>
        <View style={stylescustom.view}>
          <View style={styles.view1}>
            <Icon name="calendar" color={colors.BLACK} size={20} />
            <Text style={styles.txt}>{props.item.startDate}</Text>
          </View>
          <View style={{...styles.view1, marginLeft: 10}}>
            <Icon name="clock-o" color={colors.BLACK} size={20} />
            <Text style={styles.txt}>
              {props.item.startTime}-{props.item.endTime}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    ...stylescustom.view1,
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
    borderRadius: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  txt: {
    color: colors.BLACK,
    fontFamily: fonts.textRegular,
    fontSize: sizes._csreen_width * 0.035,
    marginLeft: 5,
  },
  view1: {
    ...stylescustom.view1,
    marginTop: 5,
  },
});
