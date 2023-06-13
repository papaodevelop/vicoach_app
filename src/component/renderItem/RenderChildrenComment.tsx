import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import images from '../../res/images';
import {DateTimes} from '../../res/convert';
const RenderChildrenComment = ({item}: {item: ChildrenComment}) => {
  return (
    <View style={styles.view}>
      <View style={stylescustom.view1}>
        <Image
          source={
            item?.author?.image?.url
              ? {uri: item?.author?.image?.url}
              : images.noimage
          }
          style={styles.view1}
        />
        <Text style={{marginLeft: 10, ...stylescustom.txt}}>
          {item?.content}
        </Text>
      </View>
      <Text style={stylescustom.txt1}>{DateTimes(item?.created_at)}</Text>
    </View>
  );
};

export default RenderChildrenComment;

const styles = StyleSheet.create({
  view: {
    maxWidth: sizes._screen_width * 0.7,
    backgroundColor: '#e9efff',
    alignSelf: 'flex-end',
    padding: 10,
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
    marginRight: sizes._screen_width * 0.03,
  },
  view1: {height: 40, width: 40, borderRadius: 60},
});
