import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RenderItemInstructors from '../../component/renderItem/RenderItemInstructors';
import stylescustom from '../../res/stylescustom';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import {NavigationProp} from '@react-navigation/native';
import {useGetCategoryQuery} from '../../redux/state';
import Loading from '../../component/loading/Loading';

export default function Instructors({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  const {data, isFetching, refetch, isLoading} = useGetCategoryQuery('');

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.instructors?.instructors}
        renderItem={({
          item,
          index,
        }: {
          item: CourseCategoryType;
          index: number;
        }) => {
          return (
            <RenderItemInstructors
              item={item}
              index={index}
              navigation={navigation}
            />
          );
        }}
        numColumns={2}
        keyExtractor={item => `${item?.id}`}
        scrollEventThrottle={16}
        columnWrapperStyle={stylescustom.numbercolum2}
        contentContainerStyle={stylescustom.paddingBottom}
        showsVerticalScrollIndicator={false}
        onRefresh={refetch}
        refreshing={isFetching}
      />
      {isLoading && <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
});
