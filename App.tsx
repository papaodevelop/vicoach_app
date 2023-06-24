import {StatusBar, StyleSheet, Text, View, LogBox} from 'react-native';
import React, {useEffect} from 'react';
import Container from './src/container/Container';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import messaging from '@react-native-firebase/messaging';

const persistor = persistStore(store);
LogBox.ignoreLogs(['Sending']);
const App = () => {
  messaging().requestPermission();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <StatusBar
            backgroundColor="transparent"
            barStyle={'light-content'}
            showHideTransition={'fade'}
            translucent={true}
          />
          <Container />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
