import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import OnboardingFirst from '../screen/Slapscreen/OnboardingFirst';
import Login from '../screen/Login/Login';
import Register from '../screen/Login/Register';
import Spapscreen1 from '../screen/Slapscreen/Slapscreen1';
import ViewAll from '../screen/home/NewestCourses/ViewAll';
import DrawerCustom from './DrawerCustom';
import BlogPost from '../screen/blog/BlogPost';
import MeetingsDetails from '../screen/meetings/MeetingsDetails';
import Notification from '../screen/notification/Notification';
import QuizzResuls from '../screen/quizzes/resul/QuizzResuls';
import DetailResul from '../screen/quizzes/resul/DetailResul';
import QuizInfomation from '../screen/quizzes/notParticlip/QuizInfomation';
import StartQuizz from '../screen/quizzes/notParticlip/StartQuizz';
import TestResul from '../screen/quizzes/notParticlip/TestResul';
import Cart from '../screen/cart/Cart';
import CourseDetails from '../screen/courseDetail/CourseDetail';
import PlayVideo from '../screen/video/PlayVideo';
import Profile from '../screen/profile/Profile';
import DetailCategories from '../screen/categories/DetailCategories';
import {navigationRef} from '../../RootNavigation';
import TermsAndConditions from '../screen/termsandconditions/TermsAndConditions';
import Support from '../screen/support/Support';
import Meeting from '../screen/meetings/Meeting';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Container() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'Spapscreen1'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Spapscreen1" component={Spapscreen1} />
        <Stack.Screen name="OnboardingFirst" component={OnboardingFirst} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DrawerCustoms" component={DrawerCustom} />
        <Stack.Screen name="ViewAll" component={ViewAll} />
        <Stack.Screen name="BlogPost" component={BlogPost} />
        <Stack.Screen name="MeetingsDetails" component={MeetingsDetails} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="QuizzResuls" component={QuizzResuls} />
        <Stack.Screen name="DetailResul" component={DetailResul} />
        <Stack.Screen name="QuizInfomation" component={QuizInfomation} />
        <Stack.Screen name="StartQuizz" component={StartQuizz} />
        <Stack.Screen name="TestResul" component={TestResul} />
        <Stack.Screen name="CourseDetail" component={CourseDetails} />
        <Stack.Screen name="PlayVideo" component={PlayVideo} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DetailCategories" component={DetailCategories} />
        <Stack.Screen name="Meeting" component={Meeting} />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
        <Stack.Screen name="Support" component={Support} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
