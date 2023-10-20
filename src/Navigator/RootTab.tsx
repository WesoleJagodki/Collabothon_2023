import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LoginScreen } from '../Screen/Login/LoginScreen';
import { WelcomeScreen } from '../Screen/Welcome/WelcomeScreen';

const Tab = createBottomTabNavigator();

export const RootTab = function () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Root" component={WelcomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
    </Tab.Navigator>
  );
};
