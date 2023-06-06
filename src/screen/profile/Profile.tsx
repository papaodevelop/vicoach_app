import {View} from 'react-native';
import React from 'react';
import {useGetProfileQuery} from '../../redux/state';
import HeaderScreen from '../../component/header/HeaderScreen';
import {NavigationProp} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import stylescustom from '../../res/stylescustom';
import TotabScoll from './customTabScoll/ToptabScoll';
import Loading from '../../component/loading/Loading';
const Profile = ({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) => {
  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={navigation} title="Profile" />
      <GestureHandlerRootView style={{flex: 1}}>
        <TotabScoll navigation={navigation} />
      </GestureHandlerRootView>
    </View>
  );
};

export default Profile;
