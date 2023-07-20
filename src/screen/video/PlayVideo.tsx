import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import sizes from '../../res/sizes';
import stylescustom from '../../res/stylescustom';
import RenderListVideo from './RenderListVideo';
import {NavigationProp} from '@react-navigation/native';
import RenderViedeo from './RenderViedeo';
export default function PlayVideo({
  navigation,
  route,
}: {
  navigation: NavigationProp<Record<string, any>>;
  route: any;
}) {
  const [select, setSelect] = useState<number>(0);
  const item = route?.params?.item[select];
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          height: sizes._screen_width * (9 / 12),
        }}>
        <RenderViedeo
          navigation={navigation}
          url={item?.material?.active_file?.videoEmbebUrl}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    ...stylescustom.txtBold,
    fontSize: sizes._screen_width * 0.05,
    width: sizes._screen_width * 0.96,
    alignSelf: 'center',
    marginTop: 10,
  },
  view: {
    marginTop: 10,
    width: sizes._screen_width,
    alignItems: 'center',
  },
});
