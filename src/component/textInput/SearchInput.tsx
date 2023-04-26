import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../res/colors';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import fonts from '../../res/fonts';
const SearchInput = ({search, setSearch}: any) => {
  return (
    <View style={styles.view4}>
      <View style={styles.view}>
        <Ionicons
          name="md-search"
          color={colors.BLACK}
          size={30}
          style={{paddingRight: 5}}
        />
        <TextInput
          placeholder={'Tìm kiếm khoá học?'}
          value={search}
          onChangeText={setSearch}
          style={styles.txtip}
        />
      </View>

      {search ? (
        <MaterialIcons
          onPress={() => setSearch('')}
          name="cancel"
          color={colors.BLACK}
          size={20}
          style={{marginRight: 15}}
        />
      ) : null}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  view: {
    ...stylescustom.view1,
  },
  view4: {
    height: 45,
    width: sizes._screen_width * 0.9,
    borderRadius: 30,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 15,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtip: {
    height: 50,
    width: sizes._screen_width * 0.65,
    fontFamily: fonts.textRegular,
    fontSize: sizes._screen_width * 0.04,
    color: colors.BLACK,
  },
});
