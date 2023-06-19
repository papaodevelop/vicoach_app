import React from 'react';
import {View} from 'react-native';
import {TabBar} from 'react-native-tab-view';
// import {TabViewContainer} from './component/TabViewBase';
import {styles} from './styles';
import {NavigationProp} from '@react-navigation/native';
import {CourseCategoryType} from '../../../../types/CourseCategoryType';
import {useGetdetailCourseQuery} from '../../../redux/state';
import Loading from '../../../component/loading/Loading';
import colors from '../../../res/colors';
import {TabViewContainer} from './component/TabViewBase';
interface Props {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
  item: CourseCategoryType;
  id: number;
}
const ExampleCustomTabbar = (props: Props) => {
  const {data, isLoading} = useGetdetailCourseQuery(`${props.id}`);

  const _renderTabBar = (props: any) => {
    return (
      <TabBar
        {...props}
        inactiveColor={'black'}
        activeColor={'red'}
        style={styles.tabbarStyle}
        indicatorStyle={{
          backgroundColor: colors.ORANGE,
          height: 2,
          borderRadius: 10,
        }}
      />
    );
  };
  const Props = {
    overflowHeight: 20,
    tabbarHeight: 60,
  };

  return (
    <>
      <TabViewContainer
        {...Props}
        renderTabBar={_renderTabBar}
        data={data}
        item={props.item}
        navigation={props.navigation}
      />
      {isLoading && <Loading />}
    </>
  );
};
export default ExampleCustomTabbar;
