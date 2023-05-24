import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';
import {NavigationProp} from '@react-navigation/native';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import images from '../../res/images';
import sizes from '../../res/sizes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Tabs} from 'react-native-collapsible-tab-view';
import Content from '../courseDetail/Content';
import Comment from '../courseDetail/Comment';
import About from './profileIntructors/About';

export default function ProfileIntructors({
  navigation,
  route,
}: {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}) {
  let item = route.params.item as CourseCategoryType;
  const Header = () => (
    <View style={styles.view}>
      <Image
        source={item?.image?.url ? {uri: item?.image?.url} : images.noimage}
        style={styles.img}
      />
      {/*//@ts-ignore */}
      <Text style={styles.txt}>{item.name}</Text>
      <View style={styles.view1}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.view2}>
            <Ionicons
              name="videocam"
              color={'#4f7e1d'}
              size={sizes._screen_width * 0.08}
            />
          </View>
          <Text style={stylescustom.txtBold}>2</Text>

          <Text style={stylescustom.txt1}>Courses</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.view2}>
            <FontAwesome5
              name="user-alt"
              color={'#4f7e1d'}
              size={sizes._screen_width * 0.08}
            />
          </View>
          <Text style={stylescustom.txtBold}>2</Text>

          <Text style={stylescustom.txt1}>Student</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.view2}>
            <FontAwesome5
              name="users"
              color={'#4f7e1d'}
              size={sizes._screen_width * 0.08}
            />
          </View>
          <Text style={stylescustom.txtBold}>2</Text>

          <Text style={stylescustom.txt1}>Followers</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={stylescustom.container}>
      <View style={{zIndex: 10, backgroundColor: 'white'}}>
        <HeaderScreen navigation={navigation} title="Hồ Sơ" />
      </View>
      <Tabs.Container
        headerContainerStyle={{
          zIndex: 1,
        }}
        renderHeader={() => <Header />}>
        <Tabs.Tab name="Thông tin">
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <About navigation={navigation} item={item} />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Khoá học">
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <Content navigation={navigation} />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Danh hiệu">
          <Tabs.ScrollView>
            <Comment />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    marginTop: 20,
  },
  img: {
    height: sizes._screen_width * 0.2,
    width: sizes._screen_width * 0.2,
    borderRadius: (sizes._screen_width * 0.2) / 2,
  },
  txt: {
    ...stylescustom.txtBold,
    marginTop: 10,
  },
  view1: {
    marginTop: 10,
    ...stylescustom.view,
    width: sizes._screen_width * 0.7,
  },
  view2: {
    backgroundColor: '#9cb581',
    height: sizes._screen_width * 0.15,
    width: sizes._screen_width * 0.15,
    borderRadius: (sizes._screen_width * 0.15) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
