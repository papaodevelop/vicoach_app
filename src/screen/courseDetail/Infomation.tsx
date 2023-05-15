import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';

import stylescustom from '../../res/stylescustom';
import RenderDetail from './RenderDetail';
import DataQuestion from '../../datafeck/feck/DataQuestion';

export default function Infomation() {
  const data = [
    {
      id: 1,
      name: 'Sinh viên',
      title: 4,
      icon: 'user',
    },
    {
      id: 2,
      name: 'Chương',
      title: 0,
      icon: 'group',
    },
    {
      id: 3,
      name: 'Ngày bắt đầu',
      title: '2023-11-05',
      icon: 'calendar',
    },
    {
      id: 4,
      name: 'Thời lượng',
      title: '2:30',
      icon: 'clock-o',
    },
    {
      id: 5,
      name: 'Loại',
      title: 'Live class',
      icon: 'video-camera',
    },
    {
      id: 6,
      name: 'Trạng thái',
      title: 'In Progress',
      icon: 'bullseye',
    },
  ];

  const RenderItem = ({item, index}: any) => {
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
      <View style={{marginTop: 20}}>
        <Text style={stylescustom.txt}>
          <Text style={{color: colors.RED}}>Note: </Text>
          1.The company is now leading the fresh beverage market in England,
          holding nearly 50% market share.{'\n'} 2.To promote the brand image,
          employees in the company are required to attach the company logo to
          all letters and emails sent to customers.{'\n'} 3.The company provides
          a 5-year warranty service for their products.
        </Text>
      </View>
      <View>
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({item, index}) => (
            <RenderDetail item={item} index={index} />
          )}
          numColumns={2}
          contentContainerStyle={{
            width: sizes._csreen_width * 0.9,
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={styles.view5}>
        <FlatList
          data={DataQuestion}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
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
});
