import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import HeaderScreen1 from '../../component/header/HeaderScreen1';
import TopTabCourses from '../../container/TopTabCourses';

export default function Mycourses({navigation}: any) {
  return (
    <View style={styles.container}>
      <HeaderScreen1 navigation={navigation} title="Khoá học" />
      <TopTabCourses />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});
