import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {FlatList} from 'react-native';
import RenderItemCouses from '../home/NewestCourses/RenderItemCouses';

export default function Favorite({navigation}: any) {
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const favori = useAppSelect(data => data?.getFavori?.favori);

  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={navigation} title="Yêu thích" />
      <FlatList
        data={favori}
        renderItem={({item, index}) => (
          <RenderItemCouses item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
