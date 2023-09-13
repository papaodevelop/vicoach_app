import {
  FlatList,
  Pressable,
  ScrollView,
  SectionList,
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
    indexs: number;
    index: number;
  };
}) {
  const [url, setUrl] = useState(item?.url);
  const flatListRef = useRef<SectionList>(null);
  const [select, setSelect] = useState(item?.id);
  const [title, setTitle] = useState(item?.title);
  const {data, isLoading} = useGetCouseListQuery(`${item?.idCourse}`);
  const du_lieu_moi: any = data?.chapter_list.map(chapter => ({
    ...chapter,
    data: [...chapter?.lesson_list],
  }));

  useEffect(() => {
    setTimeout(() => {
      flatListRef?.current?.scrollToLocation({
        sectionIndex: item?.indexs,
        itemIndex: item?.index,
        viewPosition: 0,
        animated: true,
      });
    }, 1000);
  }, []);
  du_lieu_moi.data?.forEach((chapter: any) => delete chapter?.lesson_list);
  const renderSectionHeader = ({section: {name}}: any) => (
    <View style={styles.view2}>
      <Text style={styles.txt1}>{name}</Text>
    </View>
  );

  const RendeItem = ({item}: {item: any}) => {
    return (
      <View
        style={{
          width: sizes._screen_width * 0.95,
        }}>
        <Pressable
          onPress={() => {
            setSelect(item?.id);
            setTitle(item?.name);
            setUrl(item?.material?.active_file?.videoEmbebUrl);
          }}
          style={[
            styles.view,
            {
              backgroundColor: select == item?.id ? '#dfdfdf' : 'transparent',
            },
          ]}>
          <View style={styles.view1}>
            <Image source={images.playvideo} style={styles.img} />
          </View>
          <Text style={styles.txt2}>{item?.name}</Text>
        </Pressable>
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
        <SectionList
          ref={flatListRef}
          sections={du_lieu_moi}
          renderItem={RendeItem}
          contentContainerStyle={{alignItems: 'center'}}
          keyExtractor={(item, index) => `cc${item?.id + index}`}
          style={{marginTop: 10}}
          renderSectionHeader={renderSectionHeader}
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
    fontSize: sizes._screen_width * 0.045,
    fontFamily: fonts.textBold,
    marginTop: 10,
    marginLeft: 20,
  },
  title1: {
    marginTop: 10,
    fontSize: sizes._screen_width * 0.045,
    fontFamily: fonts.textBold,
    marginLeft: 10,
  },
  txt: {
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.04,
    marginTop: 5,
    marginLeft: 10,
  },

  txt1: {
    fontSize: sizes._screen_width * 0.04,
    fontFamily: fonts.textBold,
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
  view2: {backgroundColor: 'white', padding: 10, borderRadius: 10},
});
