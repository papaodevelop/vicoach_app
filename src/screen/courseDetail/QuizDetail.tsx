import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import {NavigationProp} from '@react-navigation/native';
import ModalConfirm from '../../component/modal/ModalConfirm';
import {useGetQuizzMutation} from '../../redux/api/quiz.api';
import {Time} from '../../res/convert';

const QuizDetail = ({
  item,
  navigation,
  idCourse,
}: {
  item: QuizzType;
  navigation: NavigationProp<Record<string, any>>;
  idCourse: number | undefined;
}) => {
  const [show, setShow] = useState(false);
  const [getQuizz, {isLoading}] = useGetQuizzMutation();
  const Confirm = async () => {
    try {
      const getQuiz = await getQuizz({
        idCourse: idCourse,
        idItem: item.id,
      }).unwrap();
      if (getQuiz) {
        navigation.navigate('StartQuizz', {
          data: getQuiz,
        });
      }
      setShow(false);
    } catch (error) {}
  };

  return (
    <>
      <Pressable style={styles.view} onPress={() => setShow(true)}>
        <View style={styles.view1}>
          <Icon
            name="grav"
            color={colors.WHITE}
            size={sizes._csreen_width * 0.08}
          />
        </View>
        <View style={styles.view2}>
          <Text style={stylescustom.txt2}>{item?.quiz?.title?.vi} </Text>
          <View style={stylescustom.view1}>
            <Icon
              name="clock-o"
              color={colors.GRAY}
              size={sizes._screen_width * 0.045}
            />
            <Text style={styles.timeclock}>{Time(item?.quiz?.time)}</Text>
          </View>
        </View>
      </Pressable>
      <ModalConfirm
        txt="Bạn muốn bắt đầu làm bài tập ?"
        isShow={show}
        toggleDate={() => setShow(false)}
        confirm={Confirm}
        loading={isLoading}
      />
    </>
  );
};
export default QuizDetail;

const styles = StyleSheet.create({
  view: {
    height: sizes._screen_width * 0.2,
    width: sizes._screen_width * 0.7,
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    ...stylescustom.view1,
    padding: 10,
    marginLeft: sizes._screen_width * 0.05,
  },
  view1: {
    width: sizes._screen_width * 0.15,
    height: sizes._screen_width * 0.15,
    backgroundColor: colors.ORANGE,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {marginLeft: 10},
  timeclock: {...stylescustom.txt1, marginLeft: 5},
});
