import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderHome from '../../component/header/HeaderHome';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import FeaturedCourses from './featuredCourses/FeaturedCourses';
import fonts from '../../res/fonts';
import NewestCourses from './newestCourses/NewestCourses';
import stylescustom from '../../res/stylescustom';
import {khoahocmoi} from '../../datafeck/feck/Data';
import {NavigationProp} from '@react-navigation/native';
import {useGetCategoryQuery} from '../../redux/api/courseCategory.api';
import Loading from '../../component/loading/Loading';
import SearchAll from '../search/SearchAll';
interface Props {
  navigation: NavigationProp<Record<string, any>>;
}
export default function Home(props: Props) {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true);
  const {data, isLoading} = useGetCategoryQuery('');

  const ListFooter = () => {
    return (
      <>
        <Text style={styles.title}>Khoá học nổi bật</Text>
        <FeaturedCourses
          navigation={props.navigation}
          data={data?.featured_courses}
        />
        <View style={styles.view}>
          <Text style={styles.title1}>Khoá học học mới nhất</Text>
          <Text
            style={styles.txt}
            onPress={() =>
              props.navigation.navigate('ViewAll', {
                title: 'Khoá học mới nhất',
                item: data?.newest_courses,
              })
            }>
            Xem thêm
          </Text>
        </View>
        <NewestCourses
          data={data?.newest_courses}
          navigation={props.navigation}
        />
        <View style={styles.view}>
          <Text style={styles.title1}>Bán chạy nhất</Text>
          <Text
            style={styles.txt}
            onPress={() =>
              props.navigation.navigate('ViewAll', {
                title: 'Bán chạy nhất',
                item: khoahocmoi,
              })
            }>
            Xem thêm
          </Text>
        </View>
        <NewestCourses data={khoahocmoi} navigation={props.navigation} />
        <View style={styles.view}>
          <Text style={styles.title1}>Khoá học giảm giá</Text>
          <Text
            style={styles.txt}
            onPress={() =>
              props.navigation.navigate('ViewAll', {
                title: 'Khoá học giảm giá',
                item: khoahocmoi,
              })
            }>
            Xem thêm
          </Text>
        </View>
        <NewestCourses data={khoahocmoi} navigation={props.navigation} />
        <View style={styles.view}>
          <Text style={styles.title1}>Khoá học miễn phí</Text>
          <Text
            style={styles.txt}
            onPress={() =>
              props.navigation.navigate('ViewAll', {
                title: 'Khoá học miễn phí',
                item: khoahocmoi,
              })
            }>
            Xem thêm
          </Text>
        </View>
        <NewestCourses data={khoahocmoi} navigation={props.navigation} />
      </>
    );
  };
  const onScroll = (val: any) => {
    let a = val.nativeEvent.contentOffset.y;
    if (a > sizes._screen_height * 0.2) {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  };
  return (
    <View style={styles.container}>
      <HeaderHome
        navigation={props.navigation}
        value={search}
        setValue={setSearch}
        show={showSearch}
      />
      {search ? (
        <View>
          <SearchAll navigation={props.navigation} search={search} />
        </View>
      ) : (
        <FlatList
          data={[]}
          onScroll={(val: any) => onScroll(val)}
          renderItem={null}
          ListFooterComponent={() => <ListFooter />}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          ListFooterComponentStyle={{
            paddingBottom: sizes._screen_height * 0.15,
          }}
        />
      )}

      {isLoading && <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.BLACK,
    fontFamily: fonts.textBold,
    fontSize: sizes._csreen_width * 0.06,
    width: sizes._csreen_width * 0.9,
    alignSelf: 'center',
    marginTop: 15,
  },
  title1: {
    color: colors.BLACK,
    fontFamily: fonts.textBold,
    fontSize: sizes._csreen_width * 0.06,
  },
  view: {
    ...stylescustom.view,
    width: sizes._csreen_width * 0.9,
    alignSelf: 'center',
  },
  txt: {
    color: colors.GRAY,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
  },
});
