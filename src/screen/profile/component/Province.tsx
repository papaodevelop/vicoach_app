import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useGetProvincesQuery} from '../../../redux/state';
import {normalizeString} from '../../../res/convert';
import sizes from '../../../res/sizes';
import Search from '../../../component/textInput/Search';
import colors from '../../../res/colors';
import stylescustom from '../../../res/stylescustom';
import fonts from '../../../res/fonts';

export default function Province({
  district,
  setDistrict,
  code,
}: {
  district: string | undefined;
  setDistrict: (val: string) => void;
  code: (val: string) => void;
}) {
  const {data} = useGetProvincesQuery('');
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
        placeholder="Chọn tỉnh thành phố"
        onPress={() => setShow(true)}
      />

      {show && (
        <FlatList
          data={searchResults || data}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: Provinces) => `${item?.code}`}
          renderItem={({item}) => <RenderItem item={item} />}
          contentContainerStyle={{
            maxHeight: sizes._screen_height * 0.2,
            borderRadius: 10,
            backgroundColor: colors.GRAY,
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
  txt: {
    marginTop: 8,
    marginLeft: sizes._screen_width * 0.04,
    ...stylescustom.txt,
  },
});
