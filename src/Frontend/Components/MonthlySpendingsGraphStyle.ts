import { Dimensions, StyleSheet } from 'react-native';
const screen_width = Dimensions.get('window').width;

import { textStyles } from '../TextStyle';

export const monthlySpendingsGraph = StyleSheet.create({
  legendText: {
    borderRightWidth: 1,
    borderRightColor: '#A6AFBD',
    padding: 5,
    justifyContent: 'center',
  },
  legendLabel: {
    ...textStyles.body,
    fontSize: 8
  }
});
