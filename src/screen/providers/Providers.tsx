import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen1 from '../../component/header/HeaderScreen1';
import TopTabProviders from '../../container/TopTabProviders';
export default function Providers({navigation}: any) {
  return (
    <View style={styles.container}>
      <HeaderScreen1 title="Giảng viên" navigation={navigation} />
      <TopTabProviders />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
