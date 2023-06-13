import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import {Image} from 'react-native';
import Star from '../../component/Star';
import images from '../../res/images';
import {DateTime, DateTimes} from '../../res/convert';

export default function RenderComment({item}: {item: CoursesReview}) {
  return (
    <View style={styles.view}>
      <View style={stylescustom.view}>
        <View style={stylescustom.view1}>
          <Image
            source={
              item?.user?.image?.url
                ? {uri: item?.user?.image?.url}
                : images.noimage
            }
            style={styles.img}
          />
          <View style={styles.view1}>
            <Text style={stylescustom.txt}>{item?.user?.name}</Text>
            <Text style={stylescustom.txt1}>{DateTimes(item?.created_at)}</Text>
          </View>
        </View>
        <Star star={item?.rating} width={sizes._screen_width * 0.2} />
      </View>
      <Text style={styles.txt}>{item?.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    width: sizes._screen_width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
  },
  img: {
    height: sizes._screen_width * 0.12,
    width: sizes._screen_width * 0.12,
    borderRadius: (sizes._screen_width * 0.12) / 2,
  },
  view1: {
    marginLeft: 10,
  },
  txt: {
    ...stylescustom.txt1,
    marginTop: 8,
  },
});
