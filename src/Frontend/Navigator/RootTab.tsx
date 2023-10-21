import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { commonStyle } from '../Screen/CommonStyle';

import { Test } from '../Screen/Test';

const Tab = createBottomTabNavigator();

export const RootTab = function () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: commonStyle.appScreen.backgroundColor },
      }}>
      <Tab.Screen name="Test" component={Test} options={{ title: 'Test' }} />
    </Tab.Navigator>
  );
};
