import { Text, Box, Image, Button, ButtonText } from '@gluestack-ui/themed';
import { commonStyle } from '../CommonStyle';
import { signuploginScreen } from './SignupLoginScreenStyle';

export function SignupLoginScreen({ navigation }: any) {
  return (
    <Box style={commonStyle.appScreen}>
      <Image source={require('../../Images/login.png')} style={signuploginScreen.loginImage} />
      <Text style={signuploginScreen.loginText1}>SaveQuest</Text>
      <Text style={signuploginScreen.loginText2}>
        Chart Your Course, Complete Quests, and Celebrate Your Savings Success!
      </Text>
      <Button style={signuploginScreen.button1} onPress={() => navigation.navigate('LoginScreen')}>
        <ButtonText>LOG IN</ButtonText>
      </Button>
      <Button
        style={signuploginScreen.button2}
        onPress={() => navigation.navigate('RegistrationScreen')}>
        <ButtonText>SING IN</ButtonText>
      </Button>
    </Box>
  );
}
