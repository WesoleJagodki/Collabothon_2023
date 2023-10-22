import { Text, Box, Image, VStack, ScrollView, HStack } from '@gluestack-ui/themed';
import { commonStyle } from './CommonStyle';
import { Dimensions } from 'react-native';
import { textStyles } from '../TextStyle';
import { MonthlySpendingsGraph } from '../Components/MonthlySpendingsGraph';
import { SaldoBadgeDown, SaldoBadgeUp, Greeting } from '../Components/DashboardComponents';
import { GoalBadge } from '../Components/GoalBadge';

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
    <ScrollView style={{ backgroundColor: commonStyle.appScreen.backgroundColor }}>
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
        <VStack style={{ width: Dimensions.get('screen').width * 0.9 }}>
          <Box style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
            <Text style={[textStyles.bold, { fontSize: 16 }]}>Goals</Text>
            <Text
              style={{
                left: Dimensions.get('screen').width * 0.6,
                color: '#028760',
                fontSize: 14,
              }}>
              See all
            </Text>
          </Box>
          <ScrollView horizontal={true}>
            <HStack space="md">
              <GoalBadge
                category="Home"
                color="1, 125, 143"
                currentSpendings={897}
                goalSpendings={1000}
              />
              <GoalBadge
                category="Food"
                color="68, 3, 74"
                currentSpendings={279}
                goalSpendings={800}
              />
              <GoalBadge
                category="Car"
                color="74, 3, 41"
                currentSpendings={47}
                goalSpendings={100}
              />
            </HStack>
          </ScrollView>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
