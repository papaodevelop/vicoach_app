import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen from '../../component/header/HeaderScreen';
import RenderNotifi from '../../component/renderItem/RenderNotifi';
import {dataNotification} from '../../datafeck/feck/Notification';
import sizes from '../../res/sizes';

export default function Notification({navigation}: any) {
  return (
    <View style={styles.container}>
      <HeaderScreen navigation={navigation} title="THÔNG BÁO" />
      <FlatList
        renderItem={({item}) => <RenderNotifi item={item} />}
        data={dataNotification}
        keyExtractor={item => `${item.id}`}
        style={{marginTop: sizes._screen_height * 0.01, paddingBottom: 50}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
