import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {HScrollView} from 'react-native-head-tab-view';
import sizes from '../../../../res/sizes';
import stylescustom from '../../../../res/stylescustom';
import TextInPutProfile from '../../../../component/textInput/TextInPutProfile';
import BTNLogin from '../../../../component/btn/BTNLogin';

const Security = ({index}: {index: number}) => {
  const [passWord, setPassWord] = useState<string>();
  const [passWordNew, setPassWordNew] = useState<string>();
  const [cFPassWord, setCFPassWord] = useState<string>();

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
        </View>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Mật khẩu mới</Text>
          <TextInPutProfile value={passWordNew} setValue={setPassWordNew} />
        </View>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Xác nhận mật khẩu mới</Text>
          <TextInPutProfile value={cFPassWord} setValue={setCFPassWord} />
        </View>
        <View style={styles.btn}>
          <BTNLogin onPress={() => {}} txt="Lưu " />
        </View>
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
