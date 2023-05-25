import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import RenderComment from './RenderComment';
import BTNLogin from '../../component/btn/BTNLogin';
import stylescustom from '../../res/stylescustom';
import {useGetReviewCouresQuery} from '../../redux/api/courseCategory.api';
import {NavigationProp} from '@react-navigation/native';
import {CourseDetail} from '../../../types/CourseDetail';

export default function Comment({
  navigation,
  item,
}: {
  navigation: NavigationProp<Record<string, any>>;
  item: CourseDetail | undefined;
}) {
  const {data} = useGetReviewCouresQuery(`${item?.id}`);
  return (
    <View style={{flex: 1}}>
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
      {item?.has_enroll && (
        <View style={styles.btn}>
          <BTNLogin onPress={() => {}} txt="Viết đánh giá" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 50,
    alignSelf: 'center',
  },
});
