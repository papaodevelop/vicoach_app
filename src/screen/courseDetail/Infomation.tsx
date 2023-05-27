import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';

import stylescustom from '../../res/stylescustom';
import RenderDetail from './RenderDetail';
import DataQuestion from '../../datafeck/feck/DataQuestion';
import {CourseDetail} from '../../../types/CourseDetail';
import images from '../../res/images';

export default function Infomation({datas}: {datas: CourseDetail | undefined}) {
  const data = [
    {
      id: 1,
      name: 'Mức độ',
      title: datas?.level?.title,
      icon: 'level-up',
    },
    {
      id: 2,
      name: 'Số chương',
      title: datas?.chapter_list.length,
      icon: 'group',
    },
    {
      id: 3,
      name: 'Ngày bắt đầu',
      title: datas?.created_at,
      icon: 'calendar',
    },
    {
      id: 4,
      name: 'Thời lượng',
      title: datas?.duration,
      icon: 'clock-o',
    },
    {
      id: 5,
      name: 'Loại',
      title: datas?.type,
      icon: 'video-camera',
    },
    {
      id: 6,
      name: 'Trạng thái',
      title: datas?.status,
      icon: 'bullseye',
    },
  ];
  const RenderItem = ({item}: any) => {
    const [show, setShow] = useState(false);
    const showItem = () => {
      setShow(!show);
    };
    useEffect(() => {
      const toggle = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      };
      toggle();
    }, [show]);
    let headerStyle = Object.assign({}, styles.view1);
    if (!show) {
      headerStyle;
    }
    return (
      <>
        <Pressable style={styles.view3} onPress={showItem}>
          <View style={stylescustom.view}>
            <View style={stylescustom.view1}>
              <View style={styles.view4}>
                <Icons
                  name="question"
                  color={colors.WHITE}
                  size={sizes._screen_width * 0.08}
                />
              </View>
              <Text style={styles.txt}>{item.question}</Text>
            </View>
            <Icon
              name="chevron-down"
              color={colors.GRAY}
              size={sizes._screen_width * 0.08}
            />
          </View>
          {show && (
            <View>
              <Text style={styles.txt1}>{item.reply}</Text>
            </View>
          )}
        </Pressable>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view}>
          <Icon
            name="certificate"
            color={colors.WHITE}
            size={sizes._screen_width * 0.07}
          />
        </View>
        <View style={styles.view2}>
          <Text style={stylescustom.txt3}>Certificate</Text>
          <Text style={stylescustom.txt1}>Included</Text>
        </View>
      </View>
      {datas?.assistant_instructor[0] && (
        <>
          <Text style={styles.txt2}>Trợ giảng</Text>
          {datas?.assistant_instructor.map((i, index) => (
            <View style={stylescustom.view1} key={i?.id}>
              <Image
                source={{uri: i?.image?.url}}
                defaultSource={images.noimage}
                style={styles.img}
              />
              <View style={{marginLeft: 15}}>
                <Text style={styles.txt2}>{i?.name}</Text>
                <Text>{i?.description}</Text>
              </View>
            </View>
          ))}
        </>
      )}

      {datas?.meta_description && (
        <View style={{marginTop: 20}}>
          <Text style={stylescustom.txt}>
            <Text style={{color: colors.RED}}>
              Mô tả: {datas?.meta_description}
            </Text>
          </Text>
        </View>
      )}

      <View>
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({item, index}) => (
            <RenderDetail item={item} index={index} />
          )}
          numColumns={2}
          columnWrapperStyle={{
            width: sizes._csreen_width * 0.9,
            alignSelf: 'center',
            justifyContent: 'space-around',
          }}
          keyExtractor={item => `8${item.id}`}
        />
      </View>
      <View style={styles.view5}>
        <FlatList
          data={DataQuestion}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
          keyExtractor={item => `7${item.id}`}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.ORANGE,
    width: sizes._screen_width * 0.14,
    height: sizes._screen_width * 0.14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    height: sizes._screen_width * 0.18,
    width: sizes._screen_width * 0.7,
    backgroundColor: colors.WHITE,
    marginTop: 20,
    borderRadius: 15,
    paddingLeft: sizes._screen_width * 0.03,
    ...stylescustom.view1,
  },
  container: {
    width: sizes._screen_width * 0.9,
    alignSelf: 'center',
    paddingBottom: 50,
  },
  view2: {
    height: sizes._screen_width * 0.14,
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  view3: {
    backgroundColor: colors.WHITE,
    width: sizes._screen_width * 0.9,
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  view4: {
    width: sizes._screen_width * 0.12,
    height: sizes._screen_width * 0.12,
    backgroundColor: colors.ORANGE,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    width: sizes._screen_width * 0.6,

    marginLeft: 10,
  },
  view5: {
    marginTop: 15,
  },
  txt1: {
    marginTop: 10,
  },
  txt2: {
    ...stylescustom.txtBold,
    marginTop: 10,
  },
  img: {height: 40, width: 40, borderRadius: 40 / 2},
});
