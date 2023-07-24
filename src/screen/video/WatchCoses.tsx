import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen from '../../component/header/HeaderScreen';
import RenderViedeo from './RenderViedeo';
import {NavigationProp} from '@react-navigation/native';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import fonts from '../../res/fonts';

export default function WatchCoses({
  navigation,
  item,
}: {
  navigation: NavigationProp<Record<string, any>>;
  item: {
    url: string;
    title: string;
  };
}) {
  return (
    <View style={styles.container}>
      <HeaderScreen title="Video khoá học" navigation={navigation} />
      <RenderViedeo url={item?.url} />
      <Text style={styles.title}>{item?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: sizes._screen_height,
    width: sizes._screen_width,
  },
  title: {
    fontSize: sizes._screen_width * 0.05,
    fontFamily: fonts.textBold,
    marginTop: 10,
    marginLeft: 20,
  },
});
