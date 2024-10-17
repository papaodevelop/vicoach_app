import {
  FlatList,
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import Icon from 'react-native-vector-icons/AntDesign';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import RenderChidlren from './RenderChidlren';
import {NavigationProp} from '@react-navigation/native';

interface Props {
  item: CourseCategoryType;
  index: number;
  navigation: NavigationProp<Record<string, any>>;
}
export default function RenderItemShowCategori(props: Props) {
  const textTitle = props.item?.name?.vi || props.item?.name?.en;
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const showItem = () => {
    setShow(!show);
  };

  useEffect(() => {
    const toggle = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };
    toggle();
  }, [show, show1]);
  let headerStyle = Object.assign({}, styles.view1);
  if (!show && !show1) {
    headerStyle;
  }

  return (
    <>
      {props.item?.children?.length >= 1 ? (
        <>
          <Pressable
            style={styles.view1}
            onPress={() => {
              props.navigation.navigate('DetailCategories', {
                title: textTitle,
                item: props.item?.id,
              });
            }}>
            <View style={stylescustom.view}>
              <View style={stylescustom.view1}>
                <View style={styles.view2}>
                  <Text style={styles.title}>{textTitle}</Text>
                </View>
              </View>
              <Icon
                onPress={showItem}
                name={show ? 'down' : 'right'}
                size={sizes._screen_width * 0.06}
                color={colors.WHITE}
              />
            </View>
            {show ? (
              <FlatList
                data={props.item.children}
                scrollEnabled={false}
                renderItem={({item, index}) => (
                  <RenderChidlren
                    i={item}
                    index={index}
                    show={show1}
                    setShow={setShow1}
                    navigation={props.navigation}
                  />
                )}
              />
            ) : null}
          </Pressable>
        </>
      ) : (
        <Pressable
          style={styles.view1}
          onPress={() => {
            props.navigation.navigate('DetailCategories', {
              title: textTitle,
              item: props.item?.id,
            });
          }}>
          <View style={stylescustom.view1}>
            <View style={styles.view2}>
              <Text style={styles.title}>{textTitle}</Text>
            </View>
          </View>
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    ...stylescustom.txt,
    fontSize: sizes._screen_width * 0.044,
    fontFamily: fonts.textBold,
  },
  txt: {...stylescustom.txt, color: colors.GRAY},
  view: {
    backgroundColor: '#dcdcdc',
    height: sizes._screen_width * 0.1,
    width: sizes._screen_width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (sizes._screen_width * 0.1) / 2,
    marginLeft: 8,
  },
  view1: {
    backgroundColor: 'gray',
    marginBottom: 3,
    padding: 10,
    borderRadius: 10,
    width: sizes._screen_width * 0.9,
  },
  img: {
    height: sizes._screen_width * 0.06,
    width: sizes._screen_width * 0.06,
    tintColor: colors.BLACK,
  },
  view2: {marginLeft: 15},

  txt1: {
    height: sizes._screen_height * 0.04,
    width: sizes._screen_width * 0.5,
    justifyContent: 'center',
    marginLeft: 20,
  },
});
