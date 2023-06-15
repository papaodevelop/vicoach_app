import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import images from '../../res/images';
import {useGetBlogPostQuery} from '../../redux/state';

export default function Author({id}: {id: number}) {
  const {data} = useGetBlogPostQuery(`${id}`);
  return (
    <View style={styles.view2}>
      <Image
        source={
          data?.author?.image?.url
            ? {uri: data?.author?.image?.url}
            : images.noimage
        }
        resizeMode="cover"
        style={styles.img1}
      />
      <View style={{marginLeft: 8}}>
        <Text style={stylescustom.txt}>{data?.author?.name}</Text>
        <Text style={stylescustom.txt1}>Tác giả</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img1: {
    height: sizes._screen_width * 0.12,
    width: sizes._screen_width * 0.12,
    borderRadius: (sizes._screen_width * 0.12) / 2,
  },
  view2: {
    ...stylescustom.view1,
    marginTop: 15,
  },
});
