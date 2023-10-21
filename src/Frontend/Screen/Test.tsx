import { Text, Box } from '@gluestack-ui/themed';

import { commonStyle } from './CommonStyle';

import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const MonthlySpendingsGraph = () => {
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
        legend: ['This month', 'Last month', 'Spending goal'],
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

export function Dashboard({ navigation }: any) {
  return (
    <Box style={commonStyle.appScreen}>
      <MonthlySpendingsGraph />
    </Box>
  );
}
