import {FlatList, View} from 'react-native';
import React, {memo} from 'react';
import RenderItemCouses from '../home/newestCourses/RenderItemCouses';
import {NavigationProp} from '@react-navigation/native';
import stylescustom from '../../res/stylescustom';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import {useGetCourseSearchQuery} from '../../redux/state';

const SearchAll = ({
  navigation,
  search,
}: {
  navigation: NavigationProp<Record<string, any>>;
  search: string;
}) => {
  const {data, isFetching} = useGetCourseSearchQuery(`${search}`);
  return (
    <FlatList
      data={data?.items}
      renderItem={({item}: {item: CourseCategoryType}) => (
        <RenderItemCouses item={item} navigation={navigation} />
      )}
      contentContainerStyle={{
        ...stylescustom.paddingBottom,
      }}
      keyExtractor={item => `aa${item.id}`}
      removeClippedSubviews
      maxToRenderPerBatch={10}
      initialNumToRender={10}
    />
  );
};

export default SearchAll;
