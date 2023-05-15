import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {dataComment} from '../../datafeck/feck/dataComment';
import RenderComment from './RenderComment';

export default function Comment() {
  return (
    <View>
      <FlatList
        data={dataComment}
        renderItem={({item, index}) => (
          <RenderComment item={item} index={index} />
        )}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
