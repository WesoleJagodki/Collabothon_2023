import {Text, Box, Badge, Image} from '@gluestack-ui/themed';

import { commonStyle } from './CommonStyle';

import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';
import {chooseInterestsScreen} from "./ChooseInterests/ChooseInterestsScreenStyle";
import {dashboard} from "./DashboardStyles";

// legend: ['This month', 'Last month', 'Spending goal'],

type Props = {
  month: number;
  thisMonth: { dayOfMonth: string; spending: number }[];
  lastMonth: { dayOfMonth: string; spending: number }[];
  spendingGoal: number;
};

const MonthlySpendingsGraph = ({ month, thisMonth, lastMonth, spendingGoal }: Props) => {
  return (
    <LineChart
      data={{
        labels: ['01.09', '06.09', '12.09', '18.09', '24.09', '30.09'],
        datasets: [
          {
            withDots: false,
            color: (opacity = 1) => `rgba(106, 1, 143, 1)`,
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
          {
            withDots: false,
            color: (opacity = 1) => `rgba(162, 210, 252, 1)`,
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
          {
            withDots: false,
            color: (opacity = 1) => `rgba(0, 177, 106, 1)`,
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={Dimensions.get('window').width * 0.9} // from react-native
      height={180}
      yAxisLabel="$"
      chartConfig={{
        backgroundColor: '#041C2B',
        backgroundGradientFrom: '#041C2B',
        backgroundGradientTo: '#041C2B',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      bezier={true}
      style={{
        marginVertical: 8,
        borderRadius: 16,
        backgroundColor: '#041C2B',
      }}
    />
  );
};


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
  return (
    <Box style={commonStyle.appScreen}>
      <MonthlySpendingsGraph />
      <SaldoBadgeDown/>
      <SaldoBadgeUp/>
    </Box>
  );
}
