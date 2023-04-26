import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import HeaderScreen from '../../../component/header/HeaderScreen';
import SearchInput from '../../../component/textInput/SearchInput';
import RenderItemCouses from './RenderItemCouses';
export default function ViewAll({route, navigation}: any) {
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
