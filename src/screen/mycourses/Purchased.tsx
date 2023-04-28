import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {khoahocmoi} from '../../datafeck/feck/Data';
import RenderItemCourses from '../../component/renderItem/RenderItemCourses';
import stylescustom from '../../res/stylescustom';

export default function Purchased() {
  return (
    <View style={styles.container}>
      <FlatList
        data={khoahocmoi}
        renderItem={({item, index}) => (
          <RenderItemCourses index={index} item={item} />
        )}
        keyExtractor={item => `${item?.id}`}
        scrollEventThrottle={16}
        contentContainerStyle={stylescustom.paddingBottom}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
