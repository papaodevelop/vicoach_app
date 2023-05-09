import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen from '../../component/header/HeaderScreen';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import fonts from '../../res/fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../res/colors';
import {FlatList} from 'react-native';
import RenderComment from '../../component/renderItem/RenderComment';

export default function BlogPost({navigation, route}: any) {
  const {item} = route.params;
  const ListFood = () => {
    return (
      <>
        <View style={styles.view}>
          <Text style={styles.txt}>{item.title}</Text>
          <View style={styles.view1}>
            <Icon
              name="calendar"
              color={colors.GRAY}
              size={sizes._screen_width * 0.04}
            />
            <Text style={styles.txt1}>{item.time}</Text>
          </View>
          <Image source={{uri: item.img}} style={styles.img} />
          <View style={styles.view2}>
            <Image source={item.avt} style={styles.img1} />
            <View style={{marginLeft: 8}}>
              <Text style={stylescustom.txt}>{item.poster}</Text>
              <Text style={stylescustom.txt1}>Tác giả</Text>
            </View>
          </View>
          <Text style={styles.txt2}>{item.conten}</Text>
          {item.comment.length > 0 && (
            <>
              <Text style={{...styles.txt, marginTop: 15}}>Comments</Text>
              <FlatList
                data={item.comment}
                renderItem={({item}: any) => <RenderComment item={item} />}
                scrollEnabled={false}
                style={{marginTop: 20}}
              />
            </>
          )}
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderScreen title="Bài Viết" navigation={navigation} />
      <FlatList
        data={[]}
        renderItem={null}
        ListFooterComponent={() => <ListFood />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  view: {
    width: sizes._csreen_width * 0.95,
    marginTop: 20,
  },
  txt: {
    ...stylescustom.txt,
    fontSize: sizes._screen_width * 0.045,
    fontFamily: fonts.textBold,
  },
  view1: {
    ...stylescustom.view1,
    marginTop: 10,
  },
  txt1: {
    ...stylescustom.txt1,
    marginLeft: 10,
  },
  view2: {
    ...stylescustom.view1,
    marginTop: 15,
  },
  img: {
    width: sizes._csreen_width * 0.95,
    height: sizes._screen_width * 0.6,
    marginTop: 20,
    borderRadius: 15,
  },
  img1: {
    height: sizes._screen_width * 0.12,
    width: sizes._screen_width * 0.12,
    borderRadius: (sizes._screen_width * 0.12) / 2,
  },
  txt2: {
    ...stylescustom.txt,
    marginTop: 10,
  },
  view3: {
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    padding: 10,
  },
});
