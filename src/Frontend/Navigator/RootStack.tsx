import { createStackNavigator } from '@react-navigation/stack';

import { RootTab } from './RootTab';
import { Tutorial1, Tutorial2, Tutorial3 } from '../Screen/Tutorial/TutorialScreen';
import { WelcomeScreen } from '../Screen/Welcome/WelcomeScreen';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={WelcomeScreen} options={{ title: 'Splash' }} />
      <Stack.Screen name="TutorialScreen1" component={Tutorial1} options={{ title: 'Tutorial' }} />
      <Stack.Screen name="TutorialScreen2" component={Tutorial2} options={{ title: 'Tutorial' }} />
      <Stack.Screen name="TutorialScreen3" component={Tutorial3} options={{ title: 'Tutorial' }} />
      <Stack.Screen name="RootTab" component={RootTab} options={{ title: 'Home' }} />
    </Stack.Navigator>
  );
}
