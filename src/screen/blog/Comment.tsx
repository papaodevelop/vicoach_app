import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import RenderComment from '../../component/renderItem/RenderComment';
import {
  useGetCommentBlogQuery,
  usePostCommentMutation,
} from '../../redux/state';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import RBSheet from 'react-native-raw-bottom-sheet';
import TextInputComment from './TextInputComment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../res/colors';
export default function Comment({item}: {item: Blog}) {
  const refRBSheet = useRef<any>();

  const {data, refetch, isFetching} = useGetCommentBlogQuery(`${item.id}`, {
    pollingInterval: 5000,
  });
  const [comment, setComment] = useState<string>();
  const [parent_id, setParentID] = useState<any>();
  const refInput = React.useRef<any>(null);
  const [addCMT] = usePostCommentMutation();

  const Comments = async () => {
    try {
      let post = await addCMT({
        content: comment,
        postId: item?.id,
        parent_id: parent_id?.id,
      }).unwrap();
      if (post) {
        refetch();
      }
    } catch (error) {}
  };
  return (
    <>
      <View>
        <Text
          onPress={() => refRBSheet.current.open()}
          style={{
            marginTop: 10,
            ...stylescustom.txt1,
          }}>
          {'Đọc bình luận'}
        </Text>
      </View>
      {/* @ts-ignore */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        dragFromTopOnly={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            height: '80%',
          },
        }}>
        <View>
          <View>
            <FlatList
              refreshing={isFetching}
              data={data?.items}
              renderItem={({item}: {item: Comment}) => (
                <RenderComment
                  setID={item => setParentID(item)}
                  item={item}
                  focus={() => refInput.current.focus()}
                />
              )}
              scrollEnabled={true}
              style={{marginTop: 20}}
              initialNumToRender={20}
              removeClippedSubviews={true}
              keyExtractor={item => `cmt${item?.id}`}
              contentContainerStyle={{paddingBottom: 120}}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.txt}>
          {parent_id && (
            <View style={{...stylescustom.view, marginTop: 5}}>
              <Text style={stylescustom.txt3}>
                Đang trả lời : {parent_id?.author?.name}
              </Text>
              <Text style={stylescustom.txt3} onPress={() => setParentID('')}>
                Huỷ
              </Text>
            </View>
          )}
          <View style={stylescustom.view}>
            <TextInputComment
              placeholder="Viết bình luận"
              value={comment}
              setValue={setComment}
              refInput={refInput}
            />
            <Ionicons
              onPress={Comments}
              name="send"
              color={colors.BLACK}
              size={sizes._screen_width * 0.07}
            />
          </View>
        </View>
      </RBSheet>
    </>
  );
}

const styles = StyleSheet.create({
  txt: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: sizes._screen_width * 0.95,
    height: sizes._screen_height * 0.12,

    alignSelf: 'center',
  },
});
