import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { commonStyle } from '../Screen/CommonStyle';
import { LoginScreen } from '../Screen/Login/LoginScreen';

const Tab = createBottomTabNavigator();

export const RootTab = function () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: commonStyle.appScreen.backgroundColor },
      }}>
      <Tab.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
    </Tab.Navigator>
  );
};
