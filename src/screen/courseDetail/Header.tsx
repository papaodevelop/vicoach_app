import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CourseDetail} from '../../../types/CourseDetail';
import HTML from 'react-native-render-html';

import images from '../../res/images';
import stylescustom from '../../res/stylescustom';
import Icon from 'react-native-vector-icons/Entypo';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import WebView from 'react-native-webview';
import Loading from '../../component/loading/Loading';
const Header = ({
  onShow,
  data,
}: {
  onShow: () => void;
  data: CourseDetail | undefined;
}) => {
  const [load, setLoad] = useState(false);
  let url = data?.youtube_link as string;
  function layMaVideoTuURL(urls: string) {
    let maVideo = urls.substring(urls.lastIndexOf('/') + 1);
    if (maVideo.includes('?')) {
      maVideo = maVideo.substring(0, maVideo.indexOf('?'));
    }
    return maVideo;
  }

  return (
    <View pointerEvents="auto" style={{paddingBottom: 30}}>
      {data?.youtube_link ? (
        <>
          <WebView
            style={styles.img}
            onLoadStart={() => setLoad(true)}
            onLoadEnd={() => setLoad(false)}
            source={{
              uri: `https://youtobe.com/embed/${layMaVideoTuURL(
                url,
              )}?rel=0&autoplay=0&showinfo=0`,
            }}
          />
          {load && <Loading />}
        </>
      ) : data?.video_overview?.url ? (
        <>
          <WebView
            style={styles.img}
            onLoadStart={() => setLoad(true)}
            onLoadEnd={() => setLoad(false)}
            source={{
              uri: data?.video_overview?.url,
            }}
            mediaPlaybackRequiresUserAction={false}
          />
        </>
      ) : (
        <>
          <Image
            source={
              data?.thumbnail?.url ? {uri: data?.thumbnail?.url} : images.i2
            }
            style={styles.img}
            resizeMode="stretch"
          />
        </>
      )}
      <View style={styles.viewHeader}>
        <View style={stylescustom.view1}>
          <Image
            source={
              data?.assign_instructor?.image?.url
                ? {uri: data?.assign_instructor?.image?.url}
                : images.noimage
            }
            style={styles.avt}
          />
          <View
            style={{
              marginLeft: 8,
              justifyContent: 'center',
            }}>
            <Text style={stylescustom.txt}>
              {data?.assign_instructor?.name
                ? data?.assign_instructor?.name
                : 'Admin'}
            </Text>
          </View>
        </View>
        <Pressable style={styles.view2} onPress={onShow}>
          <Icon
            name="dots-three-horizontal"
            size={sizes._screen_width * 0.07}
            color={colors.GRAY}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  img: {
    width: sizes._screen_width,
    height: sizes._screen_width * (9 / 12),
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'black',
  },
  avt: {
    width: sizes._screen_width * 0.12,
    height: sizes._screen_width * 0.12,
    borderRadius: (sizes._screen_width * 0.12) / 2,
  },
  view2: {
    padding: sizes._screen_width * 0.03,
    backgroundColor: "#212121",
    borderRadius: 15,
  },
  viewHeader: {
    ...stylescustom.view,
    marginTop: 15,
    marginLeft: 10,
  },
  view: {...stylescustom.txt1, width: sizes._screen_width * 0.6},
});
