import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { commonStyle } from '../Screen/CommonStyle';
import { Dashboard } from '../Screen/Test';
import { rootTab } from './RootTabStyle';
import { Box, Image, Text } from '@gluestack-ui/themed';

const Tab = createBottomTabNavigator();

const TabIcon = (imageSource: any) => {
  return ({ focused, color, size }: any) => {
    const finalColor = focused ? '#028760' : '#A6AFBD';
    return (
      <Image
        alt="Dashboard Tab"
        source={imageSource}
        size="full"
        style={rootTab.tabImage}
        tintColor={finalColor}
        width={size}
        height={size}
      />
    );
  };
};

const TabLabel = ({ focused, color, position, children }: any) => {
  const finalColor = focused ? '#028760' : '#A6AFBD';
  return (
    <Box>
      <Text style={[rootTab.tabText, { color: finalColor }]}>{children}</Text>
    </Box>
  );
};

export const RootTab = function () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: rootTab.contents,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          tabBarIcon: TabIcon({ uri: require('../Images/icon_dashboard.png') }),
          tabBarLabel: TabLabel,
        }}
      />
      <Tab.Screen
        name="Advices"
        component={Dashboard}
        options={{
          title: 'Advices',
          tabBarIcon: TabIcon({ uri: require('../Images/icon-educatie.png') }),
          tabBarLabel: TabLabel,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Dashboard}
        options={{
          title: 'Add',
          tabBarIcon: TabIcon({ uri: require('../Images/icon-adauga.png') }),
          tabBarLabel: TabLabel,
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Dashboard}
        options={{
          title: 'Offers',
          tabBarIcon: TabIcon({ uri: require('../Images/PriceTag.png') }),
          tabBarLabel: TabLabel,
        }}
      />
      <Tab.Screen
        name="More"
        component={Dashboard}
        options={{
          title: 'More',
          tabBarIcon: TabIcon({ uri: require('../Images/icon-more.png') }),
          tabBarLabel: TabLabel,
        }}
      />
    </Tab.Navigator>
  );
};
