import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { Center } from '@gluestack-ui/config/build/theme';
import { monthlySpendingsGraph } from './MonthlySpendingsGraphStyle';
import { textStyles } from '../TextStyle';

export type DailySpends = {
  dayOfMonth: number;
  spending: number;
};

export type Props = {
  month: number;
  thisMonth: DailySpends[];
  lastMonth: DailySpends[];
  spendingGoal: number;
};

export const MonthlySpendingsGraph = ({ month, thisMonth, lastMonth, spendingGoal }: Props) => {
  const uniqueDays = new Set(
    thisMonth
      .map(({ dayOfMonth }: DailySpends) => {
        return dayOfMonth;
      })
      .concat(
        lastMonth.map(({ dayOfMonth }: DailySpends) => {
          return dayOfMonth;
        }),
      ),
  );

  const xData = new Array(...uniqueDays).map((day: number) => {
    return `${day}`.padStart(2, '0') + '.' + `${month}`.padStart(2, '0');
  });

  const yThisMonth = thisMonth.map(({ spending }) => {
    return spending;
  });

  const yPreviousMonth = lastMonth.map(({ spending }) => {
    return spending;
  });

  const yGoal = new Array(uniqueDays.size).fill(spendingGoal);

  const thisMonthColor = 'rgba(106, 1, 143, 1)';
  const previousMonthColor = 'rgba(162, 210, 252, 1)';
  const goalColor = 'rgba(0, 177, 106, 1)';

  return (
    <VStack
      style={{
        backgroundColor: '#041C2B',
        alignItems: 'center',
      }}>
      <LineChart
        data={{
          labels: xData,
          datasets: [
            {
              withDots: false,
              color: (opacity = 1) => thisMonthColor,
              data: yThisMonth,
            },
            {
              withDots: false,
              color: (opacity = 1) => previousMonthColor,
              data: yPreviousMonth,
            },
            {
              withDots: false,
              color: (opacity = 1) => goalColor,
              data: yGoal,
            },
          ],
        }}
        width={Dimensions.get('window').width * 0.9}
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
      <HStack
        space="sm"
        style={{
          flex: 1,
          borderTopWidth: 1,
          borderTopColor: '#A6AFBD',
        }}>
        <HStack space="sm" style={monthlySpendingsGraph.legendText}>
          <Text style={[monthlySpendingsGraph.legendLabel, { color: thisMonthColor }]}>-</Text>
          <Text style={monthlySpendingsGraph.legendLabel}>This month</Text>
        </HStack>
        <HStack space="sm" style={monthlySpendingsGraph.legendText}>
          <Text style={[monthlySpendingsGraph.legendLabel, { color: thisMonthColor }]}>-</Text>
          <Text style={monthlySpendingsGraph.legendLabel}>Last month</Text>
        </HStack>
        <HStack space="sm" style={[monthlySpendingsGraph.legendText, { borderRightWidth: 0 }]}>
          <Text style={[monthlySpendingsGraph.legendLabel, { color: thisMonthColor }]}>-</Text>
          <Text style={monthlySpendingsGraph.legendLabel}>Spending goal</Text>
        </HStack>
      </HStack>
    </VStack>
  );
};
