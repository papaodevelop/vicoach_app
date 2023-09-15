import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
import CusTombtn from '../../component/textInput/CusTomTextInput';
import BTNLogin from '../../component/btn/BTNLogin';
import images from '../../res/images';
import Icon from 'react-native-vector-icons/Entypo';
import ModalConfirmRegister from '../../component/modal/ModalConfirmRegister';
import {Payloadregiter} from '../../../types/Auth';
import Loading from '../../component/loading/Loading';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '../../res/require';
import ErrorText1 from '../../component/error/ErrorText1';
import {errEmail, errPassWord, errUserName, errexport} from '../../res/err';
import {Errors} from '../../../types/Err';
import {useRegisterMutation} from '../../redux/state';
const Register = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errEmails, setErrEmails] = useState('');
  const [erruserNames, setErrUsernames] = useState('');
  const [show, setShow] = useState(false);
  const [register, {error, isLoading, isSuccess}] = useRegisterMutation();
  const submit = async () => {
    try {
      const a = await register({
        username: userName,
        email: email,
        name: name,
        password: pass,
        password_confirmation: pass,
      }).unwrap();
    } catch (error) {}
  };
  useEffect(() => {
    if (isSuccess) {
      setShow(true);
    }
    let errr = error as Errors;
    let err = errr?.data?.message;
    if (err) {
      setErrEmails(errexport(err));
      setErrUsernames(errexport(err));
    }
  }, [error, isSuccess]);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        automaticallyAdjustKeyboardInsets={true}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps={'handled'}>
        <Icon
          name="chevron-left"
          size={40}
          color={'black'}
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <Image
          source={images.logomkt1}
          resizeMode="contain"
          style={styles.img}
        />
        <Text style={styles.login}>ĐĂNG KÝ</Text>
        <View style={styles.view}>
          <CusTombtn
            placeholder="Tên người dùng"
            value={name}
            setValue={setName}
            require
          />
          <CusTombtn
            placeholder="Tên đăng nhập"
            value={userName}
            setValue={setUsername}
            require
          />
          {userName && !validateUsername(userName) ? (
            <ErrorText1 err={errUserName} />
          ) : null}
          <ErrorText1 err={erruserNames} />

          <CusTombtn
            placeholder="Email"
            value={email}
            setValue={setEmail}
            require
          />
          {email && !validateEmail(email) ? (
            <ErrorText1 err={errEmail} />
          ) : null}
          <ErrorText1 err={errEmails} />

          <CusTombtn
            placeholder="Mật khẩu"
            value={pass}
            setValue={setPass}
            require
          />
          {pass && !validatePassword(pass) ? (
            <ErrorText1 err={errPassWord} />
          ) : null}
        </View>
        <View style={styles.btn}>
          <BTNLogin
            txt="ĐĂNG KÝ"
            onPress={submit}
            active={name && email && userName && pass ? false : true}
          />
        </View>
        <ModalConfirmRegister isShow={show} toggleDate={() => setShow(false)} />
      </ScrollView>
      {isLoading && <Loading />}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  login: {
    color: colors.ORANGE,
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.055,
    alignSelf: 'center',
  },
  view: {
    alignItems: 'center',

    justifyContent: 'space-between',
  },

  btn: {
    marginTop: sizes._screen_height * 0.03,
    alignItems: 'center',
  },
  img: {
    alignSelf: 'center',
    marginTop: sizes._csreen_height * 0.03,
    height: sizes._screen_width * 0.5,
    width: sizes._screen_width * 0.5,
  },
  icon: {marginTop: sizes._screen_height * 0.05, marginLeft: 15},
});
