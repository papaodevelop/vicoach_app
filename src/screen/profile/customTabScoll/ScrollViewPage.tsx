import React from 'react';
import {Image, StyleSheet, ScrollView, View, Text} from 'react-native';
import {HScrollView} from 'react-native-head-tab-view';
import staticData from './staticData';

interface Props {
  index: number;
  refreshEnabled?: boolean;
  timecount?: number;
  tabLabel?: string;
  onPressItem?: () => void;
}

const defaultProps = {
  refreshEnabled: false,
  timecount: 2000,
};

interface State {
  isRefreshing: boolean;
  data?: Array<any>;
}

export default class ScrollViewPage extends React.PureComponent<
  Props & typeof defaultProps,
  State
> {
  static defaultProps = defaultProps;

  constructor(props: any) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
  }

  render() {
    return (
      <HScrollView
        index={this.props.index}
        showsVerticalScrollIndicator={false}>
        {staticData.Page1Data.map((item: any, index: number) => {
          return (
            <View
              style={{width: '100%', alignItems: 'center'}}
              key={'Page1_' + index}>
              <View style={styles.titleStyle}>
                <Text style={styles.sectionTitle}>{item.title}</Text>
              </View>
              <Image
                style={styles.imageStyle}
                resizeMode={'cover'}
                source={item.image}
              />
            </View>
          );
        })}
      </HScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  sectionTitle: {
    color: '#4D4D4D',
    fontSize: 15,
  },
  imageStyle: {
    width: '100%',
    height: 200,
  },
});
