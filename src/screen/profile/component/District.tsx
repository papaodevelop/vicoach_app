import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useGetDistricQuery, useGetProvincesQuery} from '../../../redux/state';
import {normalizeString} from '../../../res/convert';
import sizes from '../../../res/sizes';
import Search from '../../../component/textInput/Search';
import colors from '../../../res/colors';
import stylescustom from '../../../res/stylescustom';
import fonts from '../../../res/fonts';

export default function District({
  district,
  setDistrict,
  code,
  provincecode,
}: {
  district: string | undefined;
  setDistrict: (val: string) => void;
  code: (val: string) => void;
  provincecode: string | undefined;
}) {
  const {data} = useGetDistricQuery(`${provincecode}`);
  const [searchResults, setSearchResults] = useState([]);

  const searchByName = (keyword: string) => {
    const normalizedKeyword = normalizeString(keyword);
    const results = data?.filter((item: Provinces) =>
      normalizeString(item?.name).includes(normalizedKeyword),
    );
    setSearchResults(results);
  };
  const [show, setShow] = useState(false);
  const RenderItem = ({item}: {item: Provinces}) => {
    return (
      <Text
        style={styles.txt}
        onPress={() => {
          setDistrict(item?.name);
          code(item?.code);
          setShow(false);
        }}>
        {item?.name}
      </Text>
    );
  };

  return (
    <View style={styles.view}>
      <Search
        search={district}
        setSearch={val => {
          setDistrict(val);
          searchByName(val);
        }}
        placeholder="Chọn quận huyện"
        onPress={() => setShow(true)}
      />

      {show && (
        <FlatList
          data={searchResults || data}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: Provinces) => `${item.code}`}
          renderItem={({item}) => <RenderItem item={item} />}
          contentContainerStyle={{
            maxHeight: sizes._screen_height * 0.2,
            borderRadius: 10,
            backgroundColor: '#e3e3e3',
            marginTop: 10,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.9,
    marginTop: 20,
  },
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
    color: colors.BLACK,
    width: sizes._screen_width * 0.8,
    justifyContent: 'center',
  },
  txt: {
    marginTop: 8,
    marginLeft: sizes._screen_width * 0.04,
    ...stylescustom.txt,
  },
});
