import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';
import {NavigationProp} from '@react-navigation/native';
import sizes from '../../res/sizes';
import Star from '../../component/Star';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/AntDesign';
import colors from '../../res/colors';
import {Tabs} from 'react-native-collapsible-tab-view';
import Infomation from './Infomation';
import Content from './Content';
import RBSheet from 'react-native-raw-bottom-sheet';
import Comment from './Comment';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import {useDispatch} from 'react-redux';
import {addCart} from '../../redux/state/cart.reducer';
import images from '../../res/images';
import {useGetdetailCourseQuery} from '../../redux/api/courseCategory.api';
import {CourseDetail} from '../../../types/CourseDetail';
import Loading from '../../component/loading/Loading';
import Video from 'react-native-video';
import {ProgressBar} from 'react-native-paper';

interface Props {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}
const Header = ({
  item,
  onShow,
  data,
}: {
  item: CourseCategoryType;
  onShow: () => void;
  data: CourseDetail | undefined;
}) => {
  console.log(data?.assign_instructor?.image);

  return (
    <>
      {data?.video_overview?.url ? (
        <>
          <Video
            style={styles.img}
            rate={1}
            muted={false}
            onError={val => console.log(val)}
            fullscreenOrientation="all"
            source={{uri: data?.video_overview?.url}}
            resizeMode="contain"
            volume={8}
            ignoreSilentSwitch="ignore"
            fullscreenAutorotate={true}
            onLoadStart={() => console.log('loadStart')}
            repeat={false}
            controls={true}
            onLoad={() => console.log('loadEnd')}
          />
        </>
      ) : (
        <Image
          source={{uri: item?.thumbnail?.url}}
          style={styles.img}
          resizeMode="cover"
          defaultSource={images.i2}
        />
      )}

      <View style={styles.viewHeader}>
        <View style={stylescustom.view1}>
          <Image
            source={{uri: data?.assign_instructor?.image?.url}}
            style={styles.avt}
            defaultSource={images.noimage}
          />
          <View style={{marginLeft: 8}}>
            <Text style={stylescustom.txt}>
              {data?.assign_instructor?.name}
            </Text>
            <Text style={stylescustom.txt1}>
              {data?.assign_instructor?.short_description}
            </Text>
          </View>
        </View>
        <Pressable style={styles.view2} onPress={onShow}>
          <Icon
            name="dots-three-horizontal"
            size={sizes._screen_width * 0.07}
            color={colors.GRAY}
          />
        </Pressable>
      </View>
    </>
  );
};

const CourseDetails = (props: Props) => {
  const item =
    (props.route.params.item as CourseCategoryType) ||
    (props.route.params as CourseDetail);
  const refRBSheet = useRef<any>();
  const dispatch = useDispatch();
  const {data, isLoading} = useGetdetailCourseQuery(`${item.id}`);
  const textTitle = data?.title?.vi || data?.title?.en;
  const category = data?.category?.name?.vi || data?.category?.name?.en;
  const addCarts = () => {
    dispatch(
      addCart({
        id: item?.id,
        name: textTitle,
        reviews: item?.reviews,
        thumbnail: data?.thumbnail?.url,
        startDate: data?.created_at,
        price: data?.price,
      }),
    );
    refRBSheet.current.close();
  };
  return (
    <View style={stylescustom.container}>
      <View style={styles.view4}>
        <HeaderScreen navigation={props.navigation} title="Chi tiết khoá học" />
        <View style={styles.view}>
          <Text style={styles.txt}>{textTitle}</Text>
          <View style={styles.view1}>
            <Text style={stylescustom.txt1}>{category}</Text>
            <Star star={item?.reviews} width={sizes._screen_width * 0.2} />
          </View>
        </View>
      </View>

      <Tabs.Container
        headerContainerStyle={{
          zIndex: 1,
        }}
        renderHeader={() => (
          <Header
            item={item}
            onShow={() => refRBSheet.current.open()}
            data={data}
          />
        )}>
        <Tabs.Tab name="Thông tin">
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <Infomation datas={data} />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Nội dung">
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <Content navigation={props.navigation} data={data} />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Đánh giá">
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <Comment item={data} navigation={props.navigation} />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
      {/* @ts-ignore */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
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
        <View style={{marginLeft: 15}}>
          <Text style={styles.txt1}>Tuỳ chọn</Text>
          <View style={styles.view3}>
            <Icons
              name="hearto"
              color={colors.BLACK}
              size={sizes._screen_width * 0.06}
            />
            <Text style={styles.txt2}>Thêm vào mục yêu thích</Text>
          </View>
          <View style={styles.view3}>
            <Icons
              name="shoppingcart"
              color={colors.BLACK}
              size={sizes._screen_width * 0.06}
            />
            <Text style={styles.txt2} onPress={addCarts}>
              Thêm vào giỏ hàng
            </Text>
          </View>
        </View>
      </RBSheet>
      {isLoading && <Loading />}
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    ...stylescustom.txt3,
    fontSize: sizes._screen_width * 0.05,
    marginTop: sizes._screen_height * 0.03,
  },
  view: {
    width: sizes._screen_width * 0.95,
    alignSelf: 'center',
  },
  img: {
    width: sizes._screen_width,
    height: sizes._screen_width * (9 / 12),
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'black',
  },
  avt: {
    width: sizes._screen_width * 0.12,
    height: sizes._screen_width * 0.12,
    borderRadius: (sizes._screen_width * 0.12) / 2,
  },
  view1: {
    marginRight: sizes._screen_width * 0.05,
    ...stylescustom.view,
    marginTop: 10,
  },
  view2: {
    padding: sizes._screen_width * 0.03,
    backgroundColor: colors.WHITE,
    borderRadius: 15,
  },
  txt1: {
    ...stylescustom.txt3,
    fontSize: sizes._screen_width * 0.05,
  },
  txt2: {
    ...stylescustom.txt,
    marginLeft: 5,
  },
  view3: {
    ...stylescustom.view1,
    marginTop: 15,
  },
  viewHeader: {...stylescustom.view, marginTop: 15, marginLeft: 10},
  view4: {zIndex: 10, backgroundColor: 'white', paddingBottom: 5},
});

export default CourseDetails;
