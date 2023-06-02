import React, {useState, useMemo} from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
import {RefreshControlProps} from 'react-native-head-tab-view';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import {ScrollableTabViewContainer, TabViewContainer} from './TabViewBase';
import {useHomeConfig} from './hook';

import {TabViewType} from './types';
import images from '../../../res/images';
import {TabBar} from 'react-native-tab-view';
import colors from '../../../res/colors';
import sizes from '../../../res/sizes';
import stylescustom from '../../../res/stylescustom';
import {NavigationProp} from '@react-navigation/native';

const G_WIN_WIDTH = Dimensions.get('window').width;
const G_WIN_HEIGHT = Dimensions.get('window').height;
const HEAD_HEIGHT = G_WIN_HEIGHT * 0.3;

const IMG_WH = 100;
const MARGIN_H = 15;
const MARGIN_V = 20;
const FROZE_TOP = IMG_WH;
const LINE_HEIGHT = 20;
const LINE_COUNT = 3;
const moveDistance = HEAD_HEIGHT - FROZE_TOP;
const title_h = LINE_HEIGHT;
const detail_h = LINE_HEIGHT * LINE_COUNT;
const marginTop =
  (HEAD_HEIGHT - IMG_WH - title_h - MARGIN_V * 2 - detail_h) * 0.5;
interface Props {
  data?: ProfileType;
  navigation: NavigationProp<Record<string, any>>;
}
const TotabScoll: React.FC<Props> = props => {
  const {tabviewType, enableSnap} = useHomeConfig(props);
  const [scrollTrans, setScrollTrans] = useState(useSharedValue(0));
  const transXValue = useDerivedValue(() => {
    const left = (G_WIN_WIDTH - IMG_WH) / 2;
    return interpolate(
      scrollTrans.value,
      [0, moveDistance],
      [0, -left],
      Extrapolate.CLAMP,
    );
  });
  const transYValue = useDerivedValue(() => {
    const moveDistance = HEAD_HEIGHT - FROZE_TOP;
    const Img_one_move = marginTop + title_h + detail_h + MARGIN_V * 2;
    return interpolate(
      scrollTrans.value,
      [0, moveDistance],
      [0, Img_one_move],
      Extrapolate.CLAMP,
    );
  });
  const scaleValue = useDerivedValue(() => {
    const moveDistance = HEAD_HEIGHT - FROZE_TOP;
    return interpolate(
      scrollTrans.value,
      [0, moveDistance],
      [1, 0.7],
      Extrapolate.CLAMP,
    );
  });

  const headerTransStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: transXValue.value,
        },
        {
          translateY: transYValue.value,
        },
        {
          scale: scaleValue.value,
        },
      ],
    };
  });

  const titleOpacity = useDerivedValue(() => {
    return interpolate(
      scrollTrans.value,
      [0, 10, 20],
      [1, 0.8, 0],
      Extrapolate.CLAMP,
    );
  });
  const titleStyle = useAnimatedStyle(() => {
    return {opacity: titleOpacity.value};
  });

  const detailTransX = useDerivedValue(() => {
    return interpolate(
      scrollTrans.value,
      [0, moveDistance],
      [0, IMG_WH - (MARGIN_H + IMG_WH) * 0.5],
      Extrapolate.CLAMP,
    );
  });
  const detailTransY = useDerivedValue(() => {
    return interpolate(
      scrollTrans.value,
      [0, moveDistance],
      [0, marginTop - (IMG_WH - detail_h) * 1],
      Extrapolate.CLAMP,
    );
  });
  const detailStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: detailTransX.value,
        },
        {
          translateY: detailTransY.value,
        },
      ],
    };
  });
  const _renderTabBar = (props: any) => {
    return (
      <TabBar
        {...props}
        inactiveColor={'#333'}
        activeColor={'#FFD321'}
        style={[
          {
            height: 60,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            backgroundColor: 'white',
          },
        ]}
        indicatorStyle={{
          backgroundColor: colors.ORANGE,
          height: 2,
          borderRadius: 10,
        }}
        tabStyle={{width: sizes._csreen_width / 3}}
        renderLabel={({route, focused, color}: any) => {
          return (
            <View style={{marginBottom: 10}}>
              <Text
                style={[
                  styles.txtheader,
                  {color: focused ? colors.RED : colors.BLACK},
                ]}>
                {route.title}
              </Text>
            </View>
          );
        }}
      />
    );
  };
  const renderScrollHeader = () => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: HEAD_HEIGHT,
          alignItems: 'center',
        }}>
        <Animated.Image
          source={images.kien}
          style={[
            {
              backgroundColor: 'gray',
              width: IMG_WH,
              height: IMG_WH,
              marginTop,
              borderRadius: IMG_WH * 0.5,
            },
            headerTransStyle,
          ]}
        />
        <Animated.Text
          style={[
            {
              fontSize: 18,
              color: '#26323F',
              marginTop: MARGIN_V,
              lineHeight: LINE_HEIGHT,
              textAlign: 'center',
            },
            titleStyle,
          ]}>
          {` Xin Chào ! \n Chúc bạn một ngày tốt lành`}
        </Animated.Text>
        <Animated.View
          style={[
            {
              height: detail_h,
              justifyContent: 'center',
              alignItems: 'center',
              width: G_WIN_WIDTH - MARGIN_H - IMG_WH,
              marginTop: MARGIN_V,
            },
            detailStyle,
          ]}>
          <Text style={styles.txt}>{props.data?.name}</Text>
          <Text style={styles.txt}>{props.data?.email}</Text>
        </Animated.View>
      </View>
    );
  };

  const makeScrollTrans = (scrollTrans: Animated.SharedValue<number>) => {
    setScrollTrans(scrollTrans);
  };

  const Props = {
    renderScrollHeader,
    makeScrollTrans,
    frozeTop: FROZE_TOP,
    enableSnap,
  };
  return (
    <View style={{flex: 1}}>
      {tabviewType === TabViewType.default ? (
        <ScrollableTabViewContainer {...Props} />
      ) : (
        <TabViewContainer {...Props} renderTabBar={_renderTabBar} />
      )}
    </View>
  );
};

export default TotabScoll;
const styles = StyleSheet.create({
  txtheader: {
    ...stylescustom.txt,
  },
  txt: {
    textAlign: 'center',
    ...stylescustom.txt,
    lineHeight: LINE_HEIGHT,
  },
});
