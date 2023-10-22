
import { MonthlySpendingsGraph } from '../Components/MonthlySpendingsGraph';
import {Text, Box, Badge, Image} from '@gluestack-ui/themed';

import { commonStyle } from './CommonStyle';

import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';
import {chooseInterestsScreen} from "./ChooseInterests/ChooseInterestsScreenStyle";
import {dashboard} from "./DashboardStyles";

// legend: ['This month', 'Last month', 'Spending goal'],

function SaldoBadgeDown() {
  return (
      <Badge shadow={4} rounded={20} style={dashboard.badge}>
        <Box style={dashboard.badgeBox}>
          <Text style={dashboard.saldoName}>Income</Text>
          <View style={dashboard.saldoView}>
            <Text style={dashboard.saldoValue}>$5632</Text>
            <Text style={dashboard.saldoProcentDown}>-23,3%</Text>
            <Image
                source={require('../Images/ic_Down.png')}
                style={dashboard.arrowDown}
            />
          </View>
          <Text style={dashboard.saldoComment}>Compared to ($7340 last month)</Text>
        </Box>
      </Badge>
  );
}

function SaldoBadgeUp() {
  return (
      <Badge shadow={4} rounded={20} style={dashboard.badge}>
        <Box style={dashboard.badgeBox}>
          <Text style={dashboard.saldoName}>Income</Text>
          <View style={dashboard.saldoView}>
            <Text style={dashboard.saldoValue}>$5632</Text>
            <Text style={dashboard.saldoProcentUp}>-23,3%</Text>
            <Image
                source={require('../Images/ic_Up.png')}
                style={dashboard.arrowUp}
            />
          </View>
          <Text style={dashboard.saldoComment}>Compared to ($7340 last month)</Text>
        </Box>
      </Badge>
  );
}


export function Dashboard({ navigation }: any) {
  // TODO: Add real data
  const thisMonth = [
    { dayOfMonth: 1, spending: Math.random() * 100 },
    { dayOfMonth: 2, spending: Math.random() * 100 },
    { dayOfMonth: 3, spending: Math.random() * 100 },
    { dayOfMonth: 4, spending: Math.random() * 100 },
    { dayOfMonth: 5, spending: Math.random() * 100 },
  ];
  const lastMonth = [
    { dayOfMonth: 1, spending: Math.random() * 100 },
    { dayOfMonth: 2, spending: Math.random() * 100 },
    { dayOfMonth: 3, spending: Math.random() * 100 },
    { dayOfMonth: 4, spending: Math.random() * 100 },
    { dayOfMonth: 5, spending: Math.random() * 100 },
  ];
  return (
    <Box style={commonStyle.appScreen}>
      <MonthlySpendingsGraph
        month={9}
        spendingGoal={80}
        thisMonth={thisMonth}
        lastMonth={lastMonth}
      />
      <SaldoBadgeDown/>
      <SaldoBadgeUp/>
    </Box>
  );
}
