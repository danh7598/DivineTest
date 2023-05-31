/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import {store, persistor} from './src/redux/store';
import RootNavigation from './src/navigation';
import './src/i18n/i18n';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/components/Toast/configToast';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <RootNavigation />
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
};

export default App;
