import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';
import {NavigationProp} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import {useGetShowPriceQuery, useGetTermPageQuery} from '../../redux/state';
import Loading from '../../component/loading/Loading';
import BTNLogin from '../../component/btn/BTNLogin';
import ModalConfirm from '../../component/modal/ModalConfirm';

import sizes from '../../res/sizes';

const TermsAndConditions = ({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) => {
  const [show, setShow] = useState(false);
  const {data: dataShow} = useGetShowPriceQuery('');
  const {data, isLoading} = useGetTermPageQuery('');
  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={navigation} title="Điều khoản điều kiện" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txt}>{data ? data?.title?.vi : ''}</Text>
        <View style={{width: sizes.width * 0.9, alignSelf: 'center'}}>
          <RenderHtml
            contentWidth={sizes.width}
            source={{
              html: `${data?.content?.vi}`,
            }}
          />
        </View>

        {!dataShow?.show_course_price && (
          <View style={{alignItems: 'center', marginBottom: 50, marginTop: 20}}>
            <BTNLogin
              txt="Yêu cầu xoá tài khoản"
              onPress={async () => {
                setShow(true);
              }}
            />
          </View>
        )}
      </ScrollView>
      {isLoading && <Loading />}
      <ModalConfirm
        txt="Yêu cầu xoá tài khoản của bạn đã được gửi đi. Cảm ơn bạn đã tin dùng chúng tôi!"
        isShow={show}
        confirm={() => setShow(false)}
        toggleDate={() => setShow(false)}
      />
    </View>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  txt: {...stylescustom.txtBold, marginTop: 20, marginLeft: 5},
});
