import {
  Alert,
  FlatList,
  Linking,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen1 from '../../component/header/HeaderScreen1';
import {NavigationProp} from '@react-navigation/native';
import {useGetStoreInfoQuery} from '../../redux/state';
import Loading from '../../component/loading/Loading';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Support({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  const {data, isLoading} = useGetStoreInfoQuery('');
  const CallPhone = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };
  const sentMail = (mail: string) => {
    Linking.openURL(`mailto:${mail}`);
  };
  const RenderItem = ({item}: {item: StoreInfo}) => (
    <View style={styles.view}>
      <Text style={stylescustom.txtBold}>{item?.title}</Text>

      <View style={stylescustom.view}>
        <Text style={stylescustom.txt}>Địa chỉ email: {item?.email}</Text>
        <MaterialIcons
          name="email"
          color={colors.BLACK}
          size={27}
          onPress={() => {
            sentMail(item?.email);
          }}
        />
      </View>
      <View style={stylescustom.view}>
        <Text style={stylescustom.txt}>
          Số điện thoại: {item?.phone_number}
        </Text>
        <Entypo
          name="phone"
          color={colors.BLACK}
          size={27}
          onPress={() => CallPhone(item?.phone_number)}
        />
      </View>

      <View style={stylescustom.view}>
        <Text style={stylescustom.txt}>Địa chỉ: {item?.street}</Text>
        <View
          style={{
            ...styles.view1,
            backgroundColor:
              item?.status === 'ACTIVE' ? '#66e901' : colors.GRAY,
          }}
        />
      </View>
    </View>
  );

  return (
    <View style={stylescustom.container}>
      <HeaderScreen1 title="Hỗ Trợ khoá học" navigation={navigation} />
      {data?.items.length !== 0 ? (
        <FlatList
          data={data?.items}
          renderItem={({item}: {item: StoreInfo}) => <RenderItem item={item} />}
        />
      ) : (
        <Text style={styles.txt}>Chưa có thông tin hỗ trợ hoá học</Text>
      )}
      {isLoading && <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.9,
    backgroundColor: 'gray',
    marginTop: 15,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
  },
  view1: {
    height: 15,
    width: 15,
    borderRadius: 20,
  },
  txt: {
    ...stylescustom.txt,
    alignSelf: 'center',
    marginTop: 30,
  },
});
