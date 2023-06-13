import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import stylescustom from '../../res/stylescustom';
import VoteRate from '../VoteRate';
import ErrorText from '../error/ErrorText';
interface Props {
  isShow?: boolean;
  toggleDate?: () => void;
  confirm?: () => void;
  loading?: boolean;
  start: (val: number) => void;
  coment?: string | undefined;
  setComment: (val: string) => void;
  err: string | undefined;
}
const ConfirmRating = (props: Props) => {
  const [stars, setStars] = useState<number>();
  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.head}>
        <Text style={styles.txthead}>Viết đánh giá</Text>
      </View>
      <View style={styles.view}>
        <VoteRate
          onchangStar={val => {
            setStars(val);
            props.start(val);
          }}
        />
        <TextInput
          style={styles.txtInput}
          multiline
          numberOfLines={3}
          value={props.coment}
          onChangeText={props.setComment}
          placeholder="Bình luận"
          maxLength={200}
        />
        {props.err && <ErrorText err={props.err} />}
        <View style={styles.view1}>
          {/*@ts-ignore */}
          {props?.coment?.length >= 5 && stars ? (
            <TouchableOpacity style={styles.btn} onPress={props.confirm}>
              {props.loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.btntxt}>Đồng ý</Text>
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{...styles.btn, backgroundColor: colors.GRAY}}>
              {props.loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.btntxt}>Đồng ý</Text>
              )}
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: colors.GRAY}}
            onPress={props.toggleDate}>
            <Text style={styles.btntxt}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <Modal
        visible={props.isShow}
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}>
        <View style={styles.container1}>
          <TouchableWithoutFeedback>
            <View style={{zIndex: 0, flex: 1, height: '100%', width: '100%'}} />
          </TouchableWithoutFeedback>
          <View style={styles.content}>{renderContent()}</View>
        </View>
      </Modal>
    </View>
  );
};
export default ConfirmRating;
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.68)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: sizes._screen_width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
  },
  btn: {
    backgroundColor: colors.GREEN,
    width: sizes._screen_width * 0.3,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  btntxt: {
    color: 'white',
    fontSize: sizes._screen_width * 0.05,
    fontFamily: fonts.textBold,
  },
  head: {
    backgroundColor: colors.ORANGE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 40,
    width: sizes._screen_width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txthead: {
    color: 'white',
    fontFamily: fonts.textBold,
    fontSize: sizes._screen_width * 0.06,
  },
  view: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
    paddingTop: 10,
    width: sizes._screen_width * 0.9,
  },
  title: {
    textAlign: 'center',
    width: sizes._screen_width * 0.8,
    alignSelf: 'center',
    color: colors.BLACK,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.043,
  },
  txtInput: {
    height: 120,
    width: sizes._screen_width * 0.8,
    borderColor: colors.GRAY,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 8,
    padding: 10,
    ...stylescustom.txt,
  },
  view1: {
    ...stylescustom.view,
    width: sizes._screen_width * 0.7,
    alignSelf: 'center',
  },
});
