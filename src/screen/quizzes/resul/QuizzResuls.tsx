import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../../res/stylescustom';
import HeaderScreen from '../../../component/header/HeaderScreen';
import {CircularProgress} from 'react-native-circular-gradient-progress';
import sizes from '../../../res/sizes';
import colors from '../../../res/colors';
import fonts from '../../../res/fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import BTNLogin from '../../../component/btn/BTNLogin';
import {NavigationProp} from '@react-navigation/native';
interface Props {
  navigation: NavigationProp<Record<string, any>>;

  route: any;
}
export default function QuizzResuls(props: Props) {
  const item = props.route.params.item;
  let color =
    item.point < 50
      ? colors.RED
      : item.point >= 50 && item.point <= 60
      ? colors.ORANGE
      : colors.GREEN;
  let status =
    item.point < 50
      ? 'failed'
      : item.point >= 50 && item.point <= 60
      ? 'walting'
      : 'pass';

  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={props.navigation} title="ĐÃ LÀM" />
      <View style={styles.view}>
        <CircularProgress
          color={color}
          size={sizes._screen_width * 0.5}
          progress={item.point}
          strokeWidth={4}
          emptyColor={colors.GRAY}
          withSnail={true}
        />
        <View style={styles.view1}>
          <Text style={styles.txt}>{item.point}</Text>
          <Text style={stylescustom.txt1}>Điểm của bạn</Text>
        </View>
        <Text style={styles.txt1}>Bạn vượt qua bài kiểm tra</Text>
        <Text style={styles.txt2}>
          Chúc mừng! bạn vượt qua bài kiểm tra thành công
        </Text>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <View style={styles.view4}>
              <Icon
                name="certificate"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
              />
            </View>
            <View style={styles.view5}>
              <Text style={stylescustom.txt1}>Tổng điểm</Text>
              <Text style={stylescustom.txt3}>100</Text>
            </View>
          </View>
          <View style={styles.view3}>
            <View style={styles.view4}>
              <Icon
                name="check-square"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
              />
            </View>
            <View style={styles.view5}>
              <Text style={stylescustom.txt1}>Điểm đạt</Text>
              <Text style={stylescustom.txt3}>50</Text>
            </View>
          </View>
          <View style={styles.view3}>
            <View style={styles.view4}>
              <Icon
                name="user"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
              />
            </View>
            <View style={styles.view5}>
              <Text style={stylescustom.txt1}>Điểm của bạn</Text>
              <Text style={stylescustom.txt3}>{item.point}</Text>
            </View>
          </View>
          <View style={styles.view3}>
            <View style={styles.view4}>
              <Icon
                name="bullseye"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
              />
            </View>
            <View style={styles.view5}>
              <Text style={stylescustom.txt1}>Trạng thái</Text>
              <Text style={{...stylescustom.txt3, color: color}}>{status}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <BTNLogin
          onPress={() =>
            props.navigation.navigate('DetailResul', {
              item: item,
            })
          }
          txt="Xem lại"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    marginTop: sizes._screen_height * 0.15,
  },
  view1: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes._screen_width * 0.5,
    width: sizes._screen_width * 0.5,
  },
  txt: {
    color: colors.BLACK,
    fontSize: sizes._screen_width * 0.1,
    fontFamily: fonts.textBold,
  },
  txt1: {
    ...stylescustom.txt3,
    marginTop: sizes._screen_height * 0.05,
    fontSize: sizes._screen_width * 0.05,
  },
  txt2: {
    ...stylescustom.txt1,
    marginTop: 10,
    width: sizes._screen_width * 0.7,
    textAlign: 'center',
  },
  view2: {
    width: sizes._screen_width * 0.8,
    marginTop: sizes._screen_height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  view3: {
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
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});
