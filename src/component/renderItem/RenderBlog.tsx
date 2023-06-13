import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import stylescustom from '../../res/stylescustom';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationProp} from '@react-navigation/native';
import {DateTimes} from '../../res/convert';
import images from '../../res/images';
export default function RenderBlog({
  item,
  index,
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
  item: Blog;
  index: number;
}) {
  return (
    <Pressable
      style={styles.view}
      key={index}
      onPress={() => {
        navigation.navigate('BlogPost', {
          item: item,
        });
      }}>
      <Image
        source={item?.banner?.url ? {uri: item?.banner?.url} : images.i2}
        resizeMode="contain"
        style={styles.img}
      />
      <Text style={{...styles.title, marginTop: 15}}>{item?.title}</Text>
      <View
        style={{
          ...stylescustom.view,
          marginTop: 15,
          width: sizes._screen_width * 0.4,
        }}>
        <View style={stylescustom.view1}>
          <Icon
            name="calendar"
            color={colors.GRAY}
            size={sizes._screen_width * 0.04}
          />
          <Text style={{...styles.content, marginLeft: 8}}>
            {DateTimes(item?.create_at)}
          </Text>
        </View>
        <View style={{...stylescustom.view1, marginLeft: 10}}>
          <Icon
            name="commenting"
            color={colors.GRAY}
            size={sizes._screen_width * 0.04}
          />
          <Text style={{...styles.content, marginLeft: 8}}>
            {item?.comments?.length}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.9,
    padding: 8,
    borderRadius: 15,
    backgroundColor: colors.WHITE,
    alignSelf: 'center',
    marginTop: sizes._screen_height * 0.02,
  },
  img: {
    width: sizes._screen_width * 0.85,
    height: sizes._screen_width * 0.6,
    alignSelf: 'center',
    borderRadius: 15,
  },
  title: {
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.045,
    color: colors.BLACK,
  },
  content: {
    color: colors.GRAY,
    fontSize: sizes._screen_width * 0.035,
  },
});
