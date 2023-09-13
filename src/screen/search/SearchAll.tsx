import {FlatList, View} from 'react-native';
import React, {memo, useState} from 'react';
import RenderItemCouses from '../home/NewestCourses/RenderItemCouses';
import {NavigationProp} from '@react-navigation/native';
import stylescustom from '../../res/stylescustom';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import {ListApiResponse} from '../../../types/Common';

const SearchAll = ({
  navigation,
  search,
  searchResults,
  data,
}: {
  navigation: NavigationProp<Record<string, any>>;
  search: string;
  searchResults: any;
  data: any;
}) => {
  return (
    <FlatList
      data={searchResults}
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
