import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NotParticpated} from '../../datafeck/feck/DataQuizzs';
import RenderNotParticipated from '../../component/renderItem/RenderNotParticipated';
import {NavigationProp} from '@react-navigation/native';

const NotParticipated = ({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={NotParticpated}
        renderItem={({item, index}) => (
          <RenderNotParticipated
            index={index}
            item={item}
            navigation={navigation}
          />
        )}
        keyExtractor={item => `${item?.id}`}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default NotParticipated;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
