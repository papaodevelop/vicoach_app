import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RenderItemCourses from '../../component/renderItem/RenderItemCourses';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import Loading from '../../component/loading/Loading';
import {NavigationProp} from '@react-navigation/native';
import {useGetClassCourseQuery} from '../../redux/state';
import images from '../../res/images';
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
      <Text style={styles.txt}>
        Bạn có ({data?.items ? data?.items?.length : 0}) khoá học
      </Text>
      <>
        {data?.items?.length !== 0 && courseTypeArray != undefined ? (
          <FlatList
            data={data?.items}
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
        ) : (
          <View style={styles.view}>
            <Image
              source={images.hoctap1}
              style={styles.img}
              resizeMode="contain"
            />
          </View>
        )}
      </>
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
    marginTop: sizes._screen_height * 0.02,
    paddingBottom: 10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    marginTop: sizes._screen_height * 0.12,
  },
  img: {
    height: sizes._screen_width * 0.7,
    width: sizes._screen_width * 0.7,
  },
});
