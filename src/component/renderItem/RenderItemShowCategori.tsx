import {
  Image,
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
export default function RenderItemShowCategori({item, index}: any) {
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
      {item?.courses?.length > 1 ? (
        <>
          <Pressable style={styles.view1} onPress={showItem}>
            <View style={stylescustom.view}>
              <View style={stylescustom.view1}>
                <View style={styles.view}>
                  <Image source={item.img} style={styles.img} />
                </View>
                <View style={styles.view2}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.txt}>
                    {item?.courses?.length} Courses
                  </Text>
                </View>
              </View>
              <Icon
                name={show ? 'down' : 'right'}
                size={sizes._screen_width * 0.06}
                color={colors.GRAY}
              />
            </View>
            {show ? (
              <>
                {item?.courses?.map((i: any, index: number) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                    key={index}>
                    <View
                      style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: sizes._screen_width * 0.1,
                        marginLeft: 5,
                      }}>
                      <View style={styles.hr} />
                      <View style={[styles.route]} />
                    </View>
                    <View style={{marginLeft: 16}}>
                      <Text style={styles.title}>{i.name}</Text>
                      <Text style={styles.txt}>
                        {i?.courses?.length} Courses
                      </Text>
                    </View>
                  </View>
                ))}
              </>
            ) : null}
          </Pressable>
        </>
      ) : (
        <View style={styles.view1}>
          <View style={stylescustom.view1}>
            <View style={styles.view}>
              <Image source={item.img} style={styles.img} />
            </View>
            <View style={styles.view2}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.txt}>{item?.courses?.length} Courses</Text>
            </View>
          </View>
        </View>
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
    backgroundColor: 'white',
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
  route: {
    backgroundColor: colors.BLACK,
    height: sizes._screen_width * 0.022,
    width: sizes._screen_width * 0.022,
    borderRadius: 60,
  },
  hr: {
    width: 2,
    flex: 1,
    paddingBottom: sizes._screen_height * 0.06,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: colors.GRAY,
    borderDashOffset: 4,
  },
});
