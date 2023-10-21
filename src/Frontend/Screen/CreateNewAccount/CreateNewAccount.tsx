import {
  Button,
  Text,
  Box,
  Center,
  HStack,
  Input,
  InputField,
  Image,
  Checkbox,
  CheckIcon,
  CheckboxIcon,
  CheckboxIndicator,
  InputSlot,
  InputIcon,
  EyeIcon,
  EyeOffIcon,
} from '@gluestack-ui/themed';
import axios from 'axios';
import React from 'react';

import { commonStyle } from '../CommonStyle';
import { create_new_accountScreen } from './CreateNewAccountStyle';

export function CreateNewAccountScreen({ navigation }: any) {
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [emailString, setEmailString] = React.useState('');
  const [passwordString, setPasswordString] = React.useState('');
  const [confirmPasswordString, setConfirmPasswordString] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const baseUrl_User = 'http://localhost:3000/users';

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const PostSimpleUser = () => {
    axios
      .post(`${baseUrl_User}`, {
        first_name: ' ',
        last_name: ' ',
        email: emailString,
        password: passwordString,
        date_of_birth: ' ',
        sex: ' ',
      })
      .then((response) => {
        console.log('Create user: ' + JSON.stringify(response.data));
        console.log('Create user: ' + emailString + ' / ' + passwordString);
      });
  };

  const CreateNewUser = () => {
    if (
      emailString !== '' &&
      passwordString !== '' &&
      confirmPasswordString !== '' &&
      checkboxValue === true
    ) {
      if (passwordString === confirmPasswordString) {
        PostSimpleUser();
      }
    } else {
      console.log("Create New User Error");
    }
  };

  return (
    <Box style={commonStyle.appScreen}>
      <Box style={create_new_accountScreen.content_box}>
        <Center>
          <Text style={create_new_accountScreen.title}>Create New Account</Text>
          <Text style={create_new_accountScreen.subtitle}>
            Ready to level up your finances? Embark on your savings adventure!{' '}
          </Text>
        </Center>
        <Text style={create_new_accountScreen.text}>Email</Text>
        <Input style={create_new_accountScreen.input}>
          <InputField
            style={create_new_accountScreen.input_text}
            placeholder="Enter email"
            onChangeText={setEmailString}
          />
        </Input>
        <Text style={create_new_accountScreen.text}>Password</Text>
        <Input style={create_new_accountScreen.input}>
          <InputField
            style={create_new_accountScreen.input_text}
            placeholder="Enter password"
            type={showPassword ? 'text' : 'password'}
            onChangeText={setPasswordString}
          />
          <InputSlot pr="$3" onPress={handleState}>
            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} color="#CAD1DB" />
          </InputSlot>
        </Input>
        <Text style={create_new_accountScreen.text}>Confirm password</Text>
        <Input style={create_new_accountScreen.input}>
          <InputField
            style={create_new_accountScreen.input_text}
            placeholder="Enter password"
            type={showPassword ? 'text' : 'password'}
            onChangeText={setConfirmPasswordString}
          />
          <InputSlot pr="$3" onPress={handleState}>
            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} color="#CAD1DB" />
          </InputSlot>
        </Input>
        <HStack>
          <Checkbox size="md" onChange={setCheckboxValue} isChecked={checkboxValue}>
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
          </Checkbox>
          <Text style={create_new_accountScreen.text2}>
            I agree to the Terms of Service and Privacy Policy
          </Text>
        </HStack>
        <Button style={create_new_accountScreen.button} onPress={() => CreateNewUser()}>
          <Text style={create_new_accountScreen.button_text}>GET STARTED</Text>
        </Button>
        <Center>
          <HStack>
            <Text style={create_new_accountScreen.text3}>Already have an account?</Text>
            <Text
              style={create_new_accountScreen.text4}
              onPress={() => navigation.navigate('LoginScreen')}>
              Log In
            </Text>
          </HStack>
        </Center>
      </Box>
      <Image
        alt="Open home safe with money"
        source={require('../../Images/open_home_safe_with_money.png')}
        style={create_new_accountScreen.image}
      />
    </Box>
  );
}
