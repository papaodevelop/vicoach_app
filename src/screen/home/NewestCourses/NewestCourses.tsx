import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../../res/sizes';
import colors from '../../../res/colors';
import fonts from '../../../res/fonts';
import stylescustom from '../../../res/stylescustom';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {money, txt, txt1} from '../../../res/convert';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationProp} from '@react-navigation/native';
interface Props {
  data: any;
  navigation: NavigationProp<Record<string, any>>;
}
export default function NewestCourses(props: Props) {
  const RederItem = ({item}: any) => {
    return (
      <View style={styles.view}>
        <View>
          <Image
            source={{uri: item.img}}
            style={styles.img}
            resizeMode="cover"
          />
          <LinearGradient
            start={{x: 2, y: 0}}
            end={{x: 2, y: 0.7}}
            colors={['white', colors.BLACK]}
            style={[styles.img, {opacity: 0.5}]}></LinearGradient>
          <View
            style={{
              height: sizes._screen_height * 0.12,
              width: sizes._screen_width * 0.44,
            }}>
            <View style={styles.view3}>
              <FontAwesome
                name="star"
                color={'#FFD700'}
                size={sizes._screen_width * 0.04}
              />
              <Text style={styles.txt5}>{item.star}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.txt}>{txt1(item.name)}</Text>
        <View style={styles.view1}>
          <View style={stylescustom.view1}>
            <FontAwesome
              name="user"
              color={colors.GRAY}
              size={sizes._screen_width * 0.04}
            />
            <Text style={styles.txt1}>{txt(item.lecturers)}</Text>
          </View>
          <View style={stylescustom.view1}>
            <Icon
              name="clockcircle"
              color={colors.GRAY}
              size={sizes._screen_width * 0.04}
            />
            <Text style={styles.txt1}>{item.time} giờ</Text>
          </View>
        </View>
        <View style={styles.view2}>
          <Text style={styles.txt3}>
            {money(item.price) ? money(item.price) : item.price}
          </Text>
          <Text style={styles.txt2}>
            {money(item.pricenew) ? money(item.pricenew) : item.pricenew}
          </Text>
        </View>
        {item.status && (
          <View style={styles.view5}>
            <Text style={styles.txt4}>{item.status}% Off</Text>
          </View>
        )}
      </View>
    );
  };
  return (
    <FlatList
      data={props.data}
      renderItem={({item}) => <RederItem item={item} />}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => `${item.id}`}
      horizontal
      contentContainerStyle={{
        paddingRight: sizes._screen_width * 0.05,
        height: sizes._screen_height * 0.3,
      }}
      scrollEventThrottle={16}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  img: {
    height: sizes._screen_height * 0.12,
    width: sizes._screen_width * 0.44,
    borderRadius: 20,
    position: 'absolute',
  },
  view: {
    marginTop: sizes._screen_height * 0.01,
    width: sizes._screen_width * 0.44,
    marginLeft: sizes._screen_width * 0.05,
  },
  txt: {
    color: colors.BLACK,
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.045,
    marginTop: 5,
  },
  view1: {
    ...stylescustom.view,
    marginTop: 8,
  },
  txt1: {
    color: colors.GRAY,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
    marginLeft: 5,
  },
  view2: {
    ...stylescustom.view,
    marginTop: sizes._screen_height * 0.01,
  },
  txt2: {
    ...stylescustom.txt,
    color: colors.GREEN,
  },
  txt3: {
    ...stylescustom.txt,
    color: colors.GRAY,
    fontSize: sizes._screen_width * 0.04,
    textDecorationLine: 'line-through',
  },
  txt4: {
    color: colors.RED,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
  },
  view3: {
    backgroundColor: colors.WHITE,
    width: sizes._screen_width * 0.12,
    top: sizes._screen_height * 0.01,
    left: sizes._screen_width * 0.03,
    alignItems: 'center',
    borderRadius: (sizes._screen_height * 0.01) / 1.2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txt5: {
    color: colors.BLACK,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
    marginLeft: 5,
  },
  view5: {
    backgroundColor: '#f8bebe',
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 3,
    paddingTop: 3,
    borderRadius: 30,
    width: sizes._screen_width * 0.21,
    marginTop: 5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
