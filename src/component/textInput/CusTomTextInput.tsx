import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import fonts from '../../res/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import stylescustom from '../../res/stylescustom';
interface Props {
  placeholder?: string;
  pass?: boolean;
  value?: string;
  setValue: (val: string) => void;
  require?: boolean;
  numberic?: boolean;
}
const CusTomTextInput = (props: Props) => {
  const [show, setShow] = useState(true);
  const onPress = () => {
    setShow(!show);
  };
  return (
    <View style={styles.view}>
      {props.require && <Text style={styles.txt}>*</Text>}
      <View style={stylescustom.view1}>
        <TextInput
          style={styles.textInput}
          cursorColor={'black'}
          placeholder={props.placeholder}
          selectionColor={'black'}
          secureTextEntry={props.pass ? show : undefined}
          value={props.value}
          onChangeText={props.setValue}
          keyboardType={props.numberic ? 'numeric' : undefined}
          maxLength={props.numberic ? 10 : undefined}
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
    </View>
  );
};
export default CusTomTextInput;
const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.85,
    height: 45,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: colors.GRAY,
    justifyContent: 'center',
    marginTop: 15,
  },
  textInput: {
    color: colors.BLACK,
    fontSize: sizes._screen_width * 0.04,
    fontFamily: fonts.textRegular,
    width: sizes._screen_width * 0.7,
    marginLeft: sizes._screen_width * 0.04,
  },
  txt: {
    color: colors.RED,
    fontFamily: fonts.textRegular,
    fontSize: sizes._csreen_width * 0.03,
    width: sizes._screen_width * 0.8,
    textAlign: 'right',
    position: 'absolute',

    right: -10,
  },
});
