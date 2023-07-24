import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';
import RenderItemCart from './RenderItemCart';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import {money} from '../../res/convert';
import BTNLogin from '../../component/btn/BTNLogin';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {removeAll, removeCart} from '../../redux/state/cart.reducer';
import images from '../../res/images';
import ModalPay from '../../component/modal/ModalPay';
export default function Cart({navigation}: any) {
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const dataCart: any = useAppSelect(data => data.getCart.cart);
  let total = 0;
  for (let i = 0; i < dataCart?.length; i++) {
    total += dataCart[i]?.price;
  }
  let discount = 0;
  for (let i = 0; i < dataCart.length; i++) {
    discount +=
      dataCart[i]?.price - (dataCart[i]?.price * dataCart[i]?.discount) / 100;
  }

  const dispatch = useDispatch();
  const deleteCart = (id: number) => {
    dispatch(removeCart(id));
  };
  const [show, setShow] = useState(false);

  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={navigation} title="Đơn hàng" />
      {dataCart?.length !== 0 ? (
        <>
          <SwipeListView
            data={dataCart}
            renderItem={({item, index}: {item: Carts; index: number}) => (
              <RenderItemCart item={item} index={index} />
            )}
            renderHiddenItem={({item}) => (
              <Pressable
                style={styles.deleteContainer}
                onPress={() => deleteCart(item.id)}>
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
              <Text style={stylescustom.txtBold}>Giảm được</Text>
              <Text style={stylescustom.txtGray}>
                {money(total - discount)}
              </Text>
            </View>
            <View style={styles.view2}>
              <Text style={stylescustom.txtBold}>Tổng tiền</Text>
              <Text style={stylescustom.txtGray}>{money(discount)}</Text>
            </View>
            <View style={{marginTop: sizes._screen_height * 0.04}}>
              <BTNLogin txt="Thanh toán" onPress={() => setShow(true)} />
            </View>
          </View>
        </>
      ) : (
        <View
          style={{alignItems: 'center', marginTop: sizes._screen_height * 0.2}}>
          <Image source={images.noCart} />
          <Text
            style={
              styles.txt
            }>{`Nếu bạn muốn mua khoá học vui lòng lên trang web chính https://khoahoc.phanmemmkt.vn/vi đăng nhập để mua khoá học`}</Text>
        </View>
      )}
      <ModalPay
        isShow={show}
        toggleDate={() => {
          setShow(false);
          dispatch(removeAll([]));
        }}
      />
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
  txt: {
    ...stylescustom.txt,
    textAlign: 'center',
    marginTop: 20,
  },
});
