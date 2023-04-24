import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
import CusTombtn from '../../component/textInput/CusTomTextInput';
import BTNLogin from '../../component/btn/BTNLogin';
import images from '../../res/images';
import ModalForgotPassword from '../../component/modal/ModalForgotPassword';
const Login = ({navigation}: any) => {
  const [userName, setusername] = useState('');
  const [pass, setPass] = useState('');
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={images.logo} resizeMode="contain" style={styles.img} />
      <Text style={styles.login}>LOGIN</Text>
      <View style={styles.view}>
        <CusTombtn
          placeholder="Tên đăng nhập"
          value={userName}
          setValue={setusername}
        />
        <CusTombtn
          placeholder="Mật khẩu"
          pass={true}
          value={pass}
          setValue={setPass}
        />
      </View>
      <Text style={styles.txt2} onPress={() => setShow(true)}>
        Quên mật khẩu ?
      </Text>
      <View style={styles.btn}>
        <BTNLogin
          txt="ĐĂNG NHẬP"
          onPress={() => navigation.navigate('Bottomtabbars')}
        />
      </View>
      <Text style={styles.txt3}>
        Bạn chưa có tài khoản?{' '}
        <Text
          style={{color: 'red'}}
          onPress={() => navigation.navigate('Register')}>
          {' '}
          Đăng ký
        </Text>{' '}
      </Text>
      <ModalForgotPassword isShow={show} toggleDate={() => setShow(false)} />
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  login: {
    color: colors.ORANGE,
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.055,
    marginTop: sizes._csreen_height * 0.1,
    alignSelf: 'center',
  },
  view: {
    alignItems: 'center',
    marginTop: sizes._screen_height * 0.03,
    height: sizes._csreen_height * 0.13,
    justifyContent: 'space-between',
  },
  txt2: {
    color: colors.RED,
    fontFamily: fonts.textRegular,
    fontSize: sizes._csreen_width * 0.04,
    marginTop: sizes._screen_width * 0.04,
    alignSelf: 'flex-end',
    marginRight: sizes._screen_width * 0.07,
  },
  btn: {
    marginTop: sizes._screen_height * 0.03,
    alignItems: 'center',
  },
  img: {
    tintColor: colors.ORANGE,
    alignSelf: 'center',
    marginTop: sizes._csreen_height * 0.1,
  },
  txt3: {
    color: colors.GREEN,
    fontFamily: fonts.textRegular,
    fontSize: sizes._csreen_width * 0.04,
    alignSelf: 'center',
    marginTop: sizes._screen_height * 0.04,
  },
});
