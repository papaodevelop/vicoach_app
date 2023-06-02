import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  CollapsibleHeaderTabView as ZHeaderTabView,
  ZTabViewProps,
} from 'react-native-tab-view-collapsible-header';
import sizes from '../../../res/sizes';
import {NavigationProp} from '@react-navigation/native';
import {General, Location, Security} from './index';
const TIMECOUNT = 3000;
const HEAD_HEIGHT = sizes._screen_height * 0.3;

interface ScrollableTabViewContainerProps {
  renderScrollHeader?: () =>
    | React.ComponentType<any>
    | React.ReactElement
    | null;
  sceneRefreshEnabled?: boolean;
  tabsRefreshEnabled?: boolean;
  data?: ProfileType;
  navigation: NavigationProp<Record<string, any>>;
}
const TabViewContainer: React.FC<
  ScrollableTabViewContainerProps & Partial<ZTabViewProps<any>>
> = props => {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'General', title: 'Tổng Quan'},
    {key: 'Security', title: 'Đổi MK'},
    {key: 'Location', title: 'Địa chỉ'},
  ]);

  const _renderScene = (e: any) => {
    const {route} = e;
    if (route.key == 'General') {
      return <General index={0} data={props.data} />;
    } else if (route.key == 'Security') {
      return <Security index={1} />;
    } else if (route.key == 'Location') {
      return <Location index={2} />;
    }
    return null;
  };

  const _renderScrollHeader = () => {
    return <View style={styles.headerStyle}></View>;
  };

  return (
    <ZHeaderTabView
      navigationState={{index, routes}}
      renderScene={_renderScene}
      onIndexChange={setIndex}
      renderScrollHeader={_renderScrollHeader}
      {...props}
    />
  );
};

export {TabViewContainer};
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#fff',
    width: '100%',
    height: HEAD_HEIGHT,
  },
  tabviewLayout: {
    width: sizes._screen_width,
  },
});
