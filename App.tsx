import {StatusBar, StyleSheet, View, LogBox} from 'react-native';
import React from 'react';
import Container from './src/container/Container';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
const persistor = persistStore(store);
LogBox.ignoreLogs(['Sending']);
const App = () => {
  messaging().requestPermission();
  async function onDisplayNotification(
    message: FirebaseMessagingTypes.RemoteMessage,
  ) {
    const channelId = await notifee.createChannel({
      id: 'foreground-channel',
      name: 'Foreground Channel',
    });
    try {
      await notifee.displayNotification({
        title: message?.data?.title,
        body: message?.data?.body,
        android: {
          channelId: channelId,
          sound: 'default',
        },
        ios: {
          sound: 'default',
          criticalVolume: 1,
        },
        id: message?.messageId,
      });
    } catch (error) {}
  }
  messaging().onMessage(message => {
    onDisplayNotification(message);
  });
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
