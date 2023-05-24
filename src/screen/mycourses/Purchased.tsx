import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {khoahocmoi} from '../../datafeck/feck/Data';
import RenderItemCourses from '../../component/renderItem/RenderItemCourses';
import stylescustom from '../../res/stylescustom';
import {useGetClassCourseQuery} from '../../redux/api/courseCategory.api';
import sizes from '../../res/sizes';
import Loading from '../../component/loading/Loading';

export default function Purchased() {
  const {data, isFetching, refetch, isLoading} = useGetClassCourseQuery('');
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Bạn có {data?.count} khoá học</Text>
      <FlatList
        data={data?.items}
        renderItem={({item, index}: {item: ClassCourse; index: number}) => (
          <RenderItemCourses index={index} item={item} />
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
