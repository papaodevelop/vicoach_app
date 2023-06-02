import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import {CourseDetail} from '../../../types/CourseDetail';
import Video from 'react-native-video';
import images from '../../res/images';
import stylescustom from '../../res/stylescustom';
import Icon from 'react-native-vector-icons/Entypo';
import sizes from '../../res/sizes';
import colors from '../../res/colors';

const Header = memo(
  ({
    item,
    onShow,
    data,
  }: {
    item: CourseCategoryType;
    onShow: () => void;
    data: CourseDetail | undefined;
  }) => {
    return (
      <View pointerEvents="auto">
        {data?.video_overview?.url ? (
          <>
            <Video
              style={styles.img}
              rate={1}
              muted={false}
              onError={val => console.log(val)}
              fullscreenOrientation="all"
              source={{uri: data?.video_overview?.url}}
              resizeMode="contain"
              volume={8}
              ignoreSilentSwitch="ignore"
              fullscreenAutorotate={true}
              onLoadStart={() => console.log('loadStart')}
              repeat={false}
              controls={true}
              onLoad={() => console.log('loadEnd')}
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
              defaultSource={images.i2}
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
              defaultSource={images.noimage}
            />
            <View style={{marginLeft: 8}}>
              <Text style={stylescustom.txt}>
                {data?.assign_instructor?.name}
              </Text>
              <Text style={stylescustom.txt1}>
                {data?.assign_instructor?.short_description}
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
  },
);

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
    backgroundColor: colors.WHITE,
    borderRadius: 15,
  },
  viewHeader: {...stylescustom.view, marginTop: 15, marginLeft: 10},
});
