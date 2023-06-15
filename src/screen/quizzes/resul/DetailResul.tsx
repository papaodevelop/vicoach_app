import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import stylescustom from '../../../res/stylescustom';
import HeaderScreen from '../../../component/header/HeaderScreen';
import colors from '../../../res/colors';
import sizes from '../../../res/sizes';
import fonts from '../../../res/fonts';
import {ProgressBar} from 'react-native-paper';
import RenderDetailQuiz from './RenderDetailQuiz';
import BTNQuizz from '../../../component/btn/BTNQuizz';
interface Props {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}
export default function DetailResul(props: Props) {
  const items = props.route.params.item;
  const percent = 1 / items?.quiz?.length;
  const [answer, setAnswer] = useState();
  const [choose, setChoose] = useState();
  const [index, setIndex] = useState(0);
  const Next = () =>
    setIndex(prevCount =>
      prevCount >= items?.quiz?.length - 1
        ? items?.quiz?.length - 1
        : prevCount + 1,
    );
  const Return = () =>
    setIndex(prevCount => (prevCount <= 0 ? 0 : prevCount - 1));
  const [progress, setProgress] = useState<number>();
  useEffect(() => {
    let item = index + 1;
    setProgress(percent * item);
    setAnswer(items.quiz[index].answer);
    setChoose(items.quiz[index].choose);
  }, [index]);
  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={props.navigation} title="Bài kiểm tra" />
      <View style={styles.view}>
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
            <RenderDetailQuiz
              item={item}
              index={index}
              answer={answer}
              choose={choose}
            />
          )}
          scrollEnabled={false}
          numColumns={2}
          contentContainerStyle={styles.flatlist}
        />
      </View>
      <BTNQuizz
        next={Next}
        return={Return}
        view={styles.btn}
        index={index}
        maxIndex={items?.quiz?.length - 1}
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
    marginTop: 20,
    alignSelf: 'center',
  },
  btn: {
    marginTop: sizes._screen_height * 0.1,
    width: sizes._screen_width * 0.9,
    alignSelf: 'center',
  },
});
