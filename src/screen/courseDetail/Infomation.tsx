import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import RenderDetail from './RenderDetail';
import {CourseDetail} from '../../../types/CourseDetail';
import images from '../../res/images';
import {HScrollView} from 'react-native-head-tab-view';
import HTML from 'react-native-render-html';

export default function Infomation({
  datas,
  index,
}: {
  datas: CourseDetail | undefined;
  index: number;
}) {
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
  const bothe = (chuoi: string) => {
    return chuoi.replace(/<[^>]*><\/[^>]*>/g, '');
  };
  return (
    <HScrollView index={index} showsVerticalScrollIndicator={false}>
      <View style={[styles.container]}>
        {datas?.assistant_instructor[0] && (
          <>
            <Text style={styles.txt2}>Trợ giảng:</Text>
            {datas?.assistant_instructor.map((i, index) => (
              <View style={stylescustom.view1} key={i?.id}>
                <Image
                  source={i?.image?.url ? {uri: i?.image?.url} : images.noimage}
                  style={styles.img}
                />
                <View
                  style={{marginLeft: 15, width: sizes._screen_width * 0.75}}>
                  <Text style={styles.txt2}>{i?.name}</Text>
                  <HTML
                    source={{html: i?.description}}
                    contentWidth={sizes.width * 0.55}
                  />
                </View>
              </View>
            ))}
          </>
        )}
        {bothe(datas?.description?.vi || '') && (
          <View style={{marginTop: 20}}>
            <Text style={[stylescustom.txt, {color: colors.RED}]}>
              Miêu tả:{' '}
            </Text>
            <HTML
              source={{html: datas?.description?.vi || ''}}
              contentWidth={sizes.width}
            />
          </View>
        )}
        {bothe(datas?.requirements?.vi || '') && (
          <View style={{marginTop: 20}}>
            <Text style={[stylescustom.txt, {color: colors.RED}]}>
              Yêu cầu:
            </Text>
            <HTML
              source={{html: datas?.requirements?.vi || ''}}
              contentWidth={sizes.width}
            />
          </View>
        )}
        {datas?.achieved.length !== 0 && (
          <View style={{marginTop: 20, width: sizes.width * 0.95}}>
            <Text style={stylescustom.txt}>
              <Text style={{color: colors.BLACK}}>
                <Text style={{color: colors.RED}}>Đạt được :</Text>{' '}
                {datas?.achieved}
              </Text>
            </Text>
          </View>
        )}
        {bothe(datas?.outcomes.vi || '') && (
          <View style={{marginTop: 20}}>
            <Text style={[stylescustom.txt, {color: colors.RED}]}>
              Kết quả :
            </Text>
            <HTML
              source={{html: datas?.outcomes?.vi || ''}}
              contentWidth={sizes.width}
            />
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
      </View>
    </HScrollView>
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
