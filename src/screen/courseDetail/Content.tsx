import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import sizes from '../../res/sizes';
import {Contentdata} from '../../datafeck/feck/Contentdata';
import RenderContent from './RenderContent';

export default function Content() {
  return (
    <View style={stylescustom.container}>
      {Contentdata.map(items => {
        return (
          <View key={items.id}>
            <Text style={styles.txt}>{items?.title}</Text>
            <FlatList
              data={items?.content}
              horizontal
              renderItem={({item, index}) => (
                <RenderContent item={item} index={index} title={items.title} />
              )}
              style={{marginTop: sizes._screen_height * 0.02}}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    ...stylescustom.txt2,
    marginLeft: sizes._screen_width * 0.03,
    marginTop: sizes._screen_height * 0.02,
  },
});
