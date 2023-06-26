import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import RenderContent from './RenderContent';
import BTNLogin from '../../component/btn/BTNLogin';
import {NavigationProp} from '@react-navigation/native';
import {CourseDetail} from '../../../types/CourseDetail';
import QuizDetail from './QuizDetail';
import images from '../../res/images';
import {useGetCouseListQuery} from '../../redux/state';
import {HScrollView} from 'react-native-head-tab-view';

export default function Content({
  navigation,
  datas,
  index,
}: {
  navigation: NavigationProp<Record<string, any>>;
  datas: CourseDetail | undefined;
  index: number;
}) {
  const {data} = useGetCouseListQuery(`${datas?.id}`);
  const videoLessons = data?.chapter_list.reduce(function (acc, chapter) {
    const videoLessonsInChapter = chapter?.lesson_list.filter(function (
      lesson,
    ) {
      return lesson?.material?.type === 'VIDEO';
    });
    //@ts-ignore
    return acc.concat(videoLessonsInChapter);
  }, []);
  const RendeFoodter = () => (
    <>
      {data?.chapter_list.map(i => {
        const data1 = i?.lesson_list?.filter(
          obj => obj?.duration !== undefined,
        );
        const data2 = i?.lesson_list?.filter(obj => obj?.quiz !== undefined);
        return (
          <View key={`5${i.id}`} style={{width: sizes._screen_width}}>
            <Text style={styles.txt}>{i?.name}</Text>

            <View>
              <FlatList
                data={data1}
                horizontal
                renderItem={({item, index}) => (
                  <RenderContent
                    item={item}
                    index={index}
                    idCourse={data?.id}
                    check={i?.id}
                  />
                )}
                style={{marginTop: sizes._screen_height * 0.02}}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item?.id}2`}
              />
            </View>
            <View>
              <FlatList
                data={data2}
                horizontal
                renderItem={({item}: {item: DocumentType}) => (
                  <QuizDetail
                    item={item}
                    idCourse={data?.id}
                    navigation={navigation}
                  />
                )}
                style={styles.view1}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `1${item?.id}`}
              />
            </View>
          </View>
        );
      })}
      {datas?.chapter_list[0] && datas?.has_enroll && (
        <View style={styles.view}>
          <BTNLogin
            onPress={() =>
              navigation.navigate('PlayVideo', {
                item: videoLessons,
              })
            }
            txt="Xem video"
          />
        </View>
      )}
      {!datas?.has_enroll ? (
        <View style={styles.view3}>
          <Image source={images.hoctap1} style={styles.img1} />
          <Text style={styles.txt1}>
            Bạn không thể xem nội dung khoá học này
          </Text>
        </View>
      ) : (
        !datas?.chapter_list[0] && (
          <View style={styles.view2}>
            <Image source={images.nodata} style={styles.img} />
            <Text style={stylescustom.txtBold}>
              Không tìm thấy nội dung khoá học
            </Text>
          </View>
        )
      )}
    </>
  );
  return (
    <HScrollView index={index} showsVerticalScrollIndicator={false}>
      <RendeFoodter />
    </HScrollView>
  );
}

const styles = StyleSheet.create({
  txt: {
    ...stylescustom.txt2,
    marginLeft: sizes._screen_width * 0.03,
    marginTop: sizes._screen_height * 0.02,
  },
  view: {alignItems: 'center', marginTop: 30},
  view1: {marginTop: sizes._screen_height * 0.02},
  view2: {alignItems: 'center', marginTop: sizes._screen_height * 0.1},
  img: {
    height: sizes._screen_width * 0.7,
    width: sizes._screen_width * 0.7,
  },
  view3: {
    flex: 1,
    alignItems: 'center',
    marginTop: sizes._screen_height * 0.1,
  },
  img1: {
    height: sizes._screen_width * 0.5,
    width: sizes._screen_width * 0.5,
  },
  txt1: {
    ...stylescustom.txt,
    marginTop: 20,
    textAlign: 'center',
    width: sizes._screen_width * 0.8,
  },
});
