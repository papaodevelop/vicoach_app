import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import notifee, {AndroidStyle, EventType} from '@notifee/react-native';
import images from './res/images';
import {slides} from './datafeck/DataFirst';

export default function Test() {
  async function onDisplayNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Required for iOS
    // See https://notifee.app/react-native/docs/ios/permissions
    await notifee.requestPermission();

    const notificationId = await notifee.displayNotification({
      title:
        '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
      subtitle: '&#129395;',
      body: 'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
      android: {
        channelId,
        // color: '#4caf50',
        // actions: [
        //   {
        //     title: '<b>Dance</b> &#128111;',
        //     pressAction: {id: 'dance'},
        //   },
        //   {
        //     title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
        //     pressAction: {id: 'cry'},
        //   },
        // ],
      },
      ios: {},
    });

    // Sometime later...
    await notifee.displayNotification({
      id: '123',
      title: 'Updated Notification Title',
      body: 'Updated main body content of the notification',
      subtitle: 'sadasdasas',
      android: {
        channelId,
        color: 'red',
        smallIcon: images.noimage,
      },
      ios: {
        criticalVolume: 1,
      },
    });
  }
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Button title="Display Notification" onPress={onDisplayNotification} />
    </View>
  );
}
