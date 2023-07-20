import React, {useRef, useState} from 'react';
import {Alert, Pressable, Text, View} from 'react-native';
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
import {useDispatch} from 'react-redux';
import {addCart} from '../../../../redux/state/cart.reducer';
import {useAddCousesFreeMutation} from '../../../../redux/state';

interface ScrollableTabViewContainerProps {
  navigation: NavigationProp<Record<string, any>>;
  item: CourseCategoryType;
  data: any;
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
      const aa = await buyCouses(slug).unwrap();
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
  const dispatch = useDispatch();
  const addCarts = () => {
    dispatch(
      addCart({
        id: props.item?.id,
        name: textTitle,
        reviews: props.item?.avg_review,
        thumbnail: props.data?.thumbnail?.url || null,
        startDate: props.data?.created_at,
        price: props.data?.price,
        discount: props.data?.discount,
      }),
    );
    refRBSheet.current.close();
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
    <>
      {props.data ? (
        <ZHeaderTabView
          navigationState={{index, routes}}
          renderScene={_renderScene}
          onIndexChange={setIndex}
          renderScrollHeader={_renderScrollHeader}
          {...props}
        />
      ) : (
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
          <View style={styles.view3}>
            <Icons
              name="hearto"
              color={colors.BLACK}
              size={sizes._screen_width * 0.06}
            />
            <Text style={styles.txt2}>Thêm vào mục yêu thích</Text>
          </View>

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
              <Icons
                name="shoppingcart"
                color={colors.BLACK}
                size={sizes._screen_width * 0.06}
              />

              <Text style={styles.txt2}>Nhận khoá học</Text>
            </Pressable>
          )}
        </View>
      </RBSheet>
    </>
  );
};

export {TabViewContainer};
