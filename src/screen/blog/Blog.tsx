import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen1 from '../../component/header/HeaderScreen1';
import DataBlog from '../../datafeck/feck/DataBlog';
import RenderBlog from '../../component/renderItem/RenderBlog';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';

export default function Blog({navigation}: any) {
  return (
    <View style={styles.container}>
      <HeaderScreen1 navigation={navigation} title="Blog" />
      <FlatList
        data={DataBlog}
        renderItem={({item, index}) => (
          <RenderBlog item={item} index={index} navigation={navigation} />
        )}
        contentContainerStyle={{
          marginTop: sizes._screen_height * 0.01,
          ...stylescustom.paddingBottom,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
