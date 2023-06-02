import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Dimensions, ImageBackground, View} from 'react-native';
// import staticData from '../config/staticData'
import {
  CollapsibleHeaderTabView as ZHeaderTabView,
  ZTabViewProps,
} from 'react-native-tab-view-collapsible-header';
import {
  CollapsibleHeaderTabView,
  ZTabViewProps as TabViewProps,
} from 'react-native-scrollable-tab-view-collapsible-header';
import {ScrollViewPage} from './index';
import sizes from '../../../res/sizes';
const TIMECOUNT = 3000;
const HEAD_HEIGHT = sizes._screen_height * 0.3;

interface ScrollableTabViewContainerProps {
  renderScrollHeader?: () =>
    | React.ComponentType<any>
    | React.ReactElement
    | null;
  sceneRefreshEnabled?: boolean;
  tabsRefreshEnabled?: boolean;
}

const ScrollableTabViewContainer: React.FC<
  ScrollableTabViewContainerProps & Partial<TabViewProps>
> = props => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const mTimer = useRef<number | null>(null);
  const onStartRefresh = () => {
    setIsRefreshing(true);
    mTimer.current = setTimeout(() => {
      setIsRefreshing(false);
    }, TIMECOUNT);
  };

  const _renderScrollHeader = () => {
    return <View style={styles.headerStyle}></View>;
  };

  useEffect(() => {
    return mTimer.current ? clearTimeout(mTimer.current) : () => {};
  }, []);

  return (
    <CollapsibleHeaderTabView
      onStartRefresh={props.tabsRefreshEnabled ? onStartRefresh : undefined}
      isRefreshing={isRefreshing}
      renderScrollHeader={_renderScrollHeader}
      {...props}>
      <ScrollViewPage
        key={'ScrollViewPage'}
        tabLabel={'ScrollView'}
        index={0}
        refreshEnabled={props.sceneRefreshEnabled}
      />
      <ScrollViewPage
        key={'ScrollViewPage1'}
        tabLabel={'ScrollView'}
        index={1}
        refreshEnabled={props.sceneRefreshEnabled}
      />
      <ScrollViewPage
        key={'SectionListPage'}
        tabLabel={'SectionList'}
        index={2}
        refreshEnabled={props.sceneRefreshEnabled}
      />
    </CollapsibleHeaderTabView>
  );
};

const TabViewContainer: React.FC<
  ScrollableTabViewContainerProps & Partial<ZTabViewProps<any>>
> = props => {
  const [index, setIndex] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const mTimer = useRef<number | null>(null);
  const [routes, setRoutes] = useState([
    {key: 'ScrollView', title: 'Tổng Quan'},
    {key: 'FlatList', title: 'Đổi MK'},
    {key: 'SectionList', title: 'Thông tin'},
  ]);

  const onStartRefresh = () => {
    setIsRefreshing(true);
    mTimer.current = setTimeout(() => {
      setIsRefreshing(false);
    }, TIMECOUNT);
  };

  useEffect(() => {
    return mTimer.current ? clearTimeout(mTimer.current) : () => {};
  }, []);

  const _renderScene = (e: any) => {
    const {route} = e;

    if (route.key == 'ScrollView') {
      return (
        <ScrollViewPage index={0} refreshEnabled={props.sceneRefreshEnabled} />
      );
    } else if (route.key == 'FlatList') {
      return (
        <ScrollViewPage index={1} refreshEnabled={props.sceneRefreshEnabled} />
      );
    } else if (route.key == 'SectionList') {
      return (
        <ScrollViewPage index={2} refreshEnabled={props.sceneRefreshEnabled} />
      );
    }
    return null;
  };

  const _renderScrollHeader = () => {
    return <View style={styles.headerStyle}></View>;
  };

  return (
    <ZHeaderTabView
      onStartRefresh={props.tabsRefreshEnabled ? onStartRefresh : undefined}
      isRefreshing={isRefreshing}
      navigationState={{index, routes}}
      renderScene={_renderScene}
      onIndexChange={setIndex}
      initialLayout={styles.tabviewLayout}
      lazy={true}
      renderScrollHeader={_renderScrollHeader}
      {...props}
    />
  );
};

export {ScrollableTabViewContainer, TabViewContainer};
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
