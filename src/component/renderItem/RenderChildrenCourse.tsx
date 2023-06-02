import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';

const RenderChildrenCourse = ({items, navigation}: any) => {
  return (
    <Pressable
      style={styles.txt1}
      onPress={() =>
        navigation.navigate('DetailCategories', {
          title: items?.name?.vi || items?.name?.en,
          item: items?.id,
        })
      }>
      <Text style={stylescustom.txtBold}>
        {items?.name?.vi || items?.name?.en}
      </Text>
    </Pressable>
  );
};

export default RenderChildrenCourse;

const styles = StyleSheet.create({
  txt1: {
    height: sizes._screen_height * 0.04,
    width: sizes._screen_width * 0.5,
    justifyContent: 'center',
    marginLeft: sizes._screen_width * 0.2,
  },
});
