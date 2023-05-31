import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import {screenName} from '../constant/screenName';
import SignUp from '../screens/SignUp';
import {useAppSelector} from '../redux/store';
import {StatusBar} from 'react-native';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createStackNavigator();
const RootNavigation = () => {
  const language = useAppSelector(store => store.app.language);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenName.LOGIN}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={screenName.SIGN_UP}
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={screenName.FORGOT_PASSWORD}
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
