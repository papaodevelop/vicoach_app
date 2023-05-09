import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderScreen1 from '../../component/header/HeaderScreen1';
import DataMettings from '../../datafeck/feck/DataMettings';
import RenderMeetings from '../../component/renderItem/RenderMeetings';
interface Props {
  navigation: any;
}
export default function Meetings(props: Props) {
  return (
    <View style={styles.container}>
      <HeaderScreen1 navigation={props.navigation} title="meetings" />
      <FlatList
        data={DataMettings}
        style={styles.view}
        renderItem={({item, index}) => (
          <RenderMeetings
            index={index}
            item={item}
            navigation={props.navigation}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {marginTop: 20, paddingBottom: 30},
});
