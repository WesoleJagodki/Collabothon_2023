import {Button, Text, Box, Center, HStack, Input, InputField, Image} from '@gluestack-ui/themed';

import { commonStyle } from '../CommonStyle';
import {loginScreen} from "./LoginScreenStyle";

export function LoginScreen({ navigation }: any) {
  return (
    <Box style={commonStyle.appScreen}>
        <Box style={loginScreen.content_box}>
            <Center>
                <Text style={loginScreen.title}>Hello Again!</Text>
                <Text style={loginScreen.subtitle}>Welcome back you’ve been missed!</Text>
            </Center>
            <Text style={loginScreen.text}>Email</Text>
            <Input style={loginScreen.input}>
                <InputField style={loginScreen.input_text} placeholder="Enter email" />
            </Input>
            <Text style={loginScreen.text}>Password</Text>
            <Input style={loginScreen.input}>
                <InputField style={loginScreen.input_text} placeholder="Enter password" />
            </Input>
            <Text style={loginScreen.text2} onPress={() => navigation.navigate('RegistrationScreen')}>Forgot Password?</Text>
            <Button style={loginScreen.button} onPress={() => navigation.navigate('RegistrationScreen')}><Text style={loginScreen.button_text}>LOG IN</Text></Button>
            <Center>
                <HStack>
                    <Text style={loginScreen.text3}>Not a member?</Text>
                    <Text style={loginScreen.text4} onPress={() => navigation.navigate('RegistrationScreen')}>Register now</Text>
                </HStack>
                <Image alt="Open safe box with piggy bank" source={require("../../Images/open_safe_box_with_piggy_bank.png")} style={loginScreen.image}/>
            </Center>
        </Box>
    </Box>
  );
}
