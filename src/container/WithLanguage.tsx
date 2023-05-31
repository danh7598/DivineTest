import {View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../redux/store';

type Props = {
  children: JSX.Element;
};

const WithLanguage = ({children}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const language = useAppSelector(store => store.app.language);
  return <View>{children}</View>;
};

export default WithLanguage;
