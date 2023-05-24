import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import HeaderScreen from '../../../component/header/HeaderScreen';
import RenderItemCouses from './RenderItemCouses';
import {NavigationProp} from '@react-navigation/native';
export default function ViewAll({
  route,
  navigation,
}: {
  route: any;
  navigation: NavigationProp<Record<string, any>>;
}) {
  const {title, item} = route.params;
  return (
    <View style={styles.container}>
      <HeaderScreen title={title} navigation={navigation} />
      <FlatList
        data={item}
        renderItem={({item}) => (
          <RenderItemCouses item={item} navigation={navigation} />
        )}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
