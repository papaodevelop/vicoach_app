import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';
import {NavigationProp} from '@react-navigation/native';
import sizes from '../../res/sizes';
import Star from '../../component/Star';
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
import {CourseDetail} from '../../../types/CourseDetail';
import Loading from '../../component/loading/Loading';
import Header from './Header';
import {useGetdetailCourseQuery} from '../../redux/state';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ExampleCustomTabbar from './TestTopTap/ExamCusTomTabBar';
interface Props {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}

const CourseDetails = (props: Props) => {
  const item =
    (props.route.params.item as CourseCategoryType) ||
    (props.route.params as CourseDetail);
  const refRBSheet = useRef<any>();

  const dispatch = useDispatch();

  // const addCarts = () => {
  //   dispatch(
  //     addCart({
  //       id: item?.id,
  //       name: textTitle,
  //       reviews: item?.reviews,
  //       thumbnail: data?.thumbnail?.url || null,
  //       startDate: data?.created_at,
  //       price: data?.price,
  //     }),
  //   );
  //   refRBSheet.current.close();
  // };
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderScreen navigation={props.navigation} title="Chi tiết khoá học" />
      <ExampleCustomTabbar
        id={item?.id}
        item={item}
        navigation={props.navigation}
        route={props.route}
      />

      {/* <View style={styles.view4}>
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
        initialTabName="Thông tin"
        snapThreshold={null}
        lazy={true}
        cancelLazyFadeIn={true}
        renderHeader={() => (
          <Header onShow={() => refRBSheet.current.open()} data={data} />
        )}>
        <Tabs.Tab name="Thông tin">
          <Tabs.ScrollView
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}>
            
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Nội dung">
          <Tabs.ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical>
            <Content navigation={props.navigation} datas={data} />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Đánh giá">
          <Tabs.ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical>
            <Comment item={data} navigation={props.navigation} />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container> */}

      {/* @ts-ignore */}
    </GestureHandlerRootView>
  );
};
export default CourseDetails;
