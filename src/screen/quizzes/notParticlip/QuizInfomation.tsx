import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import stylescustom from '../../../res/stylescustom';
import HeaderScreen from '../../../component/header/HeaderScreen';
import sizes from '../../../res/sizes';
import images from '../../../res/images';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../res/colors';
import BTNLogin from '../../../component/btn/BTNLogin';
import ModalConfirm from '../../../component/modal/ModalConfirm';
import {NavigationProp} from '@react-navigation/native';
interface Props {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}
const QuizInfomation = (props: Props) => {
  const item = props.route.params.item;
  const [show, setShow] = useState(false);
  const Confirm = () => {
    props.navigation.navigate('StartQuizz', {
      item: item,
    });
    setShow(false);
  };
  return (
    <View style={stylescustom.container}>
      <HeaderScreen title="Thông tin" navigation={props.navigation} />
      <View style={styles.view}>
        <Text style={stylescustom.txt2}>{item.name}</Text>
        <Text style={stylescustom.txt1}>{item.title}</Text>
        <Image source={images.quizz} style={styles.img} />
        <View style={styles.view1}>
          <View style={styles.view2}>
            <View style={styles.view4}>
              <Icon
                name="mortar-board"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
              />
            </View>
            <View style={styles.view5}>
              <Text style={stylescustom.txt1}>Tổng điểm</Text>
              <Text style={stylescustom.txt3}>{'100'}</Text>
            </View>
          </View>
          <View style={styles.view2}>
            <View style={styles.view4}>
              <Icon
                name="check-square"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
              />
            </View>
            <View style={styles.view5}>
              <Text style={stylescustom.txt1}>Pass</Text>
              <Text style={stylescustom.txt3}>{item.quantity} 50</Text>
            </View>
          </View>
          <View style={styles.view2}>
            <View style={styles.view4}>
              <Icon
                name="plus-square"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
              />
            </View>
            <View style={styles.view5}>
              <Text style={stylescustom.txt1}>Quizz</Text>
              <Text style={stylescustom.txt3}>{item.numberofsentences}</Text>
            </View>
          </View>
          <View style={styles.view2}>
            <View style={styles.view4}>
              <Icon
                name="clock-o"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
              />
            </View>
            <View style={styles.view5}>
              <Text style={stylescustom.txt1}>Thời gian</Text>

              <Text style={stylescustom.txt3}>{item.time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.btn}>
          <BTNLogin onPress={() => setShow(true)} txt="Bắt đầu" />
        </View>
      </View>
      <ModalConfirm
        txt="Bạn muốn bắt đầu làm bài tập ?"
        isShow={show}
        toggleDate={() => setShow(false)}
        confirm={Confirm}
      />
    </View>
  );
};

export default QuizInfomation;

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.95,
    alignSelf: 'center',
    marginTop: sizes._screen_height * 0.03,
  },
  img: {
    width: sizes._screen_width * 0.8,
    height: sizes._screen_width * 0.8,
    alignSelf: 'center',
    marginTop: sizes._screen_height * 0.03,
  },
  view1: {
    width: sizes._screen_width * 0.8,
    marginTop: sizes._screen_height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  view2: {
    width: sizes._screen_width * 0.4,
    ...stylescustom.view1,
    marginTop: 20,
  },
  view4: {
    backgroundColor: '#DCDCDC',
    height: sizes._screen_width * 0.09,
    width: sizes._screen_width * 0.09,
    borderRadius: (sizes._screen_width * 0.09) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    marginLeft: 8,
  },
  btn: {
    alignSelf: 'center',
    marginTop: sizes._screen_height * 0.1,
  },
});
