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
import {NavigationProp} from '@react-navigation/native';
interface Props {
  isShow?: boolean;
  toggleDate?: () => void;
  title?: string;
  confirm?: boolean;
  navigation?: NavigationProp<Record<string, any>>;
}

const ModalConfirmRegister = (props: Props) => {
  const succes = () => {
    props.navigation?.navigate('Login');
  };
  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.head}>
        <Text style={styles.txthead}>VI MASTER</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.title}>
          {props.title
            ? props.title
            : 'Đăng ký thành công. Trở lại màn hình đăng nhập để bắt đầu'}
        </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={props.toggleDate}
          onPressOut={() => {
            props.confirm ? succes() : undefined;
          }}>
          <Text style={styles.btntxt}>Đồng ý</Text>
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
          <TouchableWithoutFeedback>
            <View style={{zIndex: 0, flex: 1, height: '100%', width: '100%'}} />
          </TouchableWithoutFeedback>
          <View style={styles.content}>{renderContent()}</View>
        </View>
      </Modal>
    </View>
  );
};
export default ModalConfirmRegister;
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
});
