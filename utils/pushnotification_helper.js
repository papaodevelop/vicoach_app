import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    const fcmToken = await getFCMToken();
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
    } catch (error) {}
  }
  return fcmToken;
}
export const registerNotificationListeners = async () => {
  const initialNotification = messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('ádasdas');
      }
    });

  return Promise.all([
    // notificationOpenedListener,
    // initialNotification,
    // messageListener
  ]);
};
