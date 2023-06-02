import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import stylescustom from '../../res/stylescustom';
import RenderChildrenCourse from './RenderChildrenCourse';
import {FlatList} from 'react-native-gesture-handler';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
import colors from '../../res/colors';
import Icon from 'react-native-vector-icons/AntDesign';

export default function RenderChidlren({
  i,
  index,
  show,
  setShow,
  navigation,
}: any) {
  const [show1, setShow1] = useState(false);
  const showItem1 = () => {
    setShow1(!show1);
  };
  return (
    <>
      <Pressable
        style={{...stylescustom.view1, marginTop: 10}}
        key={index + '2'}
        onPress={() => {
          setShow(!show);
          navigation.navigate('DetailCategories', {
            title: i?.name?.vi || i?.name?.en,
            item: i?.id,
          });
        }}>
        <View style={styles.view3}>
          <View style={styles.hr} />
          <View style={[styles.route]} />
        </View>
        <View
          style={{
            width: sizes._screen_width * 0.74,
            ...stylescustom.view,
          }}>
          <View style={{marginLeft: 16}}>
            <Text style={styles.title}>{i?.name?.vi || i?.name?.en}</Text>
            <Text style={stylescustom.txt1}>
              {i?.children?.length ? i?.children?.length : 0} Chilldren
            </Text>
          </View>
          {i?.children?.length && (
            <Icon
              onPress={showItem1}
              name={show1 ? 'down' : 'right'}
              size={sizes._screen_width * 0.06}
              color={colors.GRAY}
            />
          )}
        </View>
      </Pressable>
      {show1 && i?.children?.length > 0 ? (
        <>
          <FlatList
            data={i?.children}
            scrollEnabled={false}
            renderItem={({item}) => (
              <RenderChildrenCourse items={item} navigation={navigation} />
            )}
          />
        </>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    ...stylescustom.txt,
    fontSize: sizes._screen_width * 0.044,
    fontFamily: fonts.textBold,
  },
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
  view3: {
    flexDirection: 'column',
    alignItems: 'center',
    width: sizes._screen_width * 0.1,
    marginLeft: 5,
  },
});
