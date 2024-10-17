import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NewestCourses from './NewestCourses/NewestCourses';
import {NavigationProp} from '@react-navigation/native';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import {useGetCourseQuery} from '../../redux/state';
interface Props {
  navigation: NavigationProp<Record<string, any>>;
  title: string;
  api: string;
}
const DiscountCouses = (props: Props) => {
  const {data} = useGetCourseQuery(`${props?.api}`);
  const datas = data?.items?.filter((item: any) => item.price <= 0) as
    | string[]
    | any;

  return (
    <>
      {datas?.length !== 0 && (
        <>
          <View style={styles.view}>
            <Text style={styles.title1}>{props?.title}</Text>
            <Text
              style={styles.txt}
              onPress={() =>
                props.navigation.navigate('ViewAll', {
                  title: props?.title,
                  item: datas,
                })
              }>
              Xem thêm
            </Text>
          </View>
          <NewestCourses
            data={data?.items.slice(0, 5)}
            navigation={props.navigation}
          />
        </>
      )}
    </>
  );
};

export default DiscountCouses;

const styles = StyleSheet.create({
  title: {
    color: colors.WHITE,
    fontFamily: fonts.textBold,
    fontSize: sizes._csreen_width * 0.06,
    width: sizes._csreen_width * 0.9,
    alignSelf: 'center',
    marginTop: 15,
  },
  title1: {
    color: colors.WHITE,
    fontFamily: fonts.textBold,
    fontSize: sizes._csreen_width * 0.06,
  },
  view: {
    ...stylescustom.view,
    width: sizes._csreen_width * 0.9,
    alignSelf: 'center',
  },
  txt: {
    color: colors.GREEN,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
  },
});
