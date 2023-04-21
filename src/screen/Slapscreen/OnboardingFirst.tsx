import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import sizes from '../../res/sizes';
import {slides} from '../../datafeck/DataFirst';
import fonts from '../../res/fonts';

const COLORS = {
  primary: '#FFFFFF',
  black: '#000000',
  gray: '#555555',
  redd: '#B086FF',
  purple: '#F9E1FC',
};
const Slide = ({item}: any) => {
  return (
    <View style={{alignContent: 'center', width: sizes._screen_width}}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};
const OnboardingFirst = ({navigation}: any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef<any>(null);
  const updateCurrentSlideIndex = (e: any) => {
    const currentIdex = Math.round(e / sizes._screen_width);
    setCurrentSlideIndex(currentIdex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    console.log(nextSlideIndex);

    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * sizes._screen_width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - sizes._1sdp;
    const offset = lastSlideIndex * sizes._screen_width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Food = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: sizes._screen_width * 0.16,
            alignSelf: 'center',
          }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: '#99FF66',
                  height: sizes._screen_width * 0.035,
                  width: sizes._screen_width * 0.035,
                  borderRadius: 60,
                },
              ]}
            />
          ))}
        </View>
      </>
    );
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <SafeAreaView>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={val => {
            updateCurrentSlideIndex(val.nativeEvent?.contentOffset?.x);
          }}
          pagingEnabled
          data={slides}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            height: sizes._screen_height * 0.7,
          }}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Slide item={item} />}
        />
        <Food />
      </SafeAreaView>
      <View
        style={{
          bottom: sizes._screen_width * 0.1,
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: sizes._screen_width * 0.8,
          alignSelf: 'center',
        }}>
        <Text onPress={skip}>Bỏ qua</Text>
        <Text onPress={goNextSlide}>Tiếp theo</Text>
      </View>
    </View>
  );
};

export default OnboardingFirst;

const styles = StyleSheet.create({
  title: {
    color: COLORS.black,
    fontSize: sizes._screen_width * 0.065,
    textAlign: 'center',
    marginTop: sizes._60sdp,
    fontFamily: fonts.textBold,
  },
  image: {
    height: sizes._screen_width * 0.6,
    width: sizes._screen_width * 0.6,
    resizeMode: 'contain',
    marginTop: sizes._50sdp,
    alignSelf: 'center',
  },
  subtitle: {
    color: COLORS.black,
    fontSize: sizes._screen_width * 0.04,
    lineHeight: sizes._24sdp,
    maxWidth: '80%',
    textAlign: 'center',
    marginTop: sizes._13sdp,
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
});
