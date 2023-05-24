import {FlatList} from 'react-native';
import React from 'react';
import RenderItemCouses from '../home/newestCourses/RenderItemCouses';
import {NavigationProp} from '@react-navigation/native';
import {useGetCourseSearchQuery} from '../../redux/api/courseCategory.api';
import stylescustom from '../../res/stylescustom';
import {CourseCategoryType} from '../../../types/CourseCategoryType';

export default function SearchAll({
  navigation,
  search,
}: {
  navigation: NavigationProp<Record<string, any>>;
  search: string;
}) {
  const {data, isFetching} = useGetCourseSearchQuery(`${search}`);
  return (
    <FlatList
      data={data?.items}
      renderItem={({
        item,
        index,
      }: {
        item: CourseCategoryType;
        index: number;
      }) => <RenderItemCouses item={item} navigation={navigation} />}
      refreshing={isFetching}
      contentContainerStyle={stylescustom.paddingBottom}
      keyExtractor={item => `${item.id}`}
    />
  );
}
