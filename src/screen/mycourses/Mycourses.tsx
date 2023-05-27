import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import HeaderScreen1 from '../../component/header/HeaderScreen1';
import Purchased from './Purchased';
import {NavigationProp} from '@react-navigation/native';
import ToptabQuiz from '../quizzes/ToptabQuiz';
import TopTabCourse from './TopTabCourse';

export default function Mycourses({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  return (
    <View style={styles.container}>
      <HeaderScreen1 navigation={navigation} title="Khoá học" />
      {/* <Purchased navigation={navigation} /> */}
      <TopTabCourse />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
