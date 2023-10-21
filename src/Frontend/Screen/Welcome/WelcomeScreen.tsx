import { Text, Box, Image } from '@gluestack-ui/themed';
import React, { useEffect } from 'react';
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';

import { welcomeScreen } from './WelcomeScreenStyle';
import { commonStyle } from '../CommonStyle';

const PRE_DELAY_MS = 500;
const ANIMATION_TIME_MS = 500;

export function WelcomeScreen({ navigation }: any) {
  const opacityModifier = useSharedValue(1.0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      opacityModifier.value = withTiming(0.0, {
        duration: ANIMATION_TIME_MS,
        easing: Easing.inOut(Easing.quad),
      });
    }, PRE_DELAY_MS);
    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('TutorialScreen1');
      setTimeout(() => {
        opacityModifier.value = 1.0;
      }, 100);
    }, PRE_DELAY_MS + ANIMATION_TIME_MS);
    return () => clearTimeout(timeout);
  });

  return (
    <Box
      style={commonStyle.appScreen}
      onTouchEnd={() => {
        navigation.navigate('TutorialScreen1');
      }}>
      <Animated.View style={[welcomeScreen.container, { opacity: opacityModifier }]}>
        <Image
          alt="applogo"
          size="full"
          source={require('../../Images/app_logo_savequest.png')}
          style={welcomeScreen.appLogo}
        />
        <Text style={welcomeScreen.appName}>SaveQuest</Text>
      </Animated.View>
    </Box>
  );
}
