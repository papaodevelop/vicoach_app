import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {khoahocmoi} from '../../datafeck/feck/Data';
import RenderQuizzes from '../../component/renderItem/RenderQuizzes';
import {DataQuizzs} from '../../datafeck/feck/DataQuizzs';

export default function MyResults({navigation}: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={DataQuizzs}
        renderItem={({item, index}) => (
          <RenderQuizzes index={index} item={item} navigation={navigation} />
        )}
        keyExtractor={item => `${item?.id}`}
        scrollEventThrottle={16}
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
