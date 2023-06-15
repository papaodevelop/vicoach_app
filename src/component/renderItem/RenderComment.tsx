import {
  Alert,
  Button,
  FlatList,
  Image,
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import {DateTimes} from '../../res/convert';
import images from '../../res/images';
import colors from '../../res/colors';
import RenderChildrenComment from './RenderChildrenComment';
import {useDeleteCommentMutation} from '../../redux/state';
import Icon from 'react-native-vector-icons/FontAwesome';
import PopoverDeleteCMT from '../popover/PopoverDeleteCMT';

export default function RenderComment({
  item,
  focus,
  setID,
}: {
  item: Comment;
  focus: () => void;
  setID: ({}) => void;
}) {
  const touchable = useRef<any>();
  const [show, setShow] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [idCMT, setIDCMT] = useState<number>();

  const showItem = () => {
    setShow(!show);
  };
  useEffect(() => {
    const toggle = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };
    toggle();
  }, [show]);
  let headerStyle = Object.assign({}, styles.view);
  if (!show) {
    headerStyle;
  }
  const [Deletes] = useDeleteCommentMutation();
  const DeleteCMT = async () => {
    try {
      const aa = await Deletes({
        id: idCMT,
      }).unwrap();
    } catch (error) {
      Alert.alert('Không thể xoá bình luận');
    }
    setShowPopover(false);
  };
  return (
    <>
      <Pressable
        style={styles.view}
        ref={touchable}
        onLongPress={() => {
          setShowPopover(true);
          setIDCMT(item.id);
        }}>
        <View>
          <View style={stylescustom.view1}>
            <Image
              source={
                item?.author?.image?.url
                  ? {uri: item?.author?.image?.url}
                  : images.noimage
              }
              style={styles.img}
            />
            <View style={{marginLeft: 10}}>
              <Text style={stylescustom.txt}>{item?.author?.name}</Text>
            </View>
          </View>
          <Text style={styles.txt}>{item?.content}</Text>
          <View
            style={{...stylescustom.view, width: sizes._screen_width * 0.9}}>
            <Text style={styles.view1}>{DateTimes(item.create_at)}</Text>
            <Text
              style={stylescustom.txt1}
              onPress={() => {
                focus();
                setID(item);
              }}>
              Bình luận
            </Text>
            <Pressable style={stylescustom.view1} onPress={showItem}>
              <Text style={stylescustom.txt1}>
                {item?.children_comment?.length}
              </Text>
              <Icon
                name="commenting"
                color={colors.GRAY}
                size={sizes._screen_width * 0.04}
                style={{marginLeft: 8}}
              />
            </Pressable>
          </View>
        </View>
      </Pressable>
      {show && (
        <FlatList
          data={item?.children_comment}
          scrollEnabled={false}
          renderItem={({item}) => <RenderChildrenComment item={item} />}
          removeClippedSubviews
          keyExtractor={item => `ccc${item.id}`}
          maxToRenderPerBatch={6}
        />
      )}
      <PopoverDeleteCMT
        DeleteCMT={DeleteCMT}
        setShowPopover={setShowPopover}
        showPopover={showPopover}
        touchable={touchable}
      />
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.95,
    padding: 10,
    backgroundColor: '#e9efff',
    borderRadius: 15,
    ...stylescustom.view,
    marginTop: 10,
    alignSelf: 'center',
  },
  img: {
    height: sizes._screen_width * 0.12,
    width: sizes._screen_width * 0.12,
    borderRadius: (sizes._screen_width * 0.12) / 2,
  },
  view1: {
    ...stylescustom.txt1,
    fontSize: sizes._screen_width * 0.03,
    marginTop: 5,
  },
  txt: {...stylescustom.txt, marginTop: 5},
});
