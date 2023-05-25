import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import RenderContent from './RenderContent';
import BTNLogin from '../../component/btn/BTNLogin';
import {NavigationProp} from '@react-navigation/native';
import {CourseDetail} from '../../../types/CourseDetail';
import QuizDetail from './QuizDetail';
export default function Content({
  navigation,
  data,
}: {
  navigation: NavigationProp<Record<string, any>>;
  data: CourseDetail | undefined;
}) {
  return (
    <View style={stylescustom.container}>
      {data?.chapter_list.map(i => {
        const data1 = i?.lesson_list?.filter(obj => obj.duration !== undefined);
        const data2 = i?.lesson_list?.filter(obj => obj.quiz !== undefined);

        return (
          <View key={`5${i.id}`}>
            <Text style={styles.txt}>{i?.name}</Text>
            {data1.length > 0 && (
              <View>
                <FlatList
                  data={data1}
                  horizontal
                  renderItem={({item, index}) => (
                    <RenderContent item={item} index={index} />
                  )}
                  style={{marginTop: sizes._screen_height * 0.02}}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => `${item.id}2`}
                />
              </View>
            )}

            <View>
              <FlatList
                data={data2}
                horizontal
                renderItem={({item}) => <QuizDetail item={item} />}
                style={styles.view1}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `1${item.id}`}
              />
            </View>
          </View>
        );
      })}
      {data?.chapter_list[0] && (
        <View style={styles.view}>
          <BTNLogin
            onPress={() => navigation.navigate('PlayVideo')}
            txt="Bắt đầu"
          />
        </View>
      )}
    </View>
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
});
