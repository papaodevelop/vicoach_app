import {
  Alert,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

import RenderComment from './RenderComment';
import BTNLogin from '../../component/btn/BTNLogin';
import stylescustom from '../../res/stylescustom';
import {CourseDetail} from '../../../types/CourseDetail';
import {
  useCreateReviewCoursesMutation,
  useGetReviewCouresQuery,
} from '../../redux/state';
import ConfirmRating from '../../component/modal/ConfirmRating';
import {HScrollView} from 'react-native-head-tab-view';
import sizes from '../../res/sizes';
import {NavigationProp} from '@react-navigation/native';

export default function Comment({
  item,
  index,
  navigation,
}: {
  item: CourseDetail | undefined;
  index: number;
  navigation: NavigationProp<Record<string, any>>;
}) {
  const {data, refetch} = useGetReviewCouresQuery(`${item?.id}`);
  const [comment, setComment] = useState<string>();
  const [show, setShow] = useState(false);
  const [err, setErr] = useState<string>();
  const [rating, setRating] = useState<number>();
  const [uploadComment, {error, isLoading}] = useCreateReviewCoursesMutation();
  const upload = async () => {
    setErr('');
    try {
      const up = await uploadComment({
        id: item?.id,
        data: {
          rating: rating,
          content: comment,
        },
      }).unwrap();
      if (up) {
        refetch();
        Alert.alert('Bình luận của bạn đang chờ quản trị viên duyệt');
        setShow(false);
      }
    } catch (error: any) {
      setErr('Bạn không thể đánh giá bài viết này');
    }
  };

  return (
    <HScrollView index={index} showsVerticalScrollIndicator={false}>
      <View style={{width: sizes._screen_width}}>
        <FlatList
          data={data?.items}
          scrollEnabled={false}
          renderItem={({item}: {item: CoursesReview}) => (
            <RenderComment item={item} />
          )}
          key={'dataComment'}
          keyExtractor={item => `${item.id}`}
        />
      </View>
      {item?.has_enroll ? (
        <View style={styles.btn}>
          <BTNLogin onPress={() => setShow(true)} txt="Viết đánh giá" />
        </View>
      ) : (
        <>
          <Text style={styles.txt}>Bạn không thể bình luận khoá học này</Text>
        </>
      )}
      <ConfirmRating
        start={(val: number) => setRating(val)}
        isShow={show}
        toggleDate={() => {
          setShow(false);
        }}
        loading={isLoading}
        confirm={upload}
        setComment={setComment}
        coment={comment}
        err={err}
      />
    </HScrollView>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 50,
    alignSelf: 'center',
  },
  txt: {
    ...stylescustom.txt1,
    marginTop: 20,
    alignSelf: 'center',
  },
});
