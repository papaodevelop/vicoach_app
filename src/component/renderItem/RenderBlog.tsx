import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import {txt1Blog} from '../../res/convert';
import stylescustom from '../../res/stylescustom';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function RenderBlog({item, index, navigation}: any) {
  return (
    <Pressable
      style={styles.view}
      key={index}
      onPress={() => {
        navigation.navigate('BlogPost', {
          item: item,
        });
      }}>
      <Image source={{uri: item?.img}} resizeMode="cover" style={styles.img} />
      <Text style={{...styles.title, marginTop: 15}}>{item?.title}</Text>
      <Text style={{...styles.content, marginTop: 15}}>
        {txt1Blog(item?.conten)}
      </Text>
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
          <Text style={{...styles.content, marginLeft: 8}}>{item.time}</Text>
        </View>
        <View style={{...stylescustom.view1}}>
          <Icon
            name="commenting"
            color={colors.GRAY}
            size={sizes._screen_width * 0.04}
          />
          <Text style={{...styles.content, marginLeft: 8}}>
            {item?.comment?.length}
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
