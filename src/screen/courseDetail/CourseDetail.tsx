import React, {useEffect, useState} from 'react';
import HeaderScreen from '../../component/header/HeaderScreen';
import {NavigationProp} from '@react-navigation/native';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import {CourseDetail} from '../../../types/CourseDetail';
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
  const [show, setShow] = useState(false);

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderScreen navigation={props.navigation} title="Chi tiết khoá học" />
      <ExampleCustomTabbar
        id={item?.id}
        setShow={setShow}
        item={item}
        navigation={props.navigation}
        route={props.route}
      />
    </GestureHandlerRootView>
  );
};
export default CourseDetails;
