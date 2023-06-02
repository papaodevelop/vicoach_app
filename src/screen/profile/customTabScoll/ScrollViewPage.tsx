import React from 'react';
import {StyleSheet} from 'react-native';
import {HScrollView} from 'react-native-head-tab-view';

interface Props {
  index: number;
}

const defaultProps = {};
export default class ScrollViewPage extends React.PureComponent<
  Props & typeof defaultProps
> {
  static defaultProps = defaultProps;

  render() {
    return (
      <HScrollView
        index={this.props.index}
        showsVerticalScrollIndicator={false}></HScrollView>
    );
  }
}

const styles = StyleSheet.create({});
