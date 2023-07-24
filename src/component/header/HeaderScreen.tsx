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
import Icon from 'react-native-vector-icons/Entypo';
import {NavigationProp} from '@react-navigation/native';
interface Props {
  title: string;
  navigation: NavigationProp<Record<string, any>>;
  onPress?: () => void;
  dot?: boolean;
}
export default function HeaderScreen(props: Props) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#214987"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        translucent={false}
      />
      <SafeAreaView>
        <View style={styles.view}>
          <Text style={styles.title}>{props.title}</Text>
          <Icon
            name="chevron-left"
            size={sizes._screen_width * 0.09}
            color={'white'}
            style={styles.icon}
            onPress={() => props.navigation.goBack()}
          />
          {props.dot && (
            <Icon
              name="dots-three-vertical"
              size={sizes._screen_width * 0.08}
              color={'white'}
              style={styles.icon1}
              onPress={props.onPress}
            />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#214987',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 30,
  },
  title: {
    color: colors.WHITE,
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.055,
    alignSelf: 'center',
    textTransform: 'uppercase',
    width: sizes._screen_width * 0.8,
    textAlign: 'center',
  },
  icon: {left: 5, position: 'absolute'},
  view: {
    width: sizes._screen_width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon1: {right: 5, position: 'absolute'},
});
