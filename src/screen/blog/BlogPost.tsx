import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen from '../../component/header/HeaderScreen';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import fonts from '../../res/fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../res/colors';
import {FlatList} from 'react-native';

import {NavigationProp} from '@react-navigation/native';
import {DateTimes} from '../../res/convert';
import images from '../../res/images';
import Comment from './Comment';
import {useGetBlogPostQuery} from '../../redux/state';
import WebView from 'react-native-webview';
export default function BlogPost({
  navigation,
  route,
}: {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}) {
  const item = route.params.item as Blog;
  const {data, refetch} = useGetBlogPostQuery(`${item.id}`);

  const ListFood = () => {
    return (
      <>
        <View style={styles.view}>
          <Text style={styles.txt}>{data?.title}</Text>
          <Text style={stylescustom.txt1}>{data?.postCategory?.name?.vi}</Text>

          <View style={styles.view1}>
            <Icon
              name="calendar"
              color={colors.GRAY}
              size={sizes._screen_width * 0.04}
            />
            <Text style={styles.txt1}>{DateTimes(item?.create_at)}</Text>
          </View>
          <Image
            source={item?.banner?.url ? {uri: item?.banner?.url} : images.i2}
            style={styles.img}
            resizeMode="contain"
          />
          <View style={styles.view2}>
            <Image
              source={
                data?.author?.image?.url
                  ? {uri: data?.author?.image?.url}
                  : images.kien
              }
              resizeMode="cover"
              style={styles.img1}
            />
            <View style={{marginLeft: 8}}>
              <Text style={stylescustom.txt}>{data?.author?.name}</Text>
              <Text style={stylescustom.txt1}>Tác giả</Text>
            </View>
          </View>
          <Text style={styles.txt2}>{data?.title}</Text>
          {/* <WebView
            style={{
              width: sizes._screen_width,
              backgroundColor: 'transparent',
            }}
            originWhitelist={['*']}
            source={{html: `${item?.content}`}}
          /> */}
          {item?.comments?.length > 0 && (
            <>
              <Text style={{...styles.txt, marginTop: 15}}>
                Bình luận ({data?.comments?.length})
              </Text>
              <Comment item={item} />
            </>
          )}
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderScreen title="Bài Viết" navigation={navigation} />
      <FlatList
        data={[]}
        renderItem={null}
        ListFooterComponent={() => <ListFood />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        keyExtractor={(item: Blog) => `ass${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  view: {
    width: sizes._csreen_width * 0.95,
    marginTop: 20,
  },
  txt: {
    ...stylescustom.txt,
    fontSize: sizes._screen_width * 0.045,
    fontFamily: fonts.textBold,
  },
  view1: {
    ...stylescustom.view1,
    marginTop: 10,
  },
  txt1: {
    ...stylescustom.txt1,
    marginLeft: 10,
  },
  view2: {
    ...stylescustom.view1,
    marginTop: 15,
  },
  img: {
    width: sizes._csreen_width * 0.95,
    height: sizes._screen_width * 0.6,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  img1: {
    height: sizes._screen_width * 0.12,
    width: sizes._screen_width * 0.12,
    borderRadius: (sizes._screen_width * 0.12) / 2,
  },
  txt2: {
    ...stylescustom.txt,
    marginTop: 10,
  },
  view3: {
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    padding: 10,
  },
});
