import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import {Image} from 'react-native';
import {txt2, txt3} from '../../res/convert';

const RenderListVideo = ({item, index, select, setSelect}: any) => {
  return (
    <Pressable
      style={{
        ...styles.view,
        backgroundColor: select === item.id ? 'rgb(175,238,238)' : undefined,
      }}
      key={index}
      onPress={() => setSelect(item.id)}>
      <View style={{...stylescustom.view1, width: sizes._screen_width * 0.95}}>
        <Image source={item.image} style={styles.img} />
        <View style={styles.view1}>
          <Text style={stylescustom.txt}>{txt2(item.name)}</Text>
          <Text style={{...stylescustom.txt1, marginTop: 10}}>
            GV: {txt3(item.lecturers)}
          </Text>
          <Text style={{...stylescustom.txt1, marginTop: 10}}>{item.time}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RenderListVideo;

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width,
    paddingVertical: 8,
    alignItems: 'center',
  },
  img: {
    height: sizes._screen_width * 0.2,
    width: sizes._screen_width * 0.35,
    borderRadius: 10,
  },
  view1: {
    height: sizes._screen_width * 0.2,
    marginLeft: 10,
    width: sizes._screen_width * 0.5,
  },
});
