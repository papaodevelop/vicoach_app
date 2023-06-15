import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
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
import WebView from 'react-native-webview';
import RenderHtml from 'react-native-render-html';
import Author from './Author';
export default function BlogPost({
  navigation,
  route,
}: {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}) {
  const item = route?.params?.item as Blog;
  const {width} = useWindowDimensions();
  const ListFood = () => {
    return (
      <>
        <View style={styles.view}>
          <Text style={styles.txt}>{item?.title}</Text>
          <Text style={stylescustom.txt1}>{item?.postCategory?.name?.vi}</Text>

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
          <Author id={item?.id} />
          <RenderHtml
            contentWidth={width}
            source={{html: `${item?.content}`}}
          />

          <>
            <Text style={{...styles.txt, marginTop: 15}}>
              Bình luận ({item?.comments?.length})
            </Text>
            <Comment id={item?.id} />
          </>
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
        keyExtractor={(item: Blog) => `ass${item.id}`}
        contentContainerStyle={stylescustom.paddingBottom}
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

  img: {
    width: sizes._csreen_width * 0.95,
    height: sizes._screen_width * 0.6,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: 'white',
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
