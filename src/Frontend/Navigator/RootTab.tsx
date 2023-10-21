import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { commonStyle } from '../Screen/CommonStyle';

const Tab = createBottomTabNavigator();

export const RootTab = function () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: commonStyle.appScreen.backgroundColor },
      }}
    />
  );
};
