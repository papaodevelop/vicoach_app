import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingFirst from '../screen/slapscreen/OnboardingFirst';
import Login from '../screen/login/Login';
import Register from '../screen/login/Register';
import Spapscreen1 from '../screen/slapscreen/Slapscreen1';
import ViewAll from '../screen/home/newestCourses/ViewAll';
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
import CourseDetail from '../screen/courseDetail/CourseDetail';

export default function Container() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Spapscreen1"
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
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
