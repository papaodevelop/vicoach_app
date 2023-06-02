import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RenderItemCourses from '../../component/renderItem/RenderItemCourses';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import Loading from '../../component/loading/Loading';
import {NavigationProp} from '@react-navigation/native';
import {useGetClassCourseQuery} from '../../redux/state';

export default function Purchased({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  const {data, isFetching, refetch, isLoading} = useGetClassCourseQuery('');
  var courseTypeArray = data?.items.filter(function (phanTu: ClassCourse) {
    return phanTu.type === 'CourseType';
  });
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Bạn có {courseTypeArray?.length} khoá học</Text>
      <FlatList
        data={courseTypeArray}
        renderItem={({item, index}: {item: ClassCourse; index: number}) => (
          <RenderItemCourses
            index={index}
            item={item}
            navigation={navigation}
          />
        )}
        keyExtractor={item => `${item.id}`}
        scrollEventThrottle={16}
        contentContainerStyle={stylescustom.paddingBottom}
        showsVerticalScrollIndicator={false}
        refreshing={isFetching}
        onRefresh={refetch}
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
    alignSelf: 'flex-end',
    right: 20,
    marginTop: sizes._screen_height * 0.01,
    paddingBottom: 10,
  },
});
