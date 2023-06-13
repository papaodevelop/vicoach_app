import {
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
import {NavigationProp} from '@react-navigation/native';
import {CourseDetail} from '../../../types/CourseDetail';
import {
  useCreateReviewCoursesMutation,
  useGetReviewCouresQuery,
} from '../../redux/state';
import ConfirmRating from '../../component/modal/ConfirmRating';

export default function Comment({
  navigation,
  item,
}: {
  navigation: NavigationProp<Record<string, any>>;
  item: CourseDetail | undefined;
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
        setShow(false);
      }
    } catch (error: any) {
      setErr('Bạn không thể đánh giá bài viết này');
    }
  };
  return (
    <View>
      <View>
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
    </View>
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
