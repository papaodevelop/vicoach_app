import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import sizes from '../res/sizes';

const VoteRate = ({onchangStar}: {onchangStar: (val: number) => void}) => {
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={styles.view1}>
      <View style={styles.container}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              key={item}
              onPress={() => {
                setDefaultRating(item);
                onchangStar(item);
              }}>
              <Icon
                key={key}
                name={
                  item <= defaultRating
                    ? 'star'
                    : item >= defaultRating && item < defaultRating + 1
                    ? 'star-half-full'
                    : 'star-o'
                }
                color={'#FFD700'}
                size={15}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default VoteRate;

const styles = StyleSheet.create({
  container: {
    width: sizes._screen_width * 0.4,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  view1: {width: sizes._screen_width * 0.8, alignSelf: 'center'},
});
