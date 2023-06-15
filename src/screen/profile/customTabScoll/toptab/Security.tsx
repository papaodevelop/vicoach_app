import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {HScrollView} from 'react-native-head-tab-view';
import sizes from '../../../../res/sizes';
import stylescustom from '../../../../res/stylescustom';
import TextInPutProfile from '../../../../component/textInput/TextInPutProfile';
import BTNLogin from '../../../../component/btn/BTNLogin';
import {useChangePassWordMutation} from '../../../../redux/state';
import {validatePassword} from '../../../../res/require';
import ErrorText1 from '../../../../component/error/ErrorText1';
import {errPassWord, errexport, kiemTraLoi} from '../../../../res/err';
import ModalConfirm from '../../../../component/modal/ModalConfirm';
import ModalConfirmRegister from '../../../../component/modal/ModalConfirmRegister';
import {NavigationProp} from '@react-navigation/native';
type Err = {
  error: {
    data: {
      message: string[];
    };
  };
};
const Security = ({
  index,
  navigation,
}: {
  index: number;
  navigation: NavigationProp<Record<string, any>>;
}) => {
  const [passWord, setPassWord] = useState<string>();
  const [passWordNew, setPassWordNew] = useState<string>();
  const [cFPassWord, setCFPassWord] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);

  const [changPass, {isSuccess, isError, isLoading}] =
    useChangePassWordMutation();
  const [ErrpassWord, setErrPassWord] = useState<string>();

  const Sumit = async () => {
    try {
      setErrPassWord('');
      const sumitPass = (await changPass({
        current_password: passWord,
        new_password: passWordNew,
        new_password_confirmation: cFPassWord,
      })) as Err;
      const check = sumitPass.error.data.message;
      if (check) {
        setErrPassWord(kiemTraLoi(check, 'current_password not match!'));
      }
    } catch (error) {}
  };
  useEffect(() => {
    if (isSuccess) {
      setSuccess(true);
    }
  }, [isSuccess]);
  return (
    <HScrollView
      index={index}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps={'handled'}>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Mật khẩu cũ</Text>
          <TextInPutProfile value={passWord} setValue={setPassWord} />
          {ErrpassWord && <ErrorText1 err={'Mật khẩu cũ không đúng'} />}
        </View>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Mật khẩu mới</Text>
          <TextInPutProfile
            value={passWordNew}
            setValue={setPassWordNew}
            secureTextEntry={true}
          />
          {passWordNew && !validatePassword(passWordNew) ? (
            <ErrorText1 err={errPassWord} />
          ) : null}
        </View>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Xác nhận mật khẩu mới</Text>
          <TextInPutProfile
            value={cFPassWord}
            setValue={setCFPassWord}
            secureTextEntry
          />
          {passWordNew !== cFPassWord && (
            <ErrorText1
              err={'Mật khẩu không mới và xác nhận mật khẩu không khớp'}
            />
          )}
        </View>
        <View style={styles.btn}>
          <BTNLogin
            onPress={Sumit}
            txt="Cập nhật"
            active={passWord && passWordNew && cFPassWord ? false : true}
          />
        </View>
        <ModalConfirmRegister
          navigation={navigation}
          confirm
          isShow={success}
          toggleDate={() => setSuccess(false)}
          title="Đổi mật khẩu thành công! Hãy đăng nhập lại để tiếp tục"
        />
      </View>
    </HScrollView>
  );
};

export default Security;

const styles = StyleSheet.create({
  container: {
    width: sizes._screen_width,
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 50,
  },
  view: {
    width: sizes._screen_width * 0.9,
    marginTop: 20,
  },
  btn: {marginTop: 20},
});
