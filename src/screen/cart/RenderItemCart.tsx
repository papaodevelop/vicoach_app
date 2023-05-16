import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import Star from '../../component/Star';
import {money} from '../../res/convert';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  item: any;
  index: number;
}
export default function RenderItemCart(props: Props) {
  return (
    <View style={styles.view}>
      <View style={stylescustom.view1}>
        <Image source={{uri: props.item.img}} style={styles.img} />
        <View style={styles.view1}>
          <Text style={stylescustom.txt2}>{props.item.name}</Text>
          <Star star={props.item.star} width={sizes._screen_width * 0.2} />
          <View style={stylescustom.view}>
            <View style={stylescustom.view1}>
              <Icon
                name="calendar"
                color={colors.GRAY}
                size={sizes._csreen_width * 0.04}
              />
              <Text style={styles.txt}>{props.item.day}</Text>
            </View>
            <Text style={styles.price}>{money(props.item.pirce)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    ...stylescustom.view,
  },
  view1: {
    height: sizes._screen_width * 0.2,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  img: {
    height: sizes._screen_width * 0.2,
    width: sizes._screen_width * 0.3,
    borderRadius: 15,
  },
  price: {
    ...stylescustom.txt,
    color: colors.GREEN,
  },
  txt: {
    ...stylescustom.txt1,
    marginLeft: 5,
  },
});
