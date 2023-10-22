import { Text, Box, Image, VStack } from '@gluestack-ui/themed';
import { commonStyle } from './CommonStyle';
import { Dimensions } from 'react-native';
import { textStyles } from '../TextStyle';
import { MonthlySpendingsGraph } from '../Components/MonthlySpendingsGraph';
import { SaldoBadgeDown, SaldoBadgeUp, Greeting } from '../Components/DashboardComponents';

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
    <VStack space="lg" style={commonStyle.appScreen}>
      <Greeting />
      <MonthlySpendingsGraph
        month={9}
        spendingGoal={80}
        thisMonth={thisMonth}
        lastMonth={lastMonth}
      />
      <SaldoBadgeDown />
      <SaldoBadgeUp />
    </VStack>
  );
}
