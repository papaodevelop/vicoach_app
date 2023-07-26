import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import HeaderScreen from '../../component/header/HeaderScreen';
import RenderViedeo from './RenderViedeo';
import {NavigationProp} from '@react-navigation/native';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
import {useGetCouseListQuery} from '../../redux/state';
import Loading from '../../component/loading/Loading';
import stylescustom from '../../res/stylescustom';
import {Image} from 'react-native';
import images from '../../res/images';
export default function WatchCoses({
  navigation,
  item,
}: {
  navigation: NavigationProp<Record<string, any>>;
  item: {
    url: string;
    title: string;
    idCourse: number;
    id: number;
  };
}) {
  interface List {
    name: string;
    lesson_list: LeasionList[];
    id: number;
  }

  const [url, setUrl] = useState(item?.url);
  const flatListRef = useRef<FlatList>(null);
  const [select, setSelect] = useState(item?.id);
  const [title, setTitle] = useState(item?.title);
  const {data, isLoading} = useGetCouseListQuery(`${item?.idCourse}`);

  const RendeItem = ({item}: {item: List}) => {
    return (
      <View
        style={{
          width: sizes._screen_width * 0.95,
        }}>
        <Text style={styles.txt1}>{item?.name}</Text>
        {item?.lesson_list?.map((items, index) => {
          return (
            <Pressable
              onPress={() => {
                setSelect(items?.id);
                setTitle(items?.name);
                setUrl(items?.material?.active_file?.videoEmbebUrl);
              }}
              key={index}
              style={[
                styles.view,
                {
                  backgroundColor:
                    select == items?.id ? '#dfdfdf' : 'transparent',
                },
              ]}>
              <View style={styles.view1}>
                <Image source={images.playvideo} style={styles.img} />
              </View>
              <Text style={styles.txt2}>{items?.name}</Text>
            </Pressable>
          );
        })}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderScreen title="Video khoá học" navigation={navigation} />
      <Text style={styles.title1}>{data?.title?.vi}</Text>
      <RenderViedeo url={url} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.txt}>Video liên quan</Text>
      <View style={{marginBottom: 20}}>
        <FlatList
          ref={flatListRef}
          data={data?.chapter_list}
          renderItem={RendeItem}
          contentContainerStyle={{alignItems: 'center'}}
          keyExtractor={item => `cc${item?.id}`}
          style={{marginTop: 10}}
          initialNumToRender={2}
        />
      </View>
      {isLoading && <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: sizes._screen_width * 0.05,
    fontFamily: fonts.textBold,
    marginTop: 10,
    marginLeft: 20,
  },
  title1: {
    marginTop: 20,
    fontSize: sizes._screen_width * 0.05,
    fontFamily: fonts.textBold,
    marginLeft: 10,
  },
  txt: {
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.045,
    marginTop: 20,
    marginLeft: 10,
  },

  txt1: {
    fontSize: sizes._screen_width * 0.04,
    fontFamily: fonts.textBold,
    marginTop: 20,
  },
  view: {
    width: sizes._screen_width * 0.95,
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    height: 90,
    padding: 10,
    alignItems: 'center',
  },
  view1: {
    height: 67,
    width: 120,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txt2: {
    marginLeft: 15,
    width: sizes._screen_width * 0.9 - 120,
    ...stylescustom.txt,
  },
  img: {width: 50, height: 50},
});
