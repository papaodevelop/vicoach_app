import {
  Image,
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
import {useGetTermPageQuery} from '../../redux/state';
import Loading from '../../component/loading/Loading';
import ModalConfirm from '../../component/modal/ModalConfirm';
import images from '../../res/images';
import sizes from '../../res/sizes';

const TermsAndConditions = ({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) => {
  const {width} = useWindowDimensions();
  const [show, setShow] = useState(false);

  const {data, isLoading, refetch, isFetching} = useGetTermPageQuery('');

  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={navigation} title="Điều khoản điều kiện" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txt}>{data ? data?.title?.vi : ''}</Text>
        {data?.content?.vi === undefined ? (
          <View style={styles.view}>
            <Image source={images.nodata} />
            <Text style={stylescustom.txtBold}>Không dữ có liệu</Text>
          </View>
        ) : (
          <RenderHtml
            contentWidth={width}
            source={{
              html: `${data?.content?.vi}`,
            }}
          />
        )}

        {/* <View style={{alignItems: 'center', marginBottom: 50, marginTop: 20}}>
          <BTNLogin
            txt="Yêu cầu xoá tài khoản"
            onPress={async () => {
              setShow(true);
            }}
          />
        </View> */}
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
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: sizes._screen_height * 0.1,
  },
});
