import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Popover from 'react-native-popover-view';
import stylescustom from '../../res/stylescustom';
import colors from '../../res/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const PopoverDeleteCMT = ({
  touchable,
  showPopover,
  setShowPopover,
  DeleteCMT,
}: {
  touchable: any;
  showPopover: boolean;
  setShowPopover: (val: boolean) => void;
  DeleteCMT: () => void;
}) => {
  return (
    <Popover
      from={touchable}
      isVisible={showPopover}
      onRequestClose={() => setShowPopover(false)}>
      <View style={styles.popover}>
        <Pressable style={stylescustom.view1} onPress={DeleteCMT}>
          <Icon
            name="trash"
            color={colors.BLACK}
            size={30}
            style={styles.icon}
          />
          <Text style={styles.txt1}>Xoá</Text>
        </Pressable>
      </View>
    </Popover>
  );
};

export default PopoverDeleteCMT;

const styles = StyleSheet.create({
  popover: {
    backgroundColor: colors.WHITE,
    height: 50,
    width: 150,
    justifyContent: 'space-around',
  },
  txt1: {
    ...stylescustom.txt,
    marginLeft: 30,
  },
  icon: {width: 35, marginLeft: 10},
});
