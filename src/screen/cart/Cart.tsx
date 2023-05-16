import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';
import Cartdata from '../../datafeck/feck/Cartdata';
import RenderItemCart from './RenderItemCart';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import {money} from '../../res/convert';
import BTNLogin from '../../component/btn/BTNLogin';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Cart({navigation}: any) {
  let total = 0;
  for (let i = 0; i < Cartdata.length; i++) {
    total += Cartdata[i].pirce;
  }
  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={navigation} title="Đơn hàng" />

      <SwipeListView
        data={Cartdata}
        renderItem={({item, index}) => (
          <RenderItemCart item={item} index={index} />
        )}
        renderHiddenItem={({item}) => (
          <Pressable style={styles.deleteContainer}>
            <View style={stylescustom.view1}>
              <Icon
                name={'trash'}
                color={colors.WHITE}
                size={sizes._screen_width * 0.08}
              />
            </View>
          </Pressable>
        )}
        rightOpenValue={-75}
        keyExtractor={item => `${item.id}`}
        disableRightSwipe
        contentContainerStyle={styles.view}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={stylescustom.txtBold}>Tổng phụ</Text>
          <Text style={stylescustom.txtGray}>{money(total)}</Text>
        </View>
        <View style={styles.view2}>
          <Text style={stylescustom.txtBold}>Giảm giá</Text>
          <Text style={stylescustom.txtGray}>{'0%'}</Text>
        </View>
        <View style={styles.view2}>
          <Text style={stylescustom.txtBold}>Tổng tiền</Text>
          <Text style={stylescustom.txtGray}>{money(total)}</Text>
        </View>
        <View style={{marginTop: sizes._screen_height * 0.04}}>
          <BTNLogin txt="Thanh toán" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignSelf: 'center',
    width: sizes._csreen_width * 0.9,
    marginTop: 10,
    paddingBottom: 40,
    maxHeight: sizes._screen_height * 0.6,
  },
  view1: {
    position: 'absolute',
    bottom: 0,
    width: sizes._screen_width,
    height: sizes._screen_height * 0.25,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  view2: {
    ...stylescustom.view,
    width: sizes._screen_width * 0.9,
    marginTop: 10,
  },

  deleteContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 16,
    backgroundColor: colors.ORANGE,
    width: sizes._screen_width * 0.89,
    marginTop: 20,
    borderRadius: 15,
    flex: 1,
  },
});
