import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
interface Props {
  isShow: boolean;
  toggleDate: () => void;
}
const ModalPay = (props: Props) => {
  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.head}>
        <Text style={styles.txthead}>Vi Coaching</Text>
      </View>
      <View style={styles.view}>
        <View style={styles.view1}>
          <Text style={styles.txt}>
            Đơn hàng của bạn đã được gửi đi chúng tôi sẽ liên hệ với bạn trong
            thời gian ngắn nhất hoặc liên hệ{' '}
            <Text style={{color: colors.RED}}>0865312138</Text> để được hỗ trợ.
            Xin cảm ơn!
          </Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => props.toggleDate()}>
          <Text style={styles.btntxt}>Đóng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <Modal
        visible={props.isShow}
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}>
        <View style={styles.container1}>
          <TouchableWithoutFeedback onPress={props.toggleDate}>
            <View style={{zIndex: 0, flex: 1, height: '100%', width: '100%'}} />
          </TouchableWithoutFeedback>
          <View style={styles.content}>{renderContent()}</View>
        </View>
      </Modal>
    </View>
  );
};
export default ModalPay;
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.68)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: sizes._screen_width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
  },
  btn: {
    backgroundColor: colors.GREEN,
    width: sizes._screen_width * 0.3,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  btntxt: {
    color: 'white',
    fontSize: sizes._screen_width * 0.05,
    fontFamily: fonts.textBold,
  },
  head: {
    backgroundColor: colors.ORANGE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 40,
    width: sizes._screen_width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txthead: {
    color: 'white',
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.06,
  },
  view: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
    paddingTop: 10,
    width: sizes._screen_width * 0.9,
  },
  title: {
    textAlign: 'center',
    width: sizes._screen_width * 0.8,
    alignSelf: 'center',
    color: colors.BLACK,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.043,
  },
  txt: {
    marginBottom: 10,
    color: colors.BLACK,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
    alignSelf: 'center',
    textAlign: 'center',
  },
  view1: {alignItems: 'center', marginTop: 15},
});
