import React, { useState, useEffect } from 'react';

import { Button, Text, Box, Image } from '@gluestack-ui/themed';
import AppLogo from "../../Images/app_logo_savequest.svg"
import { welcomeScreen } from './WelcomeScreenStyle';

import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const PRE_DELAY_MS = 500;
const ANIMATION_TIME_MS = 500;

export function WelcomeScreen({ navigation }: any) {
  const opacityModifier = useSharedValue(1.0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      opacityModifier.value = withTiming(0.0, { duration: ANIMATION_TIME_MS, easing: Easing.inOut(Easing.quad) })
    }, PRE_DELAY_MS)
    return () => clearTimeout(timeout)
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("RootTab");
    }, PRE_DELAY_MS + ANIMATION_TIME_MS)
    return () => clearTimeout(timeout)
  });

  return (
    <Box style={welcomeScreen.container}>
      <Animated.View style={[welcomeScreen.container, { opacity: opacityModifier }]}>
        <Image size='md' source={AppLogo} width={223} height={140}></Image>
        <Text style={welcomeScreen.appName}>SaveQuest</Text>
      </Animated.View>
    </Box >
  );
}
