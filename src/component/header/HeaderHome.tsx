import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  LayoutAnimation,
  Animated,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
import colors from '../../res/colors';
interface Props {
  navigation: any;
  value: string;
  setValue: (val: string) => void;
  show: boolean;
}
export default function HeaderHome(props: Props) {
  useEffect(() => {
    const toggle = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };
    toggle();
  }, [props.show]);
  let headerStyle = Object.assign({}, styles.container);
  if (!props.show) {
    //@ts-ignore
    headerStyle.height;
  }
  return (
    <View style={headerStyle}>
      <StatusBar
        backgroundColor="#ee782c"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        translucent={false}
      />
      <SafeAreaView>
        <View style={styles.view1}>
          <View style={styles.view}>
            <Icon
              name="menu-fold"
              size={30}
              color={'white'}
              onPress={() => props.navigation.toggleDrawer()}
            />
            <View
              style={{
                marginLeft: 15,

                width: sizes._screen_width * 0.5,
              }}>
              <Text style={styles.txt}>Hi Kiên</Text>
              <Text style={styles.txt1}>Hãy bắt đầu học!</Text>
            </View>
          </View>
          <View
            style={{
              ...styles.view,
              justifyContent: 'space-between',
              width: sizes._screen_width * 0.28,
            }}>
            <TouchableOpacity
              style={styles.view3}
              activeOpacity={0.8}
              onPress={() => props.navigation.navigate('Cart')}>
              <Ionicons name="cart" color={'white'} size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.view3}
              activeOpacity={0.8}
              onPress={() => props.navigation.navigate('Notification')}>
              <Ionicons name="md-notifications" color={'white'} size={30} />
            </TouchableOpacity>
          </View>
        </View>

        {props.show && (
          <View style={styles.view4}>
            <View style={styles.view}>
              <Ionicons
                name="md-search"
                color={colors.BLACK}
                size={30}
                style={{paddingRight: 5}}
              />
              <TextInput
                placeholder={'Tìm kiếm khoá học?'}
                value={props.value}
                onChangeText={props.setValue}
                style={styles.txtip}
              />
            </View>

            {props.value ? (
              <MaterialIcons
                onPress={() => props.setValue('')}
                name="cancel"
                color={colors.BLACK}
                size={20}
                style={{marginRight: 15}}
              />
            ) : null}
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ee782c',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 30,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes._screen_width * 0.9,
    alignSelf: 'center',
  },
  txt: {
    color: 'white',
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.065,
  },
  txt1: {
    color: 'white',
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
  },
  view3: {
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
    height: sizes._screen_width * 0.12,
    width: sizes._screen_width * 0.12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  view4: {
    height: sizes._screen_height * 0.055,
    width: sizes._screen_width * 0.9,
    borderRadius: 30,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 15,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtip: {
    height: sizes._screen_height * 0.055,
    width: sizes._screen_width * 0.65,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
    color: colors.BLACK,
  },
});
