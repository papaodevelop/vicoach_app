import React, {useRef, useState} from 'react';
import {Alert, Linking, Pressable, Text, View} from 'react-native';
import {
  CollapsibleHeaderTabView as ZHeaderTabView,
  ZTabViewProps,
} from 'react-native-tab-view-collapsible-header';
import {styles} from '../styles';
import {NavigationProp} from '@react-navigation/native';
import {CourseCategoryType} from '../../../../../types/CourseCategoryType';
import Star from '../../../../component/Star';
import stylescustom from '../../../../res/stylescustom';
import sizes from '../../../../res/sizes';
import Header from '../../Header';
import Infomation from '../../Infomation';
import Content from '../../Content';
import Comment from '../../Comment';
import Icons from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../../res/colors';
import {useAddCousesFreeMutation} from '../../../../redux/state';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {addFavorite} from '../../../../redux/state/favorite';
import ModalContact from '../../../../component/modal/ModalContact';

interface ScrollableTabViewContainerProps {
  navigation: NavigationProp<Record<string, any>>;
  item: CourseCategoryType;
  data: any;
  setShow: (val: boolean) => void;
}

const TabViewContainer: React.FC<
  ScrollableTabViewContainerProps & Partial<ZTabViewProps<any>>
> = props => {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'Infomation', title: 'Thông tin'},
    {key: 'Content', title: 'Nội dung'},
    {key: 'Comment', title: 'Đánh giá'},
  ]);
  const [buyCouses] = useAddCousesFreeMutation();

  const add = async (slug: string) => {
    try {
      await buyCouses(slug).unwrap();
      Alert.alert('Thêm khoá học thành công');
    } catch (error) {
      Alert.alert('Thêm khoá học thất bại');
    }
    refRBSheet.current.close();
  };
  const _renderScene = (e: any) => {
    const {route} = e;
    if (route.key == 'Infomation') {
      return <Infomation index={0} datas={props.data} />;
    } else if (route.key == 'Content') {
      return (
        <Content index={1} navigation={props.navigation} datas={props.data} />
      );
    } else if (route.key == 'Comment') {
      return (
        <Comment index={2} item={props.data} navigation={props.navigation} />
      );
    }
    return null;
  };
  const textTitle = props.data?.title?.vi || props.data?.title?.en;
  const category =
    props.data?.category?.name?.vi || props.data?.category?.name?.en;
  const refRBSheet = useRef<any>();
  const openWebsite = () => {
    const url = 'https://megaone.edu.vn/vi';
    Linking.openURL(url).catch(error =>
      console.error('Lỗi khi mở trang web: ', error),
    );
  };
  const dispatch = useDispatch();

  const addCarts = () => {
    // dispatch(
    //   addCart({
    //     id: props.item?.id,
    //     name: textTitle,
    //     reviews: props.item?.avg_review,
    //     thumbnail: props.data?.thumbnail?.url || null,
    //     startDate: props.data?.created_at,
    //     price: props.data?.price,
    //     discount: props.data?.discount,
    //   }),
    // );
    // refRBSheet.current.close();

    Alert.alert(
      `Thông báo`,
      'Xin lỗi tính năng này của chúng tôi đang trong qúa trình phát triển bạn hãy truy cập trang web của chúng tôi để tiến hành mua khoá học',
      [
        {
          text: 'Hủy bỏ',
          style: 'cancel',
          onPress: () => console.log('Bạn đã hủy bỏ.'),
        },
        {text: 'Truy cập', onPress: () => openWebsite()},
      ],
    );
  };
  const AddToFavorite = async () => {
    dispatch(addFavorite(props.data));
    await refRBSheet.current.close();
  };
  const _renderScrollHeader = () => {
    return (
      <>
        <View style={styles.view}>
          <Text style={styles.txt}>{textTitle}</Text>
          <View style={styles.view1}>
            <Text style={stylescustom.txt1}>{category}</Text>
            <Star
              star={props.item?.avg_review}
              width={sizes._screen_width * 0.2}
            />
          </View>
        </View>
        <Header onShow={() => refRBSheet.current.open()} data={props.data} />
      </>
    );
  };

  return (
    <View style={{flex: 1}}>
      {props.data && (
        <ZHeaderTabView
          navigationState={{index, routes}}
          renderScene={_renderScene}
          onIndexChange={setIndex}
          renderScrollHeader={_renderScrollHeader}
          {...props}
        />
      )}

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
          <Pressable style={styles.view3} onPress={AddToFavorite}>
            <Icons
              name="hearto"
              color={colors.BLACK}
              size={sizes._screen_width * 0.06}
            />
            <Text style={styles.txt2}>Thêm vào mục yêu thích</Text>
          </Pressable>
          {/* {props.data?.price !== 0 && (
            <Pressable
              style={styles.view3}
              onPress={async () => {
                await refRBSheet.current.close();
                await props.setShow(true);
              }}>
              <Icons
                name="customerservice"
                color={colors.BLACK}
                size={sizes._screen_width * 0.06}
              />
              <Text style={styles.txt2}>Đăng kí tư vấn về khoá học</Text>
            </Pressable>
          )} */}

          {!props.data?.has_enroll && (
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
          )}
          {!props.data?.has_enroll && props.data?.price == 0 && (
            <Pressable
              style={styles.view3}
              onPress={() => add(props.data?.slug)}>
              <MaterialCommunityIcons
                name="book-plus"
                color={colors.BLACK}
                size={sizes._screen_width * 0.06}
              />

              <Text style={styles.txt2}>Nhận khoá học</Text>
            </Pressable>
          )}
        </View>
      </RBSheet>
    </View>
  );
};

export {TabViewContainer};
