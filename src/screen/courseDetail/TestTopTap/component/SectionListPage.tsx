import React from 'react';
import {HFlatList, HScrollView} from 'react-native-head-tab-view';
import Comment from '../../Comment';
import {NavigationProp} from '@react-navigation/native';
import {CourseDetail} from '../../../../../types/CourseDetail';
import {styles} from '../styles';

interface Props {
  index: number;
  navigation: NavigationProp<Record<string, any>>;
  data?: CourseDetail | undefined;
}
const SectionListPage = (props: Props) => {
  const renderFooterComponent = () => {
    return <Comment item={props.data} navigation={props.navigation} />;
  };
  return (
    <HFlatList
      style={styles.container}
      data={[]}
      renderItem={null}
      ListFooterComponent={renderFooterComponent}
      index={props.index}
    />
  );
};

export default SectionListPage;
