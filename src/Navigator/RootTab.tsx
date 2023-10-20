import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LoginScreen } from '../Screen/Login/LoginScreen';
import { WelcomeScreen } from '../Screen/Welcome/WelcomeScreen';
import { commonStyle } from '../Screen/CommonStyle';

const Tab = createBottomTabNavigator();

export const RootTab = function () {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: commonStyle.appScreen.backgroundColor } }}>
      <Tab.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
    </Tab.Navigator>
  );
};
