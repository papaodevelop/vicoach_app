import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {instrucutors} from '../../datafeck/feck/Data';
import RenderItemInstructors from '../../component/renderItem/RenderItemInstructors';
import stylescustom from '../../res/stylescustom';

export default function Consultants() {
  return (
    <View style={styles.container}>
      <FlatList
        data={instrucutors}
        renderItem={({item, index}) => (
          <RenderItemInstructors item={item} index={index} />
        )}
        numColumns={2}
        keyExtractor={item => `${item?.id}`}
        scrollEventThrottle={16}
        columnWrapperStyle={stylescustom.numbercolum2}
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
