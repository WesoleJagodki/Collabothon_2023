import { Text, Box, Image, VStack, Button, ButtonText } from '@gluestack-ui/themed';
import React from 'react';

import { registrationFinishedScreen } from './RegistrationFinishedScreenStyle';
import { textStyles } from '../../TextStyle';
import { commonStyle } from '../CommonStyle';

export function RegistrationFinishedScreen({ navigation }: any) {
  return (
    <Box style={commonStyle.appScreen}>
      <VStack space="lg" style={{ flex: 1, justifyContent: 'space-between' }}>
        <Text style={[textStyles.h2, registrationFinishedScreen.topText]}>SaveQuest</Text>
        <VStack space="lg" style={registrationFinishedScreen.middleText}>
          <Text style={[textStyles.h2, { textAlign: 'center' }]}>Registration Successful!</Text>
          <Text style={[textStyles.small, { textAlign: 'center' }]}>
            Thank you for joining SaveQuest!{'\n'}We're excited to have you on board.
          </Text>
        </VStack>
        <Box style={[registrationFinishedScreen.middleText, { bottom: 50 }]}>
          <Button
            style={registrationFinishedScreen.letsStartButton}
            onPress={() => navigation.navigate('LoginScreen')}>
            <ButtonText>LET'S START</ButtonText>
          </Button>
        </Box>
        <Box style={registrationFinishedScreen.bottomItem}>
          <Image
            alt="Robot Image"
            source={require('../../Images/roboadvisor.png')}
            style={registrationFinishedScreen.roboImage}
          />
        </Box>
      </VStack>
    </Box>
  );
}
