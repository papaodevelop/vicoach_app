import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen1 from '../../component/header/HeaderScreen1';
import Instructors from './Instructors';
import {NavigationProp} from '@react-navigation/native';
export default function Providers({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  return (
    <View style={styles.container}>
      <HeaderScreen1 title="Giáo viên" navigation={navigation} />
      <Instructors navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
