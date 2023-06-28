import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import images from '../../res/images';
import {DateTimes} from '../../res/convert';
import PopoverDeleteCMT from '../popover/PopoverDeleteCMT';
import {useDeleteCommentMutation} from '../../redux/state';
const RenderChildrenComment = ({item}: {item: ChildrenComment}) => {
  const [showPopover, setShowPopover] = useState(false);
  const touchable = useRef<any>();
  const [idCMT, setIDCMT] = useState<number>();

  const [Deletes] = useDeleteCommentMutation();
  const DeleteCMT = async () => {
    try {
      const aa = await Deletes({
        id: idCMT,
      }).unwrap();
      console.log(aa);
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
        <View style={stylescustom.view1}>
          <Image
            source={
              item?.author?.image?.url
                ? {uri: item?.author?.image?.url}
                : images.noimage
            }
            style={styles.view1}
          />
          <Text style={{marginLeft: 10, ...stylescustom.txt}}>
            {item?.content}
          </Text>
        </View>
        <Text style={stylescustom.txt1}>{DateTimes(item?.created_at)}</Text>
      </Pressable>
      <PopoverDeleteCMT
        DeleteCMT={DeleteCMT}
        setShowPopover={setShowPopover}
        showPopover={showPopover}
        touchable={touchable}
      />
    </>
  );
};

export default RenderChildrenComment;

const styles = StyleSheet.create({
  view: {
    maxWidth: sizes._screen_width * 0.7,
    backgroundColor: '#e9efff',
    alignSelf: 'flex-end',
    padding: 10,
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
    marginRight: sizes._screen_width * 0.03,
  },
  view1: {height: 40, width: 40, borderRadius: 60},
});
