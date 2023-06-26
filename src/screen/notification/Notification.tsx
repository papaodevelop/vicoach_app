import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import HeaderScreen from '../../component/header/HeaderScreen';
import RenderNotifi from '../../component/renderItem/RenderNotifi';
import sizes from '../../res/sizes';
import {NavigationProp} from '@react-navigation/native';
import {
  useDeleteNotifiMutation,
  useGetallNotificationQuery,
  useReadNotifiMutation,
} from '../../redux/state';
import Loading from '../../component/loading/Loading';
import stylescustom from '../../res/stylescustom';
import images from '../../res/images';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../res/colors';
import {DateTimes} from '../../res/convert';
import BTNLogin from '../../component/btn/BTNLogin';

export default function Notification({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) {
  const {data, isLoading} = useGetallNotificationQuery('', {
    pollingInterval: 5000,
  });
  const refRBSheet = useRef<any>();
  const [dataNotifi, setdataNotifi] = useState<Notification>();
  const [ReadID] = useReadNotifiMutation();
  const [loading, setLoading] = useState(false);

  const [Delete] = useDeleteNotifiMutation();
  const deleteItem = async (id: number) => {
    setLoading(true);
    await Delete({
      id: id,
    });
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <HeaderScreen navigation={navigation} title="THÔNG BÁO" />
      {data?.items.length !== 0 ? (
        <FlatList
          renderItem={({item}: {item: Notification}) => (
            <RenderNotifi
              deletes={deleteItem}
              item={item}
              onPressItem={async (val: Notification) => {
                setdataNotifi(val);
                ReadID(val?.id);
                await refRBSheet.current.open();
              }}
            />
          )}
          data={data?.items}
          keyExtractor={item => `${item.id}`}
          style={styles.view}
          maxToRenderPerBatch={20}
          initialNumToRender={20}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.view1}>
          <Image source={images.no_notification} style={styles.img} />
          <Text style={stylescustom.txt}>Bạn không có thông báo nào</Text>
        </View>
      )}
      {isLoading || (loading && <Loading />)}
      {/* @ts-ignore */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        animationType="fade"
        closeOnPressMask={false}
        dragFromTopOnly={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <>
          <View style={styles.txt}>
            <Text style={stylescustom.txtBold}>{dataNotifi?.topic}</Text>
            <Text style={stylescustom.txtGray}>
              {DateTimes(dataNotifi?.created_at)}
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.txt}>
            <Text style={stylescustom.txtBold}>{dataNotifi?.title}</Text>
            <Text style={stylescustom.txt}>{dataNotifi?.body}</Text>
          </View>
          <View style={{alignItems: 'center', bottom: 0, marginTop: 50}}>
            <BTNLogin onPress={() => refRBSheet.current.close()} txt="Đóng" />
          </View>
        </>
      </RBSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {marginTop: sizes._screen_height * 0.01, paddingBottom: 50},
  view1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: sizes._screen_height * 0.1,
  },
  img: {
    height: sizes._screen_width * 0.7,
    width: sizes._screen_width * 0.7,
  },
  line: {
    width: sizes._csreen_width * 0.95,
    backgroundColor: colors.GRAY,
    height: 1,
    alignSelf: 'center',
    marginTop: 10,
  },
  txt: {
    width: sizes._csreen_width * 0.95,
    alignSelf: 'center',
    marginTop: 10,
  },
});
