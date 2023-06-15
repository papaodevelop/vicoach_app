import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import sizes from '../../res/sizes';
import Icons from 'react-native-vector-icons/AntDesign';
interface Props {
  title: string;
  navigation?: any;
}
export default function HeaderScreen1(props: Props) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#ee782c"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        translucent={false}
      />
      <SafeAreaView>
        <View
          style={{
            width: sizes._screen_width,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.title}>{props.title}</Text>
          <Icons
            name="menu-fold"
            size={sizes._screen_width * 0.09}
            color={'white'}
            style={styles.icon}
            onPress={() => props.navigation.toggleDrawer()}
          />
        </View>
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
  title: {
    color: colors.WHITE,
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.06,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  icon: {left: 10, position: 'absolute'},
});
