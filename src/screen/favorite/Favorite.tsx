import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {FlatList} from 'react-native';
import RenderItemCouses from '../home/NewestCourses/RenderItemCouses';
import images from '../../res/images';
import sizes from '../../res/sizes';

export default function Favorite({navigation}: any) {
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const favori = useAppSelect(data => data?.getFavori?.favori);

  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={navigation} title="Yêu thích" />
      {favori.length !== 0 ? (
        <FlatList
          data={favori}
          renderItem={({item, index}) => (
            <RenderItemCouses item={item} navigation={navigation} />
          )}
        />
      ) : (
        <View style={styles.view}>
          <Image source={images.nodata} />
          <Text style={stylescustom.txtBold}>Không có dữ liệu</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: sizes._screen_height * 0.1,
  },
});
