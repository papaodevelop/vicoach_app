import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import sizes from '../../res/sizes';
import {slides} from '../../datafeck/DataFirst';
import fonts from '../../res/fonts';
import {useDispatch} from 'react-redux';
import {Check} from '../../redux/state/Check.reducer';
import {NavigationProp} from '@react-navigation/native';
const COLORS = {
  primary: '#FFFFFF',
  black: '#000000',
  gray: '#555555',
  redd: '#B086FF',
  purple: '#F9E1FC',
};
const Slide = ({item}: any) => {
  return (
    <View style={styles.view2}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};
const OnboardingFirst = ({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef<any>(null);
  const updateCurrentSlideIndex = (e: any) => {
    const currentIdex = Math.round(e / sizes._screen_width);
    setCurrentSlideIndex(currentIdex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * sizes._screen_width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * sizes._screen_width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };
  const dispatch = useDispatch();

  const Continew = () => {
    dispatch(Check(true));
  };
  const Food = () => {
    return (
      <>
        <View style={styles.view1}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && styles.view3,
              ]}
            />
          ))}
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={val => {
            updateCurrentSlideIndex(val.nativeEvent?.contentOffset?.x);
          }}
          pagingEnabled
          data={slides}
          contentContainerStyle={styles.fl}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Slide item={item} />}
        />
        <Food />
      </SafeAreaView>
      <View style={styles.view4}>
        {currentSlideIndex == 2 ? (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              Continew();
              navigation.navigate('Login');
            }}>
            <Text style={styles.txt1}>Bắt đầu</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.view}>
            <Text onPress={skip} style={styles.txt}>
              Bỏ qua
            </Text>
            <Text onPress={goNextSlide} style={styles.txt}>
              Tiếp theo
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default OnboardingFirst;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  title: {
    color: COLORS.black,
    fontSize: sizes._screen_width * 0.065,
    textAlign: 'center',
    marginTop: 55,
    fontFamily: fonts.textBold,
  },
  image: {
    height: sizes._screen_width * 0.6,
    width: sizes._screen_width * 0.6,
    resizeMode: 'contain',
    marginTop: 45,
    alignSelf: 'center',
  },
  subtitle: {
    color: COLORS.black,
    fontSize: sizes._screen_width * 0.04,
    lineHeight: 20,
    maxWidth: '80%',
    textAlign: 'center',
    marginTop: 13,
    alignSelf: 'center',
    fontFamily: fonts.textRegular,
    opacity: 0.8,
  },
  indicator: {
    height: sizes._screen_width * 0.035,
    width: sizes._screen_width * 0.035,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 1.5,
    borderColor: COLORS.gray,
  },
  txt: {
    color: 'black',
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt1: {
    color: 'white',
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.04,
  },
  fl: {
    justifyContent: 'center',
    alignItems: 'center',
    height: sizes._screen_height * 0.7,
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: sizes._screen_width * 0.16,
    alignSelf: 'center',
  },
  view2: {alignContent: 'center', width: sizes._screen_width},
  view3: {
    backgroundColor: '#99FF66',
    height: sizes._screen_width * 0.035,
    width: sizes._screen_width * 0.035,
    borderRadius: 60,
  },
  view4: {
    bottom: sizes._screen_width * 0.1,
    position: 'absolute',

    width: sizes._screen_width * 0.8,
    alignSelf: 'center',
  },
  btn: {
    height: 50,
    width: sizes._screen_width * 0.3,
    backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
