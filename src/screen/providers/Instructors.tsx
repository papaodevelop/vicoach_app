import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {instrucutors} from '../../datafeck/feck/Data';
import RenderItemInstructors from '../../component/renderItem/RenderItemInstructors';
import stylescustom from '../../res/stylescustom';
import {useGetCategoryQuery} from '../../redux/api/courseCategory.api';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import {NavigationProp} from '@react-navigation/native';

export default function Instructors({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  const {data, isFetching, refetch} = useGetCategoryQuery('');
  return (
    <View style={styles.container}>
      <FlatList
        data={data?.instructors}
        renderItem={({
          item,
          index,
        }: {
          item: CourseCategoryType;
          index: number;
        }) => (
          <RenderItemInstructors
            item={item}
            index={index}
            navigation={navigation}
          />
        )}
        numColumns={2}
        keyExtractor={item => `${item?.id}`}
        scrollEventThrottle={16}
        columnWrapperStyle={stylescustom.numbercolum2}
        contentContainerStyle={stylescustom.paddingBottom}
        showsVerticalScrollIndicator={false}
        onRefresh={refetch}
        refreshing={isFetching}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
