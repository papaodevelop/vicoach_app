import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../res/colors';
import sizes from '../../../res/sizes';
import stylescustom from '../../../res/stylescustom';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/store';

interface Props {
  item: any;
  index: number;
  choose?: any;
  answer?: any;
  idItem: number | undefined;
  setSelectedItems: any;
  SelectedItems: string[];
}
export default function RenderQuiz(props: Props) {
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const check = useAppSelect(data => data?.getQuizz.answer);
  const Selects = (val: any) => {
    props.setSelectedItems((prevSelectID: any) => {
      if (prevSelectID?.includes(val)) {
        return prevSelectID?.filter((id: any) => id !== val);
      } else {
        return [...prevSelectID, val];
      }
    });
  };
  const itemchose = () => {
    return props.SelectedItems?.includes(props?.item?.id)
      ? colors.GREEN
      : 'transparent';
  };

  return (
    <>
      <Pressable
        style={{
          ...styles.view,
          borderWidth: 1,
          borderColor: itemchose(),
        }}
        onPress={async () => {
          await Selects(props.item.id);
        }}>
        <Text style={stylescustom.txt}>{props.item.answer}</Text>
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
