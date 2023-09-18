import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert, Platform} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {TabViewContainer} from './TabViewBase';
import {useHomeConfig} from './hook';
import {TabBar} from 'react-native-tab-view';
import colors from '../../../res/colors';
import sizes from '../../../res/sizes';
import stylescustom from '../../../res/stylescustom';
import {NavigationProp} from '@react-navigation/native';
import {useGetProfileQuery} from '../../../redux/state';
import Loading from '../../../component/loading/Loading';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {BASE_URL} from '../../../Api/BaseURL';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/store';
import images from '../../../res/images';
import {Renferer} from '../../../redux/api/renferer';
const G_WIN_WIDTH = sizes._screen_width;
const G_WIN_HEIGHT = sizes._screen_height;
const HEAD_HEIGHT = G_WIN_HEIGHT * 0.35;
const IMG_WH = 100;
const IMG_WH1 = 100;
const MARGIN_H = 25;
const MARGIN_V = 0;
const FROZE_TOP = IMG_WH;
const LINE_HEIGHT = 20;
const LINE_COUNT = 3;
const moveDistance = HEAD_HEIGHT - FROZE_TOP;
const title_h = LINE_HEIGHT;
const detail_h = LINE_HEIGHT * LINE_COUNT;
const marginTop =
  (HEAD_HEIGHT - IMG_WH - title_h - MARGIN_V * 2 - detail_h) * 0.79;
const marginTop1 =
  (HEAD_HEIGHT - IMG_WH1 - title_h - MARGIN_V * 2 - detail_h) * 0.65;
interface Props {
  navigation: NavigationProp<Record<string, any>>;
}
type Images = {
  fileName: string;
  fileSize: number;
  height: number;
  type: string;
  uri: string;
  width: number;
};
const TotabScoll: React.FC<Props> = props => {
  const {data, isLoading, refetch} = useGetProfileQuery('');
  const {enableSnap} = useHomeConfig(props);
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
    const Img_one_move = marginTop + title_h + detail_h + MARGIN_V / 0.7;
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

  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const cookie = useAppSelect(data => data?.getAuth.auth);
  let options = {
    storageOption: {
      path: 'images',
      mediaType: 'photo',
    },
    includeBase64: false,
  } as any;
  const [loadings, setLoadings] = useState(false);
  const openPicker = async () => {
    setLoadings(true);
    const formData = new FormData();
    await launchImageLibrary(options, response => {
      if (response?.assets) {
        const images = response?.assets[0] as Images;
        const item = {
          uri: images?.uri,
          type: images?.type,
          name: images?.fileName,
        };
        try {
          const upload = async () => {
            formData.append('image_file', item);
            await axios
              .put(`${BASE_URL}users/profile-settings`, formData, {
                headers: {
                  Authorization: `Cookie: ${cookie}`,
                  Accept: 'application/json',
                  'Content-Type': 'multipart/form-data',
                  Referer: Renferer,
                },
              })

              .then(respon => {
                if (respon.status == 200) {
                  refetch();
                  setLoadings(false);
                }
              });
          };
          upload();
        } catch (error) {}
      } else {
        setLoadings(false);
      }
    });
  };
  const SmallImage = () => {
    const transX = useDerivedValue(() => {
      const left = (G_WIN_WIDTH - IMG_WH) / 2;
      return interpolate(
        scrollTrans.value,
        [0, moveDistance],
        [0, -left],
        Extrapolate.CLAMP,
      );
    });
    const transY = useDerivedValue(() => {
      const moveDistance = HEAD_HEIGHT - FROZE_TOP;
      const Img_one_move = marginTop1 + detail_h + MARGIN_V / 0.7;
      return interpolate(
        scrollTrans.value,
        [0, moveDistance],
        [0, Img_one_move],
        Extrapolate.CLAMP,
      );
    });

    const scaleV = useDerivedValue(() => {
      const moveDistance = HEAD_HEIGHT - FROZE_TOP;
      return interpolate(
        scrollTrans.value,
        [0, moveDistance],
        [1, 0.7],
        Extrapolate.CLAMP,
      );
    });
    const headerTrans = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: transX.value,
          },
          {
            translateY: transY.value,
          },
          {
            scale: scaleV.value,
          },
        ],
      };
    });
    return (
      <Animated.View style={[styles.smallImage, headerTrans]}>
        <FontAwesome
          name="camera"
          color={colors.BLACK}
          size={30}
          onPress={openPicker}
        />
      </Animated.View>
    );
  };
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
      [0, marginTop - (IMG_WH - detail_h) * 1.5],
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
        style={styles.header}
        indicatorStyle={styles.indicator}
        tabStyle={{width: sizes._csreen_width / 3}}
        renderLabel={({route, focused, color}: any) => {
          return (
            <View style={styles.view2}>
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
      <View style={styles.view}>
        <Animated.Image
          source={data?.image?.url ? {uri: data?.image?.url} : images.noimage}
          style={[styles.img, headerTransStyle]}
        />
        <SmallImage />
        <Animated.Text style={[styles.txt2, titleStyle]}>
          {` Xin Chào ! \n Chúc bạn ngày mới tốt lành`}
        </Animated.Text>
        <Animated.View style={[styles.view1, detailStyle]}>
          <Text style={styles.txt}>{data?.name}</Text>
          <Text style={styles.txt1}>{data?.roles[0]}</Text>
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
    <View style={stylescustom.container}>
      {data && (
        <TabViewContainer
          {...Props}
          renderTabBar={_renderTabBar}
          navigation={props.navigation}
        />
      )}
      {isLoading && <Loading />}
      {loadings && <Loading />}
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
    ...stylescustom.txtBold,
    fontSize: sizes._screen_width * 0.05,
  },
  txt1: {
    ...stylescustom.txt1,
    fontSize: sizes._screen_width * 0.03,
  },
  header: {
    height: 50,
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
  indicator: {
    backgroundColor: colors.ORANGE,
    height: 2,
    borderRadius: 10,
  },
  view: {
    backgroundColor: '#fff',
    width: '100%',
    height: HEAD_HEIGHT,
    alignItems: 'center',
  },
  view1: {
    height: detail_h,
    justifyContent: 'center',
    alignItems: 'center',
    width: G_WIN_WIDTH - MARGIN_H - IMG_WH,
    marginTop: MARGIN_V,
  },
  img: {
    backgroundColor: 'gray',
    width: IMG_WH,
    height: IMG_WH,
    marginTop: MARGIN_H,
    borderRadius: IMG_WH * 0.5,
  },
  view2: {height: '100%', justifyContent: 'center'},
  txt2: {
    ...stylescustom.txt,
    marginTop: MARGIN_V,
    lineHeight: LINE_HEIGHT,
    textAlign: 'center',
  },
  smallImage: {
    alignItems: 'center',
  },
});
