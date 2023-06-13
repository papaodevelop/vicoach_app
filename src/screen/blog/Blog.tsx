import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import HeaderScreen1 from '../../component/header/HeaderScreen1';
import RenderBlog from '../../component/renderItem/RenderBlog';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import {useGetBlogPostQuery} from '../../redux/state';
export default function Blog({navigation}: any) {
  const {data} = useGetBlogPostQuery('');
  return (
    <View style={styles.container}>
      <HeaderScreen1 navigation={navigation} title="Blog" />
      <FlatList
        keyboardDismissMode="none"
        data={data?.items}
        renderItem={({item, index}) => (
          <RenderBlog item={item} index={index} navigation={navigation} />
        )}
        contentContainerStyle={{
          marginTop: sizes._screen_height * 0.01,
          ...stylescustom.paddingBottom,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: Blog) => `${item.id}`}
        removeClippedSubviews={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
