import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import sizes from '../res/sizes';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Star({star}: any) {
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <Icon
            key={key}
            name={
              item <= star
                ? 'star'
                : item >= star && item < star + 1
                ? 'star-half-full'
                : 'star-o'
            }
            color={'#FFD700'}
            size={15}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  customRatingBarStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: sizes._screen_width * 0.3,
  },
});
