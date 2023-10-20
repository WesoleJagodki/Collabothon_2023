import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../Screen/Login/LoginScreen';
import { WelcomeScreen } from '../Screen/Welcome/WelcomeScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = function () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={WelcomeScreen} options={{ title: 'Welcome Screen' }} />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: 'Login Screen' }}
      />
    </Stack.Navigator>
  );
};
