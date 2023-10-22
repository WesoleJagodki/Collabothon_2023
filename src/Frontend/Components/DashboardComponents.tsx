import { MonthlySpendingsGraph } from '../Components/MonthlySpendingsGraph';
import { Text, Box, Badge, Image, VStack } from '@gluestack-ui/themed';

import { Dimensions, View } from 'react-native';
import { dashboard } from './DashboardStyles';
import { textStyles } from '../TextStyle';

export function SaldoBadgeDown() {
  return (
    <Badge shadow={4} rounded={20} style={dashboard.badge}>
      <Box style={dashboard.badgeBox}>
        <Text style={dashboard.saldoName}>Income</Text>
        <View style={dashboard.saldoView}>
          <Text style={dashboard.saldoValue}>$5632</Text>
          <Text style={dashboard.saldoProcentDown}>-23,3%</Text>
          <Image source={require('../Images/ic_Down.png')} style={dashboard.arrowDown} />
        </View>
        <Text style={dashboard.saldoComment}>Compared to ($7340 last month)</Text>
      </Box>
    </Badge>
  );
}

export function SaldoBadgeUp() {
  return (
    <Badge shadow={4} rounded={20} style={dashboard.badge}>
      <Box style={dashboard.badgeBox}>
        <Text style={dashboard.saldoName}>Income</Text>
        <View style={dashboard.saldoView}>
          <Text style={dashboard.saldoValue}>$5632</Text>
          <Text style={dashboard.saldoProcentUp}>-23,3%</Text>
          <Image source={require('../Images/ic_Up.png')} style={dashboard.arrowUp} />
        </View>
        <Text style={dashboard.saldoComment}>Compared to ($7340 last month)</Text>
      </Box>
    </Badge>
  );
}

export function Greeting() {
  return (
    <Box style={{ width: Dimensions.get('screen').width * 0.9, marginTop: 30 }}>
      <Box style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={[textStyles.bold, { fontSize: 24 }]}>
          Hello{' '}
          <Image
            alt="Waving Hand"
            width={22}
            height={22}
            source={{ uri: require('../Images/waving_hand.png') }}
          />
        </Text>
        <Image
          alt="Notifications"
          width={24}
          height={24}
          style={{ left: Dimensions.get('screen').width * 0.6 }}
          source={{ uri: require('../Images/doorbell.png') }}
        />
      </Box>
      <Text style={[textStyles.pretitle, { fontSize: 14 }]}>
        Every coin counts in the quest for{'\n'}financial freedom!
      </Text>
    </Box>
  );
}
