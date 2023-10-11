import React, {useEffect, useState} from 'react';
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
import CusTombtn from '../../component/textInput/CusTomTextInput';
import {ActivityIndicator} from 'react-native-paper';
import {validateEmail} from '../../res/require';
import ErrorText1 from '../error/ErrorText1';
import {ErrValiEmail, errEmail} from '../../res/err';
import {useForgotpwMutation} from '../../redux/state';
interface Props {
  isShow: boolean;
  toggleDate: () => void;
}
const ModalForgotPassword = (props: Props) => {
  const [forgot, {data, error, isSuccess, isLoading, isError}] =
    useForgotpwMutation();
  const [email, setEmail] = useState('');
  const [Erremail, setErrEmail] = useState('');
  const SentForgot = () => {
    forgot({
      email: email,
    });
  };
  useEffect(() => {
    if (error) {
      setErrEmail(ErrValiEmail);
    }
  }, [error]);
  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.head}>
        <Text style={styles.txthead}>Asana</Text>
      </View>
      <View style={styles.view}>
        <View style={styles.view1}>
          <Text style={styles.txt}>Nhập email khôi phục tài khoản</Text>
          <CusTombtn
            placeholder="Nhập email tài khoản"
            value={email}
            setValue={setEmail}
            require
          />
          {email && !validateEmail(email) ? (
            <ErrorText1 err={errEmail} />
          ) : null}
          {isSuccess && (
            <ErrorText1 err={'Kiểm tra email để khôi phục tài khoản'} />
          )}
          {isError && <ErrorText1 err={Erremail} />}
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => (isSuccess ? props.toggleDate() : SentForgot())}>
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <>
              {isSuccess ? (
                <Text style={styles.btntxt}>Đóng</Text>
              ) : (
                <Text style={styles.btntxt}>Gửi</Text>
              )}
            </>
          )}
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
export default ModalForgotPassword;
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
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
    color: colors.BLACK,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.038,
  },
  view1: {alignItems: 'center', marginTop: 15},
});
