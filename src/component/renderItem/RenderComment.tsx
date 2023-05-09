import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';

export default function RenderComment({item}: any) {
  return (
    <View style={styles.view}>
      <View>
        <View style={stylescustom.view1}>
          <Image source={item.img} style={styles.img} />
          <View style={{marginLeft: 10}}>
            <Text style={stylescustom.txt}>{item.name}</Text>
            <Text style={stylescustom.txt1}>teacher</Text>
          </View>
        </View>
        <Text style={{...stylescustom.txt1, marginTop: 5}}>{item.title}</Text>
        <Text
          style={{
            ...stylescustom.txt1,
            fontSize: sizes._screen_width * 0.03,
            marginTop: 5,
          }}>
          {item.time}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.95,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    ...stylescustom.view,
  },
  img: {
    height: sizes._screen_width * 0.12,
    width: sizes._screen_width * 0.12,
    borderRadius: (sizes._screen_width * 0.12) / 2,
  },
});
