import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import stylescustom from '../../res/stylescustom';

export default function TextInPutProfile({
  value,
  setValue,
  secureTextEntry,
}: {
  value?: string;
  setValue: (val?: string) => void;
  secureTextEntry?: boolean;
}) {
  return (
    <TextInput
      value={value}
      onChangeText={values => setValue(values)}
      style={styles.textInputStyle}
      secureTextEntry={secureTextEntry}
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
