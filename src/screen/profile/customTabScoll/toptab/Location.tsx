import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {HScrollView} from 'react-native-head-tab-view';
import sizes from '../../../../res/sizes';
import TextInPutProfile from '../../../../component/textInput/TextInPutProfile';
import BTNLogin from '../../../../component/btn/BTNLogin';
import {useSettingProfileMutation} from '../../../../redux/state';
import District from '../../component/District';
import Province from '../../component/Province';
const Location = ({
  index,
  data,
  refect,
}: {
  index: number;
  data: ProfileType | undefined;
  refect: () => void;
}) => {
  const [street, setStreet] = useState<string | undefined>(
    data?.address?.street,
  );
  const [district, setDistrict] = useState<string | undefined>(
    data?.address?.state?.name,
  );
  const [city, setCity] = useState<string | undefined>(
    data?.address?.city?.name,
  );
  const [code, setCode] = useState<string | undefined>(
    data?.address?.city?.code,
  );
  const [code1, setCode1] = useState<string | undefined>(
    data?.address?.state?.code,
  );
  const [update] = useSettingProfileMutation();
  const updateProfile = async () => {
    try {
      const upd = await update({
        address: {
          city: code,
          state: code1,
          street: street,
        },
      }).unwrap();
      if (upd) {
        refect();
      }
    } catch (error) {}
  };

  return (
    <HScrollView
      index={index}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps={'handled'}>
      <View style={styles.container}>
        <Province district={city} setDistrict={setCity} code={setCode} />

        <District
          provincecode={code}
          code={setCode1}
          district={district}
          setDistrict={setDistrict}
        />
        <View style={styles.view}>
          <TextInPutProfile
            value={street}
            setValue={setStreet}
            placeholder="Địa chỉ nhà phường xã"
          />
        </View>
        <View style={styles.btn}>
          <BTNLogin onPress={updateProfile} txt="Cập nhật" />
        </View>
      </View>
    </HScrollView>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    width: sizes._screen_width,

    alignItems: 'center',
    paddingBottom: 50,
  },
  view: {
    width: sizes._screen_width * 0.9,
    marginTop: 20,
  },
  btn: {marginTop: 20},
});
