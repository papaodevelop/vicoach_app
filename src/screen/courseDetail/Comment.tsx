import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {dataComment} from '../../datafeck/feck/dataComment';
import RenderComment from './RenderComment';
import BTNLogin from '../../component/btn/BTNLogin';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';

export default function Comment() {
  return (
    <View style={stylescustom.container}>
      <FlatList
        data={dataComment}
        renderItem={({item, index}) => (
          <RenderComment item={item} index={index} />
        )}
        scrollEnabled={false}
      />
      <View style={styles.btn}>
        <BTNLogin onPress={() => {}} txt="Viết đánh giá" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
  },
});
