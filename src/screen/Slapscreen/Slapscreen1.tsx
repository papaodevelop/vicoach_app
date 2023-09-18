import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import images from '../../res/images';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {NavigationProp} from '@react-navigation/native';
const SIZE = 10;
const MARGIN = 5;
const BG = 'rgb(172, 172, 172)';
const ACTIVE_BG = 'white';
const dots = [1, 2, 3];
const INTERVAL = 300;
const ANIMATION_DURATION = 400;
const ANIMATION_SCALE = 1.4;

const Slapscreen1 = ({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) => {
  const [active, setActive] = useState(1);
  const timerRef: any = useRef(null);
  const useAppSelect: TypedUseSelectorHook<any> = useSelector;
  const check = useAppSelect(data => data.getcheck.check);
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (check) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('OnboardingFirst');
      }
    }, 3000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(active => (active > 2 ? 1 : active + 1));
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);
  function Dot(props: any) {
    const {
      size = SIZE,
      background = BG,
      activeBackground = ACTIVE_BG,
      dotMargin = MARGIN,
      animationDuration = ANIMATION_DURATION,
      animationScale = ANIMATION_SCALE,
    } = props;

    const scale = new Animated.Value(1);

    useEffect(() => {
      if (props.active) scaleUp();
    }, [props.active]);

    useEffect(() => {
      if (props.active) scaleUp();
      else scaleDown();
    }, [props.active]);

    const scaleUp = () => {
      Animated.timing(scale, {
        toValue: animationScale,
        duration: animationDuration,
        useNativeDriver: false,
      }).start();
    };

    const scaleDown = () => {
      Animated.timing(scale, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: false,
      }).start();
    };

    const style = {
      height: size,
      width: size,
      borderRadius: size / 2,
      marginHorizontal: dotMargin,
      backgroundColor: props.active ? activeBackground : background,
      transform: [{scale}],
    };

    return <Animated.View style={style} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.boderImg}>
        <Image source={images.Vicoaching} style={styles.img} />
      </View>
      <Text style={styles.txt}>Vi Coaching</Text>
      <Text style={styles.txt1}>Đang kiểm tra dữ liệu ...</Text>
      <View style={styles.main}>
        {dots.map(i => (
          <Dot key={i} active={i === active} />
        ))}
      </View>
    </View>
  );
};

export default Slapscreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#214987',
    alignItems: 'center',
    tintColor: 'white',
  },
  img: {
    height: sizes._screen_width * 0.6,
    width: sizes._screen_width * 0.6,
  },
  txt: {
    color: 'white',
    fontSize: sizes._screen_width * 0.07,
    fontFamily: fonts.textBold,
    textAlign: 'center',
    width: sizes._screen_width * 0.8,
  },
  txt1: {
    color: 'white',
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.045,
    marginTop: sizes._screen_height * 0.01,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: sizes._screen_height * 0.1,
    position: 'absolute',
  },
  boderImg: {
    height: sizes._screen_width * 0.6,
    width: sizes._screen_width * 0.6,
    borderRadius: (sizes._screen_width * 0.6) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: sizes._screen_height * 0.2,
  },
});
