import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stylescustom from '../../../res/stylescustom';
import sizes from '../../../res/sizes';
import BTNLogin from '../../../component/btn/BTNLogin';
import {NavigationProp} from '@react-navigation/native';
import {CourseCategoryType} from '../../../../types/CourseCategoryType';

export default function About({
  navigation,
  item,
}: {
  navigation: NavigationProp<Record<string, any>>;
  item: CourseCategoryType;
}) {
  return (
    <View style={styles.view}>
      <Text style={styles.txt1}>Địa chỉ: {item?.address?.street}</Text>
      <Text style={styles.txt1}>Kinh nghiệm</Text>
      <Text style={styles.txt}>-Five-time TED speaker</Text>
      <Text style={styles.txt1}>Học vấn</Text>
      <Text style={styles.txt}>
        -Tốt nghiệp bằng thạc sĩ tại đại học Chicago
      </Text>
      <Text style={styles.txt}>
        -Liên kết kinh doanh ứng dụng từ Đại học Stanford
      </Text>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <BTNLogin
          onPress={() => navigation.navigate('PlayVideo')}
          txt="Bắt đầu"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: sizes._screen_width * 0.95,
    alignSelf: 'center',
    marginTop: 20,
  },
  txt: {
    ...stylescustom.txt1,
    marginTop: 8,
  },
  txt1: {
    ...stylescustom.txtBold,
    marginTop: 8,
  },
});
