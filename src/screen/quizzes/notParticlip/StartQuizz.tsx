import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import stylescustom from '../../../res/stylescustom';
import HeaderScreen from '../../../component/header/HeaderScreen';
import sizes from '../../../res/sizes';
import {ProgressBar} from 'react-native-paper';
import colors from '../../../res/colors';
import BTNQuizz from '../../../component/btn/BTNQuizz';
import fonts from '../../../res/fonts';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {Time} from '../../../res/convert';
import RenderQuiz from './RenderQuiz';
import ModalConfirm from '../../../component/modal/ModalConfirm';
import {DeleteForm} from '../../../redux/state/Quizz.reducer';
import {useDispatch} from 'react-redux';
import {DataQuizzs} from '../../../datafeck/feck/DataQuizzs';
export default function StartQuizz({navigation, route}: any) {
  const items = route.params.item;
  const percent = 1 / items?.quiz?.length;
  const [selectId, setSelectID] = useState<number>();
  const [progress, setProgress] = useState<number>();
  const [index, setIndex] = useState(0);
  const [idItem, setIdItem] = useState();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    let item = index + 1;
    setProgress(percent * item);
    setIdItem(items.quiz[index].id);
  }, [index]);
  const Next = () =>
    setIndex(prevCount =>
      prevCount >= items?.quiz?.length - 1
        ? items?.quiz?.length - 1
        : prevCount + 1,
    );
  const Return = () =>
    setIndex(prevCount => (prevCount <= 0 ? 0 : prevCount - 1));
  const summit = () => {
    setShow(true);
    dispatch(DeleteForm([]));
  };
  const RenderItem = () => (
    <>
      <View style={styles.view}>
        <View style={{alignSelf: 'center'}}>
          <CountdownCircleTimer
            isPlaying
            duration={items.time * 60}
            size={sizes._screen_width * 0.4}
            colors={['#F7B801', '#A30000']}
            colorsTime={[10, 0]}>
            {({remainingTime}) => {
              if (remainingTime === 0) {
                setShow(true);
              }
              return (
                <>
                  <Text style={stylescustom.txt}>
                    {remainingTime == 0 ? 'Hết giờ' : Time(remainingTime)}
                  </Text>
                </>
              );
            }}
          </CountdownCircleTimer>
        </View>
        <View style={styles.proges}>
          <Text style={styles.txt1}>Số điểm: {100 / items?.quiz?.length}</Text>
          <Text style={styles.txt}>
            {index + 1}/{items?.quiz?.length}
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
        {items.quiz[index].name}
      </Text>
      <View>
        <FlatList
          data={items.quiz[index].question}
          renderItem={({item, index}) => (
            <RenderQuiz
              idItem={idItem}
              item={item}
              index={index}
              quiz
              select={(val: number) => setSelectID(val)}
              selectedId={selectId}
            />
          )}
          numColumns={2}
          contentContainerStyle={styles.flatlist}
          scrollEnabled={false}
        />
      </View>
      <BTNQuizz
        view={styles.btn}
        index={index}
        next={Next}
        return={Return}
        complete
        submit={summit}
        maxIndex={items?.quiz?.length - 1}
      />
    </>
  );
  return (
    <View style={stylescustom.container}>
      <HeaderScreen title="Làm bài" navigation={navigation} />
      <FlatList
        data={[]}
        renderItem={null}
        ListFooterComponent={() => <RenderItem />}
        contentContainerStyle={{paddingBottom: 50, alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
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
});
