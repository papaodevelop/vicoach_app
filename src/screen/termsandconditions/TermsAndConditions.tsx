import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import stylescustom from '../../res/stylescustom';
import HeaderScreen from '../../component/header/HeaderScreen';
import {NavigationProp} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import {useGetTermPageQuery} from '../../redux/state';
import Loading from '../../component/loading/Loading';

const TermsAndConditions = ({
  navigation,
}: {
  navigation: NavigationProp<Record<string, any>>;
}) => {
  const {width} = useWindowDimensions();
  const {data, isLoading} = useGetTermPageQuery('');
  return (
    <View style={stylescustom.container}>
      <HeaderScreen navigation={navigation} title="Điều khoản điều kiện" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txt}>{data?.title?.vi}</Text>
        <RenderHtml
          contentWidth={width}
          source={{
            html: `${data?.content?.vi}`,
          }}
        />
      </ScrollView>
      {isLoading && <Loading />}
    </View>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  txt: {...stylescustom.txtBold, marginTop: 20, marginLeft: 5},
});
