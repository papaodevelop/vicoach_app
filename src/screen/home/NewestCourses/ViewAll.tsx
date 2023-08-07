import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
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
  const datas = item.filter((item: any) => item.price <= 0) as string[] | any;
  return (
    <View style={styles.container}>
      <HeaderScreen title={title} navigation={navigation} />
      <FlatList
        data={datas}
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
  },
});
