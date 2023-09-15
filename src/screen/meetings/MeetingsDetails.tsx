import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen from '../../component/header/HeaderScreen';
import {MeetingsTypes} from '../../../types/MeetingsType';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../res/colors';
import BTNLogin from '../../component/btn/BTNLogin';
import {NavigationProp} from '@react-navigation/native';
import {useGetTokenZoomQuery} from '../../redux/state';
interface Props {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}
export default function MeetingsDetails(props: Props) {
  let item = props.route.params.item as MeetingsTypes;
  const {data, error} = useGetTokenZoomQuery({
    id: 1,
  });

  const RenderItem = () => (
    <View style={styles.view}>
      <View style={styles.viewImg}>
        <Image source={item.image} style={styles.img} />
      </View>
      <Text style={styles.txt}>{item.name}</Text>
      <Text style={stylescustom.txt1}>{item.position}</Text>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <View style={styles.view4}>
            <Icon
              name="calendar"
              color={colors.GRAY}
              size={sizes._screen_width * 0.04}
            />
          </View>
          <View style={styles.view5}>
            <Text style={stylescustom.txt1}>Ngày bắt đầu</Text>
            <Text style={stylescustom.txt3}>{item.startDate}</Text>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.view4}>
            <Icon
              name="clock-o"
              color={colors.GRAY}
              size={sizes._screen_width * 0.04}
            />
          </View>
          <View style={styles.view5}>
            <Text style={stylescustom.txt1}>Thời gian</Text>
            <Text style={stylescustom.txt3}>{item.quantity} Giờ</Text>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.view4}>
            <Icon
              name="clock-o"
              color={colors.GRAY}
              size={sizes._screen_width * 0.04}
            />
          </View>
          <View style={styles.view5}>
            <Text style={stylescustom.txt1}>Bắt đầu</Text>
            <Text style={stylescustom.txt3}>{item.startTime}</Text>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.view4}>
            <Icon
              name="clock-o"
              color={colors.GRAY}
              size={sizes._screen_width * 0.04}
            />
          </View>
          <View style={styles.view5}>
            <Text style={stylescustom.txt1}>Kết thúc</Text>
            <Text style={stylescustom.txt3}>{item.endTime}</Text>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.view4}>
            <Icon
              name="video-camera"
              color={colors.GRAY}
              size={sizes._screen_width * 0.04}
            />
          </View>
          <View style={styles.view5}>
            <Text style={stylescustom.txt1}>Loại</Text>
            <Text style={stylescustom.txt3}>
              {item.type ? 'Online' : 'Offline'}{' '}
            </Text>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.view4}>
            <Icon
              name="group"
              color={colors.GRAY}
              size={sizes._screen_width * 0.04}
            />
          </View>
          <View style={styles.view5}>
            <Text style={stylescustom.txt1}>Thành viên tham gia</Text>
            <Text style={stylescustom.txt3}>{item.duration}</Text>
          </View>
        </View>

        <View style={styles.view2}>
          <View style={styles.view4}>
            <Icon
              name="bullseye"
              color={colors.GRAY}
              size={sizes._screen_width * 0.04}
            />
          </View>
          <View style={styles.view5}>
            <Text style={stylescustom.txt1}>Trạng thái</Text>
            <Text style={stylescustom.txt3}>{item.status}</Text>
          </View>
        </View>
      </View>
      <View style={styles.view6}>
        <Text style={stylescustom.txt3}>Miêu tả</Text>
        <Text style={stylescustom.txt1}>{item.descrption}</Text>
      </View>
      <View style={styles.view7}>
        <BTNLogin
          txt="Bắt đầu"
          onPress={() => props.navigation.navigate('Meeting', {data})}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <HeaderScreen title="Chi tiết lớp học" navigation={props.navigation} />
      <FlatList
        data={[]}
        renderItem={null}
        ListFooterComponent={() => <RenderItem />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    alignItems: 'center',
    marginTop: sizes._screen_height * 0.08,
  },
  viewImg: {
    height: sizes._screen_width * 0.4,
    width: sizes._screen_width * 0.4,
    borderRadius: (sizes._screen_width * 0.4) / 2,
    borderColor: '#FFCC00',
    borderWidth: sizes._screen_width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: sizes._screen_width * 0.3,
    width: sizes._screen_width * 0.3,
    borderRadius: (sizes._screen_width * 0.3) / 2,
  },
  txt: {
    ...stylescustom.txt2,
    fontSize: sizes._screen_width * 0.045,
    marginTop: sizes._screen_height * 0.02,
  },
  view1: {
    width: sizes._screen_width * 0.8,
    marginTop: sizes._screen_height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  view2: {
    width: sizes._screen_width * 0.4,
    ...stylescustom.view1,
    marginTop: 20,
  },
  view4: {
    backgroundColor: '#DCDCDC',
    height: sizes._screen_width * 0.09,
    width: sizes._screen_width * 0.09,
    borderRadius: (sizes._screen_width * 0.09) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    marginLeft: 8,
  },
  view6: {
    padding: 15,
    borderRadius: 20,
    width: sizes._screen_width * 0.9,
    borderWidth: 1,
    borderColor: colors.GRAY,
    marginTop: 10,
  },
  view7: {
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
});
