import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
import CusTombtn from '../../component/textInput/CusTomTextInput';
import BTNLogin from '../../component/btn/BTNLogin';
import images from '../../res/images';
import Icon from 'react-native-vector-icons/Entypo';
import ModalConfirmRegister from '../../component/modal/ModalConfirmRegister';
const Register = ({navigation}: any) => {
  const [name, setNname] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passconfirm, setPassConfirm] = useState('');
  const [show, setShow] = useState(false);
  const submit = async () => {
    setShow(false);
    await navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Icon
        name="chevron-left"
        size={40}
        color={'black'}
        style={styles.icon}
        onPress={() => navigation.goBack()}
      />
      <Image source={images.logo} resizeMode="contain" style={styles.img} />
      <Text style={styles.login}>ĐĂNG KÝ</Text>
      <View style={styles.view}>
        <CusTombtn
          placeholder="Tên người dùng"
          value={name}
          setValue={setNname}
        />
        <CusTombtn
          placeholder="Tên đăng nhập"
          value={userName}
          setValue={setUsername}
        />
        <CusTombtn placeholder="Email" value={email} setValue={setEmail} />
        <CusTombtn placeholder="Mật khẩu" value={pass} setValue={setPass} />
        <CusTombtn
          placeholder="Xác nhận mật khẩu"
          value={passconfirm}
          setValue={setPassConfirm}
        />
      </View>
      <View style={styles.btn}>
        <BTNLogin txt="ĐĂNG KÝ" onPress={() => setShow(true)} />
      </View>
      <ModalConfirmRegister isShow={show} toggleDate={submit} />
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
    marginTop: sizes._csreen_height * 0.05,
    alignSelf: 'center',
  },
  view: {
    alignItems: 'center',
    marginTop: sizes._screen_height * 0.03,
    height: sizes._csreen_height * 0.36,
    justifyContent: 'space-between',
  },

  btn: {
    marginTop: sizes._screen_height * 0.03,
    alignItems: 'center',
  },
  img: {
    tintColor: colors.ORANGE,
    alignSelf: 'center',
    marginTop: sizes._csreen_height * 0.03,
  },
  icon: {marginTop: sizes._screen_height * 0.05, marginLeft: 15},
});
