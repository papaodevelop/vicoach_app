import React, {useCallback, useRef} from 'react';

import {JitsiMeeting} from '@jitsi/react-native-sdk/index';

import {NavigationProp} from '@react-navigation/native';
import {Text} from 'react-native';

interface MeetingProps {
  route: any;
  navigation: NavigationProp<Record<string, any>>;
}

const Meeting = ({route, navigation}: MeetingProps) => {
  const jitsiMeeting = useRef<any>(null);
  console.log(route?.params);

  // const {token, name} = route?.params?.data;

  const onReadyToClose = useCallback(async () => {
    navigation.goBack();
    await jitsiMeeting.current.close();
  }, [navigation]);

  const eventListeners = {
    onReadyToClose,
  };

  return (
    // <JitsiMeeting
    // config={{}}
    //   eventListeners={eventListeners as any}
    //   ref={jitsiMeeting}
    //   style={{flex: 1}}
    //   room={'superroom'}
    //   flags={{'call-integration.enabled': true}}
    //   serverURL={'https://meet.vmaster.vn/localhost/'}
    //   token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZXh0Ijp7InVzZXIiOnsiYWZmaWxpYXRpb24iOiJtZW1iZXIiLCJpZCI6NzMzLCJlbWFpbCI6ImtpZW4xMkBnbWFpbC5jb20iLCJuYW1lIjoidHVhbiIsImF2YXRhciI6IiJ9fSwiZ3JvdXAiOiJsb2NhbGhvc3QiLCJyb29tIjoic3VwZXJyb29tIiwiaWF0IjoxNjk0NzUwNTkxLCJleHAiOjE2OTQ3NTA2OTEsImF1ZCI6Im1lZXQudm1hc3Rlci52biIsImlzcyI6ImhkZmhkaGV5ZWlyeTU3NDU3NDY4OTYiLCJzdWIiOiJtZWV0LnZtYXN0ZXIudm4ifQ.A4lIc-8KIDqU2xanHHXRMUrVQPreQl80CtCrodI5L3c"
    // />
    <>
      <Text>okee</Text>
    </>
  );
};

export default Meeting;
