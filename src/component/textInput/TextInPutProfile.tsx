import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import stylescustom from '../../res/stylescustom';

export default function TextInPutProfile({
  value,
  setValue,
  secureTextEntry,
  placeholder,
  stylecustom,
  maxlength,
  numberic,
}: {
  value?: string;
  setValue: (val: string) => void;
  secureTextEntry?: boolean;
  placeholder?: string;
  stylecustom?: StyleProp<TextStyle>;
  maxlength?: number;
  numberic?: boolean;
}) {
  return (
    <TextInput
      value={value}
      onChangeText={setValue}
      style={[styles.textInputStyle, stylecustom]}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      maxLength={maxlength}
      keyboardType={numberic ? 'numeric' : undefined}
    />
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 50,
    width: sizes._screen_width * 0.9,
    borderColor: colors.GRAY,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: (sizes._screen_width * 0.9) / 2,
    marginTop: 8,
    padding: 10,
    ...stylescustom.txt,
  },
});
