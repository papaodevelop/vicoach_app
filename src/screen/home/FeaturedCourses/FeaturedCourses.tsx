import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import sizes from '../../../res/sizes';
import colors from '../../../res/colors';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../../res/fonts';
import Icon from 'react-native-vector-icons/AntDesign';
import {Time, money} from '../../../res/convert';
import Star from '../../../component/Star';
import {NavigationProp} from '@react-navigation/native';
import {CourseCategoryType} from '../../../../types/CourseCategoryType';
import images from '../../../res/images';
interface Props {
  navigation: NavigationProp<Record<string, any>>;
  data?: any;
}
export default function FeaturedCourses(props: Props) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const RenderItem = ({item}: {item: CourseCategoryType}) => {
    const textTitle = item?.title?.vi || item?.title?.en;
    return (
      <Pressable
        style={styles.view}
        onPress={() =>
          props.navigation.navigate('CourseDetail', {
            item: item,
          })
        }>
        <Image
          style={styles.img}
          defaultSource={images.i2}
          source={
            item?.thumbnail?.url ? {uri: item?.thumbnail?.url} : images.i2
          }></Image>
        <LinearGradient
          start={{x: 2, y: 0}}
          end={{x: 2, y: 0.7}}
          colors={['white', colors.BLACK]}
          style={styles.liner}></LinearGradient>
        <View style={styles.view6}>
          <View style={styles.view5}>
            <Text style={styles.txt1}>{money(item.price)}</Text>
          </View>
        </View>
        <View style={styles.view3}>
          <Text style={styles.txt3}>{textTitle}</Text>
          <Star star={item.reviews} />
          <View
            style={{
              ...styles.view4,
              justifyContent: 'space-between',
              width: sizes._screen_width * 0.7,
            }}>
            <View style={styles.view4}>
              <Image
                source={
                  item?.assign_instructor?.image?.url
                    ? {uri: item?.assign_instructor?.image?.url}
                    : images.noimage
                }
                style={styles.img1}
              />
              <Text
                style={{
                  ...styles.txt,
                  width: sizes._screen_width * 0.4,
                  marginLeft: 8,
                }}>
                {item?.assign_instructor?.name}
              </Text>
            </View>

            <View style={styles.view4}>
              <Icon
                name="clockcircle"
                color={colors.WHITE}
                size={sizes._screen_width * 0.05}
              />
              <Text style={{...styles.txt, marginLeft: 8}}>
                {Time(item.duration)} giờ
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.view1}>
      <FlatList
        data={props?.data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        renderItem={({item}) => <RenderItem item={item} />}
      />
      <ExpandingDot
        data={props?.data}
        scrollX={scrollX}
        dotStyle={styles.dot}
        inActiveDotOpacity={0.2}
        activeDotColor={'#ee782c'}
        containerStyle={styles.view2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width,
    height: sizes._screen_height * 0.29,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  img: {
    height: sizes._screen_height * 0.25,
    width: sizes._screen_width * 0.9,
    borderRadius: 30,
    position: 'absolute',
  },
  view1: {height: sizes._screen_height * 0.3, top: -15},
  liner: {
    height: sizes._screen_height * 0.25,
    width: sizes._screen_width * 0.9,
    borderRadius: 30,
    position: 'absolute',
    opacity: 0.7,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: colors.GRAY,
    borderRadius: 5,
  },
  view2: {bottom: 0},
  img1: {
    height: sizes._screen_width * 0.1,
    width: sizes._screen_width * 0.1,
    borderRadius: 40,
  },
  txt3: {
    fontFamily: fonts.textBold,
    fontSize: sizes._csreen_width * 0.045,
    color: colors.WHITE,
  },
  view3: {
    marginTop: sizes._screen_height * 0.09,
    width: sizes._screen_width * 0.8,
    alignSelf: 'center',
  },
  view4: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  txt: {
    color: colors.WHITE,
    fontFamily: fonts.textRegular,
    fontSize: sizes._csreen_width * 0.035,
  },
  view5: {backgroundColor: 'white', padding: 8, borderRadius: 10},
  txt1: {
    color: colors.GREEN,
    fontSize: sizes._csreen_width * 0.04,
    fontFamily: fonts.textRegular,
  },
  view6: {
    alignSelf: 'center',
    alignItems: 'flex-end',
    width: sizes._screen_width * 0.8,
  },
});
