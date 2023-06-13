import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import stylescustom from '../../res/stylescustom';
export default function TextInputComment({
  value,
  setValue,
  secureTextEntry,
  placeholder,
  refInput,
}: {
  value?: string;
  setValue: (val?: string) => void;
  secureTextEntry?: boolean;
  placeholder?: string;
  refInput: any;
}) {
  return (
    <TextInput
      ref={refInput}
      value={value}
      onChangeText={setValue}
      style={styles.textInputStyle}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 50,
    width: sizes._screen_width * 0.85,
    borderColor: colors.GRAY,
    borderWidth: 1,
    borderRadius: (sizes._screen_width * 0.9) / 2,
    marginTop: 8,
    padding: 10,
    ...stylescustom.txt,
  },
});
