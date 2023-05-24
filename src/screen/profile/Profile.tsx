import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetProfileQuery} from '../../redux/state';
import HeaderScreen from '../../component/header/HeaderScreen';
import {NavigationProp} from '@react-navigation/native';

const Profile = ({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) => {
  const {data, isLoading, isError, error} = useGetProfileQuery('');
  return (
    <View style={styles.container}>
      <HeaderScreen navigation={navigation} title="Profile" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
