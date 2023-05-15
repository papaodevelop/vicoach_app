import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import colors from '../../res/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import sizes from '../../res/sizes';

const RenderDetail = ({item, index}: any) => {
  return (
    <View style={styles.view2}>
      <View style={styles.view4}>
        <Icon
          name={item.icon}
          color={colors.GRAY}
          size={sizes._screen_width * 0.04}
        />
      </View>
      <View style={styles.view5}>
        <Text style={stylescustom.txt1}>{item.name}</Text>
        <Text style={stylescustom.txt3}>{item.title}</Text>
      </View>
    </View>
  );
};

export default RenderDetail;

const styles = StyleSheet.create({
  view2: {
    width: sizes._screen_width * 0.4,
    ...stylescustom.view1,
    marginTop: 20,
  },
  view4: {
    backgroundColor: '#DCDCDC',
    height: sizes._screen_width * 0.09,
    width: sizes._screen_width * 0.09,
    borderRadius: (sizes._screen_width * 0.09) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    marginLeft: 8,
  },
});
