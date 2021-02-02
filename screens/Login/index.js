import React from 'react';
import {View, Button} from 'react-native';
import Styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Button onPress={() => navigation.navigate('Home')} title="Go Home" />
    </View>
  );
};

export default Login;
