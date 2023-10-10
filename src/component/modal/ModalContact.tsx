import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import stylescustom from '../../res/stylescustom';
import TextInPutProfile from '../textInput/TextInPutProfile';
import {
  isRequired,
  isValidVietnamesePhoneNumber,
  kiem_tra,
  validateEmail,
} from '../../res/require';
import ErrorText from '../error/ErrorText';
import {usePostContactMutation} from '../../redux/state';
interface Props {
  isShow?: boolean;
  toggleDate: () => void;
  confirm?: () => void;
  txt?: string;
  loading?: boolean;
}
const ModalContact = (props: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sdt, setSdt] = useState('');
  const [content, setContent] = useState('');
  const [postConstact, {isLoading}] = usePostContactMutation();
  const post = async () => {
    try {
      const aa = await postConstact({
        email: email,
        name: name,
        message: content,
        phone_number: sdt,
      }).unwrap();
      if (aa) {
        props.toggleDate();
        Alert.alert(`Thông báo`, 'Gửi thông tin thành công', [
          {
            text: 'Hủy bỏ',
            style: 'cancel',
            onPress: () => props.toggleDate(),
          },
          {text: 'Ok', onPress: () => props.toggleDate()},
        ]);
      }
    } catch (error) {
      Alert.alert(`Thông báo`, 'Gửi thông tin thất bại', [
        {
          text: 'Hủy bỏ',
          style: 'cancel',
          onPress: () => console.log('Bạn đã hủy bỏ.'),
        },
        {text: 'Đóng', onPress: () => props.toggleDate()},
      ]);
    }
  };
  const check = () => {
    if (
      isRequired(name) &&
      isValidVietnamesePhoneNumber(sdt) &&
      validateEmail(email) &&
      kiem_tra(content)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.head}>
        <Text style={styles.txthead}>Đăng ký tư vấn</Text>
      </View>
      <View style={styles.view}>
        <TextInPutProfile
          stylecustom={styles.txtinput}
          placeholder="Họ tên"
          value={name}
          setValue={setName}
        />
        <TextInPutProfile
          stylecustom={styles.txtinput}
          placeholder="email"
          value={email}
          setValue={setEmail}
        />
        {email && !validateEmail(email) && (
          <ErrorText err="Email không đúng định dạng" />
        )}
        <TextInPutProfile
          stylecustom={styles.txtinput}
          placeholder="Số điên thoại"
          value={sdt}
          setValue={setSdt}
          maxlength={10}
          numberic
        />
        {sdt && !isValidVietnamesePhoneNumber(sdt) && (
          <ErrorText err="Số điện thoại không đúng định dạng" />
        )}
        <TextInPutProfile
          stylecustom={styles.txtinput}
          placeholder="Nội dung"
          value={content}
          setValue={setContent}
        />
        {content && !kiem_tra(content) && (
          <ErrorText err="Nội dung phải trên 20 kí tự" />
        )}
        <View
          style={{
            ...stylescustom.view,
            width: sizes._screen_width * 0.7,
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={[
              styles.btn,
              {backgroundColor: check() ? colors.GREEN : colors.GRAY},
            ]}
            onPress={check() ? post : undefined}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.btntxt}>Đồng ý</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: colors.GRAY}}
            onPress={props.toggleDate}>
            <Text style={styles.btntxt}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <Modal
      visible={props.isShow}
      animationType="slide"
      transparent={true}
      statusBarTranslucent={true}>
      <View style={styles.container1}>
        <TouchableWithoutFeedback onPress={props.toggleDate}>
          <View
            style={{
              zIndex: 0,
              flex: 1,
              height: '100%',
              width: '100%',
            }}
          />
        </TouchableWithoutFeedback>
        <View style={styles.content}>{renderContent()}</View>
      </View>
    </Modal>
  );
};
export default ModalContact;
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
    fontSize: sizes._screen_width * 0.055,
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
  txtinput: {
    width: sizes._csreen_width * 0.8,
    height: 45,
    marginTop: 20,
  },
});
