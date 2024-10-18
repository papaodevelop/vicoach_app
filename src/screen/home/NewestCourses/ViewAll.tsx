import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import HeaderScreen from '../../../component/header/HeaderScreen';
import RenderItemCouses from './RenderItemCouses';
import {NavigationProp} from '@react-navigation/native';
import {useGetShowPriceQuery} from '../../../redux/state';
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
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        contentContainerStyle={{marginBottom: 20}}
        maxToRenderPerBatch={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
});
