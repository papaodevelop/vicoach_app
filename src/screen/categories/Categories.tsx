import {FlatList, LayoutAnimation, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen1 from '../../component/header/HeaderScreen1';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import RenderItemCategoriesData from '../../component/renderItem/RenderItemCategoriesData';
import RenderItemShowCategori from '../../component/renderItem/RenderItemShowCategori';
import fonts from '../../res/fonts';
import Loading from '../../component/loading/Loading';
import {NavigationProp} from '@react-navigation/native';
import {useGetCategoryQuery} from '../../redux/state';

export default function Categories({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  const {data, isLoading} = useGetCategoryQuery('');
  const ListFoodter = () => {
    return (
      <View style={styles.view}>
        <Text style={styles.txt}>Xu hướng</Text>
        <FlatList
          data={data?.trending_categories}
          renderItem={({item, index}) => (
            <RenderItemCategoriesData
              item={item}
              index={index}
              navigation={navigation}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            marginTop: sizes._screen_height * 0.02,
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderScreen1 title="Phân Loại" navigation={navigation} />
      <ListFoodter />
      <Text style={{...styles.txt, marginTop: sizes._screen_height * 0.02}}>
        Các danh mục
      </Text>

      <FlatList
        data={data?.categories}
        renderItem={({item, index}) => (
          <RenderItemShowCategori
            item={item}
            index={index}
            navigation={navigation}
          />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.view1}
        contentContainerStyle={stylescustom.paddingBottom}
      />
      {isLoading && <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    ...stylescustom.txt,
    marginLeft: sizes._screen_width * 0.05,
    fontFamily: fonts.textBold,
    fontSize: sizes._csreen_width * 0.05,
  },
  view: {
    marginTop: sizes._screen_height * 0.02,
  },
  view1: {
    borderRadius: 20,
    width: sizes._screen_width * 0.9,
    alignSelf: 'center',
    maxHeight: sizes._screen_height * 0.53,
    marginTop: sizes._screen_height * 0.02,
  },
});
