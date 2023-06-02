import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen from '../../component/header/HeaderScreen';
import RenderItemCouses from '../home/newestCourses/RenderItemCouses';
import {NavigationProp} from '@react-navigation/native';
import {useGetDetailClassifyQuery} from '../../redux/api/courseCategory.api';
import Loading from '../../component/loading/Loading';
import images from '../../res/images';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
export default function DetailCategories({
  route,
  navigation,
}: {
  route: any;
  navigation: NavigationProp<Record<string, any>>;
}) {
  const {title, item} = route.params;
  const {data, isLoading} = useGetDetailClassifyQuery(`${item}`);
  return (
    <View style={styles.container}>
      <HeaderScreen title={title} navigation={navigation} />
      {data?.items.length !== 0 ? (
        <FlatList
          data={data?.items}
          renderItem={({item}: {item: DetailClassify}) => (
            <RenderItemCouses item={item} navigation={navigation} />
          )}
          keyExtractor={item => `${item?.id}`}
        />
      ) : (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={images.nodata} style={styles.view} />
          <Text style={stylescustom.txtBold}>Không tìm thấy khoá học nào</Text>
        </View>
      )}

      {isLoading && <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    height: sizes._screen_width * 0.7,
    width: sizes._screen_width * 0.7,
    marginTop: sizes._screen_height * 0.17,
  },
});
