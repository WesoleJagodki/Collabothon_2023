import { Text, Box, Image, Button, ButtonText } from '@gluestack-ui/themed';

import { signuploginScreen } from './SignupLoginScreenStyle';
import { commonStyle } from '../CommonStyle';

export function SignupLoginScreen({ navigation }: any) {
  return (
    <Box style={commonStyle.appScreen}>
      <Image
        source={require('../../Images/login.png')}
        style={signuploginScreen.loginImage}
        alt="piggy"
      />
      <Text style={signuploginScreen.loginText1}>SaveQuest</Text>
      <Text style={signuploginScreen.loginText2}>
        Chart Your Course, Complete Quests, and Celebrate Your Savings Success!
      </Text>
      <Button style={signuploginScreen.button1} onPress={() => navigation.navigate('LoginScreen')}>
        <ButtonText>LOG IN</ButtonText>
      </Button>
      <Button
        style={signuploginScreen.button2}
        onPress={() => navigation.navigate('CreateNewAccountScreen')}>
        <ButtonText>SING IN</ButtonText>
      </Button>
    </Box>
  );
}
