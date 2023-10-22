import { Text, VStack, Badge } from '@gluestack-ui/themed';
import { textStyles } from '../TextStyle';
import { ProgressChart } from 'react-native-chart-kit';

export function GoalBadge({ category, color, currentSpendings, goalSpendings }: any) {
  const progressData = {
    data: [currentSpendings / goalSpendings],
  };

  return (
    <Badge
      shadow={4}
      rounded={20}
      style={{ width: 240, height: 240, backgroundColor: '#041C2B', borderRadius: 10 }}>
      <VStack style={{ marginLeft: 10 }}>
        <Text style={[textStyles.body, { fontSize: 24 }]}>{category}</Text>
        <Text style={textStyles.pretitle}>
          ${currentSpendings}/${goalSpendings}
        </Text>
        <ProgressChart
          data={progressData}
          height={160}
          width={160}
          strokeWidth={16}
          radius={60}
          style={{ marginLeft: 20 }}
          chartConfig={{ color: (opacity = 1) => `rgba(${color}, ${opacity})` }}
          hideLegend={true}
        />
      </VStack>
      <VStack style={{ left: -120, top: 20 }}>
        <Text style={[textStyles.h2, { textAlign: 'center', color: `rgb(${color})` }]}>89%</Text>
        <Text style={[textStyles.bold, { textAlign: 'center', color: '#F6F6F6' }]}>SPENT</Text>
      </VStack>
    </Badge>
  );
}
