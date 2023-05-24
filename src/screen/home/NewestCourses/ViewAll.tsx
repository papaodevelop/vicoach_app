import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import HeaderScreen from '../../../component/header/HeaderScreen';
import SearchInput from '../../../component/textInput/SearchInput';
import RenderItemCouses from './RenderItemCouses';
import {NavigationProp} from '@react-navigation/native';
import {CourseCategoryType} from '../../../../types/CourseCategoryType';
export default function ViewAll({
  route,
  navigation,
}: {
  route: any;
  navigation: NavigationProp<Record<string, any>>;
}) {
  const {title, item} = route.params;
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <HeaderScreen title={title} navigation={navigation} />
      <SearchInput search={search} setSearch={setSearch} />
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
