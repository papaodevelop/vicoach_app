import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../res/colors';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
const Search = ({
  search,
  setSearch,
  placeholder,
  onPress,
}: {
  search: string | undefined;
  setSearch: (val: string) => void;
  placeholder: string;
  onPress?: () => void;
}) => {
  return (
    <View style={styles.view4}>
      <TextInput
        onPressIn={onPress}
        placeholder={placeholder}
        placeholderTextColor={'white'}
        value={search}
        onChangeText={setSearch}
        style={styles.txtip}
      />
      <Ionicons name="md-search" color={colors.WHITE} size={30} style={{}} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  view4: {
    height: 50,
    width: sizes._screen_width * 0.9,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 15,
    paddingLeft: 8,
    ...stylescustom.view,
    borderWidth: 1,
    borderColor: colors.GRAY,
  },
  txtip: {
    height: 50,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
    color: colors.WHITE,
    width: sizes._screen_width * 0.8,
  },
});
