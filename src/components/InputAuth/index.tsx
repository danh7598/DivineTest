import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {AppImages} from '../../assets/images';

type Props = {
  title?: string;
  styleContainer?: ViewStyle;
  value: string;
  onChange: (value: string) => void;
  textInputProps?: TextInputProps;
  type?: string;
  rightButton?: JSX.Element;
  error: any;
};

const InputAuth = ({
  title,
  styleContainer,
  value,
  onChange,
  textInputProps,
  type,
  rightButton,
  error,
}: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(true);
  return (
    <View style={[styles.container, styleContainer]}>
      {title && <Text style={styles.textTitle}>{title}</Text>}
      <View style={styles.viewTextInput}>
        <TextInput
          value={value}
          onChangeText={onChange}
          style={styles.textInput}
          secureTextEntry={type === 'password' ? isShowPassword : false}
          {...textInputProps}
        />
        {rightButton || type === 'password' ? (
          <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
            <Image source={AppImages.eyeSlash} />
          </TouchableOpacity>
        ) : undefined}
      </View>
      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
};

export default InputAuth;
