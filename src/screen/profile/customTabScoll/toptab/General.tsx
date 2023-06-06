import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {HScrollView} from 'react-native-head-tab-view';
import sizes from '../../../../res/sizes';
import stylescustom from '../../../../res/stylescustom';
import colors from '../../../../res/colors';
import TextInPutProfile from '../../../../component/textInput/TextInPutProfile';
import BTNLogin from '../../../../component/btn/BTNLogin';
import {useSettingProfileMutation} from '../../../../redux/state';
interface Props {
  index: number;
  data?: ProfileType;
  refetch: () => void;
}

const General = (props: Props) => {
  const [name, setName] = useState<string | undefined>(props.data?.name);
  const [facebook, setFacebook] = useState<string | undefined>(
    props.data?.facebook,
  );
  const [instagram, setInstagram] = useState<string | undefined>(
    props.data?.instagram,
  );
  const [linkedin, setLinkedin] = useState<string | undefined>(
    props.data?.linkedin,
  );
  const [numberPhone, setNumberPhone] = useState<string | undefined>(
    props.data?.phone_number,
  );
  const [twitter, setTwitter] = useState<string | undefined>(
    props.data?.twitter,
  );
  const [update] = useSettingProfileMutation();
  const upDateProfile = async () => {
    try {
      const upd = await update({
        name: name,
        phone_number: numberPhone,
        facebook: facebook,
        twitter: twitter,
        linkedin: linkedin,
        instagram: instagram,
      }).unwrap();
      if (upd) {
        props.refetch();
      }
    } catch (error) {}
  };
  return (
    <HScrollView
      index={props.index}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps={'handled'}>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Email</Text>
          <View style={styles.view1}>
            <Text style={stylescustom.txt}>{props.data?.email}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Họ và tên</Text>
          <TextInPutProfile value={name} setValue={setName} />
        </View>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Số điện thoại</Text>
          <TextInPutProfile value={numberPhone} setValue={setNumberPhone} />
        </View>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Facebook</Text>
          <TextInPutProfile value={facebook} setValue={setFacebook} />
        </View>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Twitter</Text>
          <TextInPutProfile value={twitter} setValue={setTwitter} />
        </View>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Linkedin</Text>
          <TextInPutProfile value={linkedin} setValue={setLinkedin} />
        </View>
        <View style={styles.view}>
          <Text style={stylescustom.txt1}>Instagram</Text>
          <TextInPutProfile value={instagram} setValue={setInstagram} />
        </View>
        <View style={styles.btn}>
          <BTNLogin onPress={upDateProfile} txt="Lưu " />
        </View>
      </View>
    </HScrollView>
  );
};

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
  view1: {
    height: 50,
    width: sizes._screen_width * 0.9,
    borderColor: colors.GRAY,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: (sizes._screen_width * 0.9) / 2,
    marginTop: 8,
    padding: 10,
  },
});

export default General;
