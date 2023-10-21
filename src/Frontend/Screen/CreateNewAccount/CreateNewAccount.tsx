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
} from '@gluestack-ui/themed';
import React from 'react';

import { create_new_accountScreen } from './CreateNewAccountStyle';
import { commonStyle } from '../CommonStyle';

export function CreateNewAccountScreen({ navigation }: any) {
  const [checkboxValue, setCheckboxValue] = React.useState(false);

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
          <InputField style={create_new_accountScreen.input_text} placeholder="Enter email" />
        </Input>
        <Text style={create_new_accountScreen.text}>Password</Text>
        <Input style={create_new_accountScreen.input}>
          <InputField style={create_new_accountScreen.input_text} placeholder="Enter password" />
        </Input>
        <Text style={create_new_accountScreen.text}>Confirm password</Text>
        <Input style={create_new_accountScreen.input}>
          <InputField style={create_new_accountScreen.input_text} placeholder="Enter password" />
        </Input>
        <HStack>
          <Checkbox
            value="termsOfService"
            size="md"
            onChange={setCheckboxValue}
            isChecked={checkboxValue}>
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
          </Checkbox>
          <Text
            style={create_new_accountScreen.text2}
            onPress={() => navigation.navigate('AccountDetailsScreen')}>
            I agree to the Terms of Service and Privacy Policy
          </Text>
        </HStack>
        <Button
          style={create_new_accountScreen.button}
          onPress={() => navigation.navigate('RegistrationFinishedScreen')}>
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
