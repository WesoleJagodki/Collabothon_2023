import { Text, Box, VStack, ScrollView, HStack } from '@gluestack-ui/themed';
import { commonStyle } from './CommonStyle';
import { Dimensions } from 'react-native';
import { textStyles } from '../TextStyle';
import { MonthlySpendingsGraph } from '../Components/MonthlySpendingsGraph';
import { SaldoBadgeDown, SaldoBadgeUp, Greeting } from '../Components/DashboardComponents';
import { GoalBadge } from '../Components/GoalBadge';
import { SavingsBadge } from '../Components/SavingsBadge';

function SectionHeader({ sectionName }: any) {
  return (
    <Box style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
      <Text style={[textStyles.bold, { fontSize: 16 }]}>{sectionName}</Text>
      <Text
        style={{
          left: Dimensions.get('screen').width * 0.6,
          color: '#028760',
          fontSize: 14,
        }}>
        See all
      </Text>
    </Box>
  );
}

const NatureImage = require('../Images/Nature1.png');
const PhoneImage = require('../Images/phone_image.png');

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
        <Greeting navigation={navigation} />
        <MonthlySpendingsGraph
          month={9}
          spendingGoal={80}
          thisMonth={thisMonth}
          lastMonth={lastMonth}
        />
        <SaldoBadgeDown />
        <SaldoBadgeUp />
        <VStack style={{ width: Dimensions.get('screen').width * 0.9 }}>
          <SectionHeader sectionName="Goals" />
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
          <SectionHeader sectionName="Savings" />
          <ScrollView horizontal={true}>
            <HStack space="md">
              <SavingsBadge
                savingName="Vacation"
                currentSaving={700}
                goalSaving={4000}
                stepSize={100}
                currentStep={7}
                stepsTotal={40}
                savingImage={{ uri: NatureImage }}
                savingColor="#017D8F"
              />
              <SavingsBadge
                savingName="iPhone15"
                currentSaving={500}
                goalSaving={1100}
                stepSize={50}
                currentStep={10}
                stepsTotal={22}
                savingImage={{ uri: PhoneImage }}
                savingColor="#760C58"
              />
            </HStack>
          </ScrollView>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
