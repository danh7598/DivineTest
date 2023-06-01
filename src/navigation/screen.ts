import {screenName} from '../constant/screenName';
import {t} from '../i18n/i18n';
import Booking from '../screens/Booking';
import Home from '../screens/Home';



export const bottomTabs = [
  {
    name: screenName.HOME,
    component: Home,
    iconName: 'Home',
    title: t('Home'),
  },
  {
    name: screenName.BOOKING,
    component: Booking,
    iconName: 'Booking',
    title: t('Booking'),
  },
  {
    name: screenName.PROFILE,
    component: Home,
    iconName: 'Profile',
    title: t('Profile'),
  },
];
