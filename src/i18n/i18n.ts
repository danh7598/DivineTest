import I18n from 'react-native-i18n';

import en from './locales/en';
import vi from './locales/vi';
import {store} from '../redux/store';

I18n.fallbacks = true;
I18n.translations = {
  en,
  vi,
};
I18n.locale = store.getState().app.language || 'en';
I18n.defaultLocale = 'en';

const t = (string: string) => I18n.translate(string);
export {t};
