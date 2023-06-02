import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import stylescustom from '../../../res/stylescustom';
import HeaderScreen from '../../../component/header/HeaderScreen';
import sizes from '../../../res/sizes';
import {ProgressBar} from 'react-native-paper';
import colors from '../../../res/colors';
import BTNQuizz from '../../../component/btn/BTNQuizz';
import fonts from '../../../res/fonts';
import RenderQuiz from './RenderQuiz';
import ModalConfirm from '../../../component/modal/ModalConfirm';
import {DeleteForm, Quizz, Reselect} from '../../../redux/state/Quizz.reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {DataQuizzs} from '../../../datafeck/feck/DataQuizzs';
import {NavigationProp} from '@react-navigation/native';
import CountTime from './CountTime';
import {RootState} from '../../../redux/store/store';
import {useSubMitQuizMutation} from '../../../redux/state';
type ad = {
  id: number;
  chose: string | number;
};
export default function StartQuizz({
  navigation,
  route,
}: {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}) {
  const items = route?.params.data as getQuizType;
  const percent = 1 / items?.quiz?.question_list?.length;
  const [progress, setProgress] = useState<number>();
  const [index, setIndex] = useState(0);
  const [txt, setTxt] = useState<string | undefined>();
  const [idItem, setIdItem] = useState<number>();
  const [show, setShow] = useState(false);
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const check = useAppSelect(data => data?.getQuizz.answer);
  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch();
  const [submitQuiz, {data, error}] = useSubMitQuizMutation();
  useEffect(() => {
    let item = index + 1;
    setProgress(percent * item);
    setIdItem(items?.quiz?.question_list[index]?.id);
    const ab: any = check.find(
      (item: ad) => item.id === items?.quiz?.question_list[index]?.id,
    );
    setTxt(ab?.chose == undefined ? '' : String(ab?.chose));
    const currentCheck: any = check.find(
      (item: any) => item?.id === items?.quiz?.question_list[index]?.id,
    );
    setSelectedItems(
      currentCheck?.chose?.length >= 1 ? currentCheck?.chose : [],
    );
  }, [index]);

  const Next = async () => {
    if (
      !check.find(
        (item: any) => item.id === items?.quiz?.question_list[index]?.id,
      )
    ) {
      dispatch(
        Quizz({
          id: items?.quiz?.question_list[index]?.id,
          chose:
            items?.quiz?.question_list[index]?.question_type ==
            'MULTIPLE_CHOICE'
              ? selectedItems
              : txt,
        }),
      );
    } else {
      dispatch(
        Reselect({
          id: items?.quiz?.question_list[index]?.id,
          chose:
            items?.quiz?.question_list[index]?.question_type ==
            'MULTIPLE_CHOICE'
              ? selectedItems
              : txt,
        }),
      );
    }
    setIndex(prevCount =>
      prevCount >= items?.quiz?.question_list?.length - 1
        ? items?.quiz?.question_list?.length - 1
        : prevCount + 1,
    );
    submitQuiz({
      take_quiz_id: items?.id,
      question_id: items?.quiz?.question_list[index]?.id,
      question_type: items?.quiz?.question_list[index]?.question_type,
      answer: txt,
      choice_list: selectedItems,
    });
  };
  const Return = () => {
    if (
      !check.find(
        (item: any) => item.id === items?.quiz?.question_list[index]?.id,
      )
    ) {
      dispatch(
        Quizz({
          id: items?.quiz?.question_list[index]?.id,
          chose:
            items?.quiz?.question_list[index]?.question_type ==
            'MULTIPLE_CHOICE'
              ? selectedItems
              : txt,
        }),
      );
    } else {
      dispatch(
        Reselect({
          id: items?.quiz?.question_list[index]?.id,
          chose:
            items?.quiz?.question_list[index]?.question_type ==
            'MULTIPLE_CHOICE'
              ? selectedItems
              : txt,
        }),
      );
    }
    setIndex(prevCount => (prevCount <= 0 ? 0 : prevCount - 1));
  };
  const summit = () => {
    submitQuiz({
      take_quiz_id: items?.id,
      question_id: items?.quiz?.question_list[index]?.id,
      question_type: items?.quiz?.question_list[index]?.question_type,
      answer: txt,
      choice_list: selectedItems,
    });
    setShow(true);
    dispatch(DeleteForm([]));
  };
  return (
    <View style={[stylescustom.container]}>
      <HeaderScreen title="Làm bài" navigation={navigation} />
      <ScrollView style={stylescustom.paddingBottom}>
        <View style={{alignSelf: 'center', marginTop: 10}}>
          <CountTime time={items?.quiz?.time} />
        </View>
        <View style={styles.view}>
          <View style={styles.proges}>
            <Text style={styles.txt1}>
              Số điểm: {items?.quiz?.question_list[index]?.mark}
            </Text>
            <Text style={styles.txt}>
              {index + 1}/{items?.quiz?.question_list?.length}
            </Text>
            <ProgressBar progress={progress} color={colors.RED} />
          </View>
        </View>
        <Text
          style={{
            ...styles.title,
            marginTop: 20,
            marginLeft: sizes._screen_width * 0.05,
          }}>
          {items?.quiz?.question_list[index]?.question}
        </Text>
        <View style={{alignItems: 'center'}}>
          {items?.quiz?.question_list[index]?.question_type ==
          'MULTIPLE_CHOICE' ? (
            <FlatList
              data={items?.quiz?.question_list[index]?.choice_list}
              renderItem={({item, index}) => (
                <RenderQuiz
                  idItem={idItem}
                  item={item}
                  index={index}
                  setSelectedItems={setSelectedItems}
                  SelectedItems={selectedItems}
                />
              )}
              numColumns={2}
              contentContainerStyle={styles.flatlist}
              scrollEnabled={false}
            />
          ) : (
            <TextInput
              value={txt}
              onChangeText={val => setTxt(val)}
              multiline={true}
              cursorColor={colors.BLACK}
              selectionColor={colors.BLACK}
              style={styles.txtInput}
            />
          )}
        </View>
        <BTNQuizz
          view={styles.btn}
          index={index}
          next={Next}
          return={Return}
          complete
          submit={summit}
          maxIndex={items?.quiz?.question_list?.length - 1}
        />

        <ModalConfirm
          confirm={() => {
            setShow(false);
            navigation.navigate('TestResul', {
              item: DataQuizzs[0],
            });
          }}
          isShow={show}
          toggleDate={() => setShow(false)}
          txt="Bạn đã hoàn thành bài kiểm tra? Ấn đồng ý để kết thúc"
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: colors.BLACK,
    fontSize: sizes._screen_width * 0.04,
    fontFamily: fonts.textBold,
  },
  view: {
    marginLeft: 10,
    marginTop: sizes._screen_height * 0.02,
  },
  txt1: {
    ...stylescustom.txt1,
    marginTop: 5,
  },
  proges: {
    width: sizes._screen_width * 0.9,

    marginTop: 10,
    alignSelf: 'center',
  },
  txt: {
    alignSelf: 'flex-end',
    marginBottom: 5,
    ...stylescustom.txt,
  },
  flatlist: {
    marginTop: 10,
    alignSelf: 'center',
  },
  btn: {
    width: sizes._screen_width * 0.9,
    alignSelf: 'center',

    marginTop: sizes._screen_height * 0.02,
  },
  txtInput: {
    height: sizes._screen_height * 0.2,
    width: sizes._screen_width * 0.9,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.GRAY,
    marginTop: 10,
    padding: 10,
    verticalAlign: 'top',
    ...stylescustom.txt,
  },
});
