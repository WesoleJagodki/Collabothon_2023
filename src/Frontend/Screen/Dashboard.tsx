import { Box } from '@gluestack-ui/themed';
import { commonStyle } from './CommonStyle';
import { MonthlySpendingsGraph } from '../Components/MonthlySpendingsGraph';

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
    </Box>
  );
}
