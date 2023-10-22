import { Box, Image, Text } from '@gluestack-ui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { rootTab } from './RootTabStyle';
import { Dashboard } from '../Screen/Dashboard';
import {AddAutomaticScreen} from "../Screen/AddAutomatic/AddAutomaticScreen";

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

const IconOffers = require('../Images/PriceTag.png');
const IconAdd = require('../Images/icon-adauga.png');
const IconAdvices = require('../Images/icon-educatie.png');
const IconMore = require('../Images/icon-more.png');
const IconDashboard = require('../Images/icon_dashboard.png');

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
          tabBarIcon: TabIcon({ uri: IconDashboard }),
          tabBarLabel: TabLabel,
        }}
      />
      <Tab.Screen
        name="Advices"
        component={Dashboard}
        options={{
          title: 'Advices',
          tabBarIcon: TabIcon({ uri: IconAdvices }),
          tabBarLabel: TabLabel,
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddAutomaticScreen}
        options={{
          title: 'Add',
          tabBarIcon: TabIcon({ uri: IconAdd }),
          tabBarLabel: TabLabel,
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Dashboard}
        options={{
          title: 'Offers',
          tabBarIcon: TabIcon({ uri: IconOffers }),
          tabBarLabel: TabLabel,
        }}
      />
      <Tab.Screen
        name="More"
        component={Dashboard}
        options={{
          title: 'More',
          tabBarIcon: TabIcon({ uri: IconMore }),
          tabBarLabel: TabLabel,
        }}
      />
    </Tab.Navigator>
  );
};
