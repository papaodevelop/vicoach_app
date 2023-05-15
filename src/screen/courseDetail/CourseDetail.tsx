import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';
import {NavigationProp} from '@react-navigation/native';
import sizes from '../../res/sizes';
import Star from '../../component/Star';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/AntDesign';
import colors from '../../res/colors';
import {Tabs} from 'react-native-collapsible-tab-view';
import Infomation from './Infomation';
import Content from './Content';
import RBSheet from 'react-native-raw-bottom-sheet';
import Comment from './Comment';
interface Props {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}
const Header = ({item, onShow}: any) => {
  return (
    <>
      <Image source={item.image} style={styles.img} resizeMode="cover" />
      <View style={{...stylescustom.view, marginTop: 15}}>
        <View style={stylescustom.view1}>
          <Image source={item.avt} style={styles.avt} />
          <View style={{marginLeft: 8}}>
            <Text style={stylescustom.txt1}>{item.lecturers}</Text>
            <Star star={item.start} width={sizes._screen_width * 0.2} />
          </View>
        </View>
        <Pressable style={styles.view2} onPress={onShow}>
          <Icon
            name="dots-three-horizontal"
            size={sizes._screen_width * 0.07}
            color={colors.GRAY}
          />
        </Pressable>
      </View>
    </>
  );
};

const CourseDetail = (props: Props) => {
  const item = props.route.params.item;
  const refRBSheet = useRef<any>();
  return (
    <View style={stylescustom.container}>
      <View style={{zIndex: 10, backgroundColor: 'white', paddingBottom: 5}}>
        <HeaderScreen navigation={props.navigation} title="Chi tiết khoá học" />
        <View style={styles.view}>
          <Text style={styles.txt}>{item.name}</Text>
          <View style={styles.view1}>
            <Text style={stylescustom.txt1}>kiêndasdasd</Text>
            <Star star={item.start} width={sizes._screen_width * 0.2} />
          </View>
        </View>
      </View>

      <Tabs.Container
        headerContainerStyle={{
          zIndex: 1,
        }}
        renderHeader={() => (
          <Header item={item} onShow={() => refRBSheet.current.open()} />
        )}>
        <Tabs.Tab name="Thông tin">
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <Infomation />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Nội dung">
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <Content />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Đánh giá">
          <Tabs.ScrollView>
            <Comment />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>

      {/* @ts-ignore */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        dragFromTopOnly={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={{marginLeft: 15}}>
          <Text style={styles.txt1}>Tuỳ chọn</Text>
          <View style={styles.view3}>
            <Icons
              name="hearto"
              color={colors.BLACK}
              size={sizes._screen_width * 0.06}
            />
            <Text style={styles.txt2}>Thêm vào mục yêu thích</Text>
          </View>
          <View style={styles.view3}>
            <Icons
              name="shoppingcart"
              color={colors.BLACK}
              size={sizes._screen_width * 0.06}
            />
            <Text style={styles.txt2}>Thêm vào giỏ hàng</Text>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    width: '100%',
    backgroundColor: '#2196f3',
  },
  txt: {
    ...stylescustom.txt3,
    fontSize: sizes._screen_width * 0.05,
    marginTop: sizes._screen_height * 0.03,
  },
  view: {
    width: sizes._screen_width * 0.95,
    alignSelf: 'center',
  },
  img: {
    width: sizes._screen_width * 0.8,
    height: sizes._screen_width * 0.8,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 15,
  },
  avt: {
    width: sizes._screen_width * 0.12,
    height: sizes._screen_width * 0.12,
    borderRadius: (sizes._screen_width * 0.12) / 2,
  },
  view1: {
    marginRight: sizes._screen_width * 0.05,
    ...stylescustom.view,
    marginTop: 10,
  },
  view2: {
    padding: sizes._screen_width * 0.03,
    backgroundColor: colors.WHITE,
    borderRadius: 15,
  },
  txt1: {
    ...stylescustom.txt3,
    fontSize: sizes._screen_width * 0.05,
  },
  txt2: {
    ...stylescustom.txt,
    marginLeft: 5,
  },
  view3: {
    ...stylescustom.view1,
    marginTop: 15,
  },
});

export default CourseDetail;
