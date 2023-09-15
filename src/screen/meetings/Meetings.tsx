import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DataMettings from '../../datafeck/feck/DataMettings';
import RenderMeetings from '../../component/renderItem/RenderMeetings';
import fonts from '../../res/fonts';
import HeaderScreen from '../../component/header/HeaderScreen';
import ModalFindMeeting from '../../component/modal/ModalFindMeeting';
interface Props {
  navigation: any;
}
export default function Meetings(props: Props) {
  const [showFind, setShowFind] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderScreen
        navigation={props.navigation}
        title="Học trực tuyến"
        dot
        onPress={() => setShowFind(true)}
        nameIcon="magnifying-glass"
      />
      <Text style={styles.txt}>Danh sách các lớp học</Text>
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
      <ModalFindMeeting
        isShow={showFind}
        toggleDate={() => setShowFind(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {marginTop: 20, paddingBottom: 30},
  txt: {
    marginTop: 20,
    marginLeft: 20,
    fontFamily: fonts.textBold,
    fontSize: 20,
  },
});
