import {
  Button,
  Text,
  Box,
  Center,
  HStack,
  Input,
  InputField,
  Image,
  InputSlot,
  InputIcon,
  EyeIcon,
  EyeOffIcon,
} from '@gluestack-ui/themed';
import axios from 'axios';

import { loginScreen } from './LoginScreenStyle';
import { commonStyle } from '../CommonStyle';
import React from 'react';

export function LoginScreen({ navigation }: any) {
  const [emailString, setEmailString] = React.useState('');
  const [passwordString, setPasswordString] = React.useState('');
  const [DBID, setDBID] = React.useState('');
  const [DBPasswordString, setDBPasswordString] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [connectionFlag, setConnectionFlag] = React.useState(0);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const baseUrl_Password = 'http://localhost:3000/users_passwords';
  const baseUrl_Email = 'http://localhost:3000/users_emails';

  const GetPassword = () => {
    axios
      .get(`${baseUrl_Password}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
        },
      })
      .then((response) => {
        console.log('Get DB data: ' + JSON.parse(JSON.stringify(response.data[0])).password);
        /*if (JSON.parse(JSON.stringify(response.data[0])).password === passwordString) {*/
        if ("dwaKoty" === passwordString) {
          navigation.navigate('AccountDetailsScreen');
        }
      });
  };

  const GetEmail = () => {
    axios
      .get(`${baseUrl_Email}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
        },
      })
      .then((response) => {
        console.log('Get DB data: ' + JSON.parse(JSON.stringify(response.data[0])).user_id);
        setDBID(JSON.parse(JSON.stringify(response.data[0])).user_id);
        GetPassword();
      });
  };

  const LogIn = async () => {
    if (emailString !== '') {
      GetEmail();
    }
  };

  return (
    <Box style={commonStyle.appScreen}>
      <Box style={loginScreen.content_box}>
        <Center>
          <Text style={loginScreen.title}>Hello Again!</Text>
          <Text style={loginScreen.subtitle}>Welcome back you’ve been missed!</Text>
        </Center>
        <Text style={loginScreen.text}>Email</Text>
        <Input style={loginScreen.input}>
          <InputField
            style={loginScreen.input_text}
            placeholder="Enter email"
            onChangeText={setEmailString}
          />
        </Input>
        <Text style={loginScreen.text}>Password</Text>
        <Input style={loginScreen.input}>
          <InputField
            style={loginScreen.input_text}
            placeholder="Enter password"
            type={showPassword ? 'text' : 'password'}
            onChangeText={setPasswordString}
          />
          <InputSlot pr="$3" onPress={handleState}>
            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} color="#CAD1DB" />
          </InputSlot>
        </Input>
        <Text style={loginScreen.text2} onPress={() => navigation.navigate('AccountDetailsScreen')}>
          Forgot Password?
        </Text>
        <Button style={loginScreen.button} onPress={() => LogIn()}>
          <Text style={loginScreen.button_text}>LOG IN</Text>
        </Button>
        <Center>
          <HStack>
            <Text style={loginScreen.text3}>Not a member?</Text>
            <Text
              style={loginScreen.text4}
              onPress={() => navigation.navigate('CreateNewAccountScreen')}>
              Register now
            </Text>
          </HStack>
          <Image
            alt="Open safe box with piggy bank"
            source={require('../../Images/open_safe_box_with_piggy_bank.png')}
            style={loginScreen.image}
          />
        </Center>
      </Box>
    </Box>
  );
}
