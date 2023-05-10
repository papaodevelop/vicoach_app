import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../res/colors';
import sizes from '../../../res/sizes';
import stylescustom from '../../../res/stylescustom';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Quizz, Reselect} from '../../../redux/state/Quizz.reducer';
import {RootState} from '../../../redux/store/store';
interface Props {
  item: any;
  index: number;
  choose?: any;
  answer?: any;
  quiz?: boolean;
  selectedId: number | undefined;
  select: any;
  idItem: number | undefined;
}
export default function RenderQuiz(props: Props) {
  const dispatch = useDispatch();
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const check = useAppSelect(data => data?.getQuizz.answer);
  const aaa = () => {
    const currentCheck: any = check.find(
      (item: any) => item?.id === props?.idItem,
    );
    if (currentCheck && currentCheck.chose === props?.item?.id) {
      return colors.GREEN;
    } else {
      return 'transparent';
    }
  };
  return (
    <>
      <Pressable
        style={{
          ...styles.view,
          borderWidth: 1,
          borderColor: aaa(),
        }}
        onPress={() => {
          props.select(props.item.id);
          if (!check.find((item: any) => item.id === props.idItem)) {
            dispatch(
              Quizz({
                id: props.idItem,
                chose: props.item.id,
              }),
            );
          } else {
            dispatch(
              Reselect({
                id: props.idItem,
                chose: props.item.id,
              }),
            );
          }
        }}>
        <Text style={stylescustom.txt}>{props.item.name}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.WHITE,
    height: sizes._screen_width * 0.4,
    width: sizes._screen_width * 0.4,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  txt: {
    ...stylescustom.txt1,
    padding: 3,
    fontSize: sizes._screen_width * 0.03,
  },
  view1: {
    backgroundColor: '#83d59f',
    padding: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 15,
  },
});
