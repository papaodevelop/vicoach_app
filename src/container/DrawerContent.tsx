import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import images from '../res/images';
import sizes from '../res/sizes';
import colors from '../res/colors';
import fonts from '../res/fonts';
import RenderItemDrawer from '../component/renderItem/RenderItemDrawer';
import stylescustom from '../res/stylescustom';
import {itemNavigationDrawer} from '../datafeck/itemNavigationDrawer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {authApi, useGetProfileQuery, useLogoutMutation} from '../redux/state';
import {setDataUser} from '../redux/state/login.slice';
import {RootState} from '../redux/store/store';
interface Props {
  navigation: any;
}
export default function DrawerContent(props: Props) {
  const dispatch = useDispatch();
  const {data} = useGetProfileQuery('');
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const remember = useAppSelect(data => data?.getdataUser?.getdataUser);
  const [logoutMutation] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      const result = await logoutMutation('');
      if (result) {
        dispatch(authApi.util.resetApiState());
        dispatch(
          setDataUser({
            username: remember.username,
            password: '',
          }),
        );
        props.navigation.navigate('Login');
      }
    } catch (error) {}
  };
  return (
    <ScrollView style={styles.drawerHeader}>
      <SafeAreaView style={{marginLeft: 15}}>
        <View
          style={{...stylescustom.view1, width: sizes._screen_width * 0.14}}>
          <Image
            source={data?.image?.url ? {uri: data?.image?.url} : images.noimage}
            style={styles.img}
          />
          <Pressable
            style={styles.img2}
            onPress={() => props.navigation.navigate('Profile')}>
            <Image source={images.setting} style={styles.img1} />
          </Pressable>
        </View>
        <Text style={styles.name}>{data?.name}</Text>
        <View style={styles.line} />
        <FlatList
          data={itemNavigationDrawer}
          renderItem={({item}) => (
            <RenderItemDrawer item={item} navigation={props.navigation} />
          )}
          scrollEnabled={false}
        />
        <View
          style={{...styles.line, marginTop: sizes._screen_height * 0.03}}
        />
        <TouchableOpacity
          style={{
            ...stylescustom.view1,
            marginTop: sizes._screen_height * 0.08,
          }}>
          <Image source={images.logout} style={styles.icon} />
          <Text style={styles.txt} onPress={handleLogout}>
            Logout
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    flex: 1,
    backgroundColor: colors.ORANGE,
  },
  img: {
    height: sizes._screen_width * 0.14,
    width: sizes._screen_width * 0.14,
    borderRadius: (sizes._screen_width * 0.14) / 2,
  },
  name: {
    color: colors.WHITE,
    fontSize: sizes._csreen_width * 0.05,
    fontFamily: fonts.textBold,
    marginTop: 10,
  },
  line: {
    backgroundColor: colors.WHITE,
    width: sizes._csreen_width * 0.35,
    height: 2.5,
    marginTop: sizes._screen_height * 0.02,
  },
  icon: {
    tintColor: colors.WHITE,
    height: sizes._screen_width * 0.065,
    width: sizes._screen_width * 0.065,
  },
  txt: {
    color: colors.WHITE,
    fontFamily: fonts.textRegular,
    fontSize: sizes._csreen_width * 0.04,
    marginLeft: 15,
  },
  img1: {
    height: sizes._screen_width * 0.05,
    width: sizes._screen_width * 0.05,
    tintColor: colors.GRAY,
  },
  img2: {
    height: sizes._screen_width * 0.06,
    width: sizes._screen_width * 0.06,
    borderRadius: (sizes._screen_width * 0.1) / 2,
    backgroundColor: colors.WHITE,
    position: 'absolute',
    bottom: 0,
    right: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
