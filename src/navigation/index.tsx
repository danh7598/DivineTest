import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import {screenName} from '../constant/screenName';
import SignUp from '../screens/SignUp';
import {useAppSelector} from '../redux/store';
import ForgotPassword from '../screens/ForgotPassword';
import {navigationRef} from './navigationHelper';
import Home from '../screens/Home';
import Booking from '../screens/Booking';
import {bottomTabs} from './screen';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AppImages} from '../assets/images';
import TextGradient from '../components/TextGradient';
import {pxScale} from '../helpers';
import {colors} from '../constant/colors';
import LinearGradient from 'react-native-linear-gradient';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  const language = useAppSelector(store => store.app.language);
  const token = useAppSelector(store => store.auth.token);
  const RootTab = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabbarStyle,
          tabBarBackground: () => (
            <LinearGradient
              colors={colors.gradientBg}
              style={StyleSheet.absoluteFill}
            />
          ),
        }}>
        {bottomTabs.map(tab => (
          <Tab.Screen
            name={tab.name}
            component={tab.component}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View style={styles.containerTabbarIcon}>
                  <Image
                    style={styles.imgTabbar}
                    source={
                      focused
                        ? AppImages[`iconTab${tab.iconName}`]
                        : AppImages[`iconTab${tab.iconName}Inactive`]
                    }
                  />
                  {focused ? (
                    <TextGradient style={styles.textActiveTab}>
                      {tab.name}
                    </TextGradient>
                  ) : (
                    <Text style={styles.textInactiveTab}>{tab.name}</Text>
                  )}
                </View>
              ),
            }}
          />
        ))}
        {/* <Tab.Screen name={screenName.HOME} component={Home} />
        <Tab.Screen name={screenName.PROFILE} component={Home} />
        <Tab.Screen name={screenName.BOOKING} component={Booking} /> */}
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={token ? screenName.ROOT_TAB : screenName.LOGIN}>
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
        <Stack.Screen
          name={screenName.ROOT_TAB}
          component={RootTab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  containerTabbarIcon: {
    alignItems: 'center',
  },
  imgTabbar: {
    width: pxScale.wp(24),
    height: pxScale.wp(24),
  },
  textInactiveTab: {
    fontSize: pxScale.fontSize(16),
    color: colors['#C1C7CD'],
    textTransform: 'capitalize',
    marginTop: pxScale.hp(8),
  },
  textActiveTab: {
    fontSize: pxScale.fontSize(16),
    textTransform: 'capitalize',
    marginTop: pxScale.hp(8),
  },
  tabbarStyle: {
    height: pxScale.hp(136),
    borderTopWidth: 0,
  },
});
