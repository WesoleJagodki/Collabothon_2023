import { createStackNavigator } from '@react-navigation/stack';

import { RootTab } from './RootTab';
import { TutorialScreen } from '../Screen/Tutorial/TutorialScreen';
import { WelcomeScreen } from '../Screen/Welcome/WelcomeScreen';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={WelcomeScreen} options={{ title: 'Splash' }} />
      <Stack.Screen
        name="TutorialScreen"
        component={TutorialScreen}
        options={{ title: 'Tutorial' }}
      />
      <Stack.Screen name="RootTab" component={RootTab} options={{ title: 'Home' }} />
    </Stack.Navigator>
  );
}
