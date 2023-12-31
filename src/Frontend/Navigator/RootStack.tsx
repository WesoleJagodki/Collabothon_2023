import { createStackNavigator } from '@react-navigation/stack';

import { RootTab } from './RootTab';
import { AccountDetails } from '../Screen/AccountDetails/AccountDetails';
import { CreateNewAccountScreen } from '../Screen/CreateNewAccount/CreateNewAccount';
import { LoginScreen } from '../Screen/Login/LoginScreen';
import { RegistrationFinishedScreen } from '../Screen/RegistrationFinished/RegistrationFinishedScreen';
import { SignupLoginScreen } from '../Screen/SignupLogin_Screen/SignupLoginScreen';
import { CameraScreen } from '../Screen/Camera/CameraScreen';
import { Tutorial1, Tutorial2, Tutorial3 } from '../Screen/Tutorial/TutorialScreen';
import { WelcomeScreen } from '../Screen/Welcome/WelcomeScreen';
import { ChooseInterestsScreen } from '../Screen/ChooseInterests/ChooseInterestsScreen';
import {Notifications} from "../Screen/Notifications/Notifications";

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={WelcomeScreen} options={{ title: 'Splash' }} />
      <Stack.Screen name="TutorialScreen1" component={Tutorial1} options={{ title: 'Tutorial' }} />
      <Stack.Screen name="TutorialScreen2" component={Tutorial2} options={{ title: 'Tutorial' }} />
      <Stack.Screen name="TutorialScreen3" component={Tutorial3} options={{ title: 'Tutorial' }} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ title: 'Camera' }} />
      <Stack.Screen
        name="CreateNewAccountScreen"
        component={CreateNewAccountScreen}
        options={{ title: 'Create New Account' }}
      />
      <Stack.Screen
        name="SignupLoginScreen"
        component={SignupLoginScreen}
        options={{ title: 'Signup/Login' }}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen
        name="AccountDetailsScreen"
        component={AccountDetails}
        options={{ title: 'Account Details' }}
      />
      <Stack.Screen
        name="RegistrationFinishedScreen"
        component={RegistrationFinishedScreen}
        options={{ title: 'Registration Finished' }}
      />
        <Stack.Screen name="Notifications" component={Notifications} options={{ title: 'Notifications' }} />
      <Stack.Screen name="RootTab" component={RootTab} options={{ title: 'Dashboard' }} />
    </Stack.Navigator>
  );
}
