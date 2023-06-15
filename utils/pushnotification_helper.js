import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    console.log('Authorization status:', authStatus);
    const fcmToken = await getFCMToken();
    console.log('FCM token:', fcmToken);
    await registerNotificationListeners();
  }
}

export async function getFCMToken() {
  let fcmToken = await AsyncStorage.getItem('fcmtoken');

  if (!fcmToken) {
    try {
      await messaging().registerDeviceForRemoteMessages(); // đăng ký thiết bị
      const remoteMessage = await messaging().getToken();
      fcmToken = remoteMessage;

      await AsyncStorage.setItem('fcmtoken', fcmToken);
    } catch (error) {
      console.log(error, 'okkw');
    }
  }

  return fcmToken;
}
export const registerNotificationListeners = async () => {
  const notificationOpenedListener = messaging().onNotificationOpenedApp(remoteMessage => {});

  const initialNotification = messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
      }
    });

  const messageListener = messaging().onMessage(remoteMessage => {});

  return Promise.all([notificationOpenedListener, initialNotification, messageListener]);
};
