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
  const {data: dataShow} = useGetShowPriceQuery('');

  return (
    <View style={styles.container}>
      <HeaderScreen title={title} navigation={navigation} />
      <FlatList
        data={item}
        renderItem={({item}) => (
          <RenderItemCouses
            item={item}
            navigation={navigation}
            dataShow={dataShow}
          />
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
