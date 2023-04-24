import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {
  placeholder?: string;
  pass?: boolean;
  value?: string;
  setValue: (val: string) => void;
}
const CusTomTextInput = (props: Props) => {
  const [show, setShow] = useState(true);
  const onPress = () => {
    setShow(!show);
  };
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textInput}
        cursorColor={'black'}
        placeholder={props.placeholder}
        selectionColor={'black'}
        secureTextEntry={props.pass ? show : undefined}
        value={props.value}
        onChangeText={props.setValue}
      />
      {props.value ? (
        <Icon
          onPress={() => props.setValue('')}
          name="close-circle"
          color={colors.GRAY}
          size={sizes._screen_width * 0.05}
        />
      ) : null}
      {props.pass === true && (
        <Icon
          onPress={onPress}
          name={show ? 'md-eye-off' : 'md-eye'}
          color={colors.GRAY}
          size={sizes._screen_width * 0.05}
        />
      )}
    </View>
  );
};
export default CusTomTextInput;
const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.85,
    height: sizes._screen_height * 0.05,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: colors.GRAY,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: colors.BLACK,
    fontSize: sizes._screen_width * 0.04,
    fontFamily: fonts.textRegular,
    width: sizes._screen_width * 0.7,
    height: sizes._screen_height * 0.047,
    marginLeft: sizes._screen_width * 0.04,
  },
});
