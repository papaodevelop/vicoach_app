import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import stylescustom from '../../res/stylescustom';
import Icon from 'react-native-vector-icons/AntDesign';
import {Time, convertByteToMB} from '../../res/convert';
import RNFetchBlob from 'rn-fetch-blob';
import {BASE_URL} from '../../Api/BaseURL';
import {NavigationProp} from '@react-navigation/native';
interface Props {
  item: DocumentType;
  index: number;
  idCourse: number;
  check: number;
  navigation: NavigationProp<Record<string, any>>;
}
export default function RenderContent(props: Props) {
  const [progress, setProgress] = useState<number | string>(0);
  const dowLoadFile = ({id, chapterId}: {id: number; chapterId: number}) => {
    const url = `${BASE_URL}course-list/streaming/${props.idCourse}/${chapterId}/${id}`;
    let dirs = RNFetchBlob.fs.dirs;
    const filePath = `${dirs.DocumentDir}`;
    var filename = props.item?.name;
    RNFetchBlob.config({
      fileCache: true,
      path: `${filePath}/${filename}`,
      IOSBackgroundTask: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        title: filename,
        description: props.item?.description,
        notification: true,
        path: `${filePath}/${filename}`,
      },
    })
      .fetch('GET', url)
      .progress(received => {
        setProgress(
          Math.floor(
            (received / props.item?.material?.active_file?.file_size) * 100,
          ) + '%',
        );
      })
      .then(res => {
        setProgress('Hoàn thành');
      })
      .catch(error => {});
  };

  return (
    <Pressable
      style={styles.view}
      key={`3${props.index}`}
      onPress={() => {
        props.item?.material?.type == 'VIDEO'
          ? props.navigation.navigate('PlayVideo', {
              url: props?.item?.material?.active_file?.videoEmbebUrl,
              title: props?.item?.name,
              idCourse: props.idCourse,
              id: props.item.id,
            })
          : dowLoadFile({id: props.item?.id, chapterId: props.check});
      }}>
      <View style={styles.view1}>
        {props.item?.material?.type == 'VIDEO' ? (
          <Icon
            name="play"
            color={colors.WHITE}
            size={sizes._csreen_width * 0.08}
          />
        ) : (
          <Icon
            name="clouddownload"
            color={colors.WHITE}
            size={sizes._csreen_width * 0.08}
          />
        )}
      </View>
      <View style={styles.view2}>
        <Text style={stylescustom.txt2}>{props.item.name}</Text>
        <Text style={styles.txt}>
          {props.item?.material?.type}{' '}
          {props.item?.material?.type == 'VIDEO'
            ? Time(props.item?.duration)
            : convertByteToMB(props.item?.material?.active_file?.file_size)}
        </Text>
        {progress ? (
          <Text style={styles.txt}>Tải xuống: {progress}</Text>
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  view: {
    height: sizes._screen_width * 0.2,
    width: sizes._screen_width * 0.7,
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    ...stylescustom.view1,
    padding: 10,
    marginLeft: sizes._screen_width * 0.05,
  },
  view1: {
    width: sizes._screen_width * 0.15,
    height: sizes._screen_width * 0.15,
    backgroundColor: colors.GREEN,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {marginLeft: 10},
  txt: {
    ...stylescustom.txt1,
    width: sizes._screen_width * 0.5,
  },
});
