import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {TabBar} from 'react-native-tab-view';
// import {TabViewContainer} from './component/TabViewBase';
import {styles} from './styles';
import {NavigationProp} from '@react-navigation/native';
import {CourseCategoryType} from '../../../../types/CourseCategoryType';
import {useGetdetailCourseQuery} from '../../../redux/state';
import Loading from '../../../component/loading/Loading';
import {TabViewContainer} from './component/TabViewBase';
import {Text} from 'react-native-animatable';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import colors from '../../../res/colors';

interface Props {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
  item: CourseCategoryType;
  id: number;
  setShow: (val: boolean) => void;
}
const ExampleCustomTabbar = (props: Props) => {
  const {data, isLoading} = useGetdetailCourseQuery(`${props.id}`);
  const _renderTabBar = (props: any) => {
    return (
      <TabBar
        {...props}
        inactiveColor={'black'}
        activeColor={colors.GREEN}
        style={styles.tabbarStyle}
        indicatorStyle={styles.view2}
      />
    );
  };
  const Props = {
    overflowHeight: 20,
    tabbarHeight: 60,
  };

  return (
    <View style={{flex: 1}}>
      {!!isLoading ? (
        <Loading />
      ) : (
        <>
          {!!data ? (
            <TabViewContainer
              {...Props}
              setShow={props.setShow}
              renderTabBar={_renderTabBar}
              data={data}
              item={props.item}
              navigation={props.navigation}
            />
          ) : (
            <>
              <Text style={styles.txt3}>Khoá học không tồn tại</Text>
              <Image
                source={images.nodata}
                style={{
                  height: sizes._screen_width * 0.8,
                  width: sizes._screen_width * 0.8,
                  alignSelf: 'center',
                }}
              />
            </>
          )}
        </>
      )}
    </View>
  );
};
export default ExampleCustomTabbar;
