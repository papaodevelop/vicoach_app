import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen from '../../component/header/HeaderScreen';
import HeaderScreen1 from '../../component/header/HeaderScreen1';
import ToptabQuiz from './ToptabQuiz';

export default function Quizzes({navigation}: any) {
  return (
    <View style={styles.container}>
      <HeaderScreen1 navigation={navigation} title="Quizzes" />
      <ToptabQuiz />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
