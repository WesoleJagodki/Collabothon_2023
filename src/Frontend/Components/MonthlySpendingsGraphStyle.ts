import { Dimensions, StyleSheet } from 'react-native';
const screen_width = Dimensions.get('window').width;

import { textStyles } from '../TextStyle';

export const monthlySpendingsGraph = StyleSheet.create({
  legendText: {
    borderRightWidth: 1,
    borderRightColor: '#A6AFBD',
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  legendLabel: {
    ...textStyles.body,
    fontSize: 8,
    textAlign: 'center',
  },
  legendDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    alignSelf: 'center',
  }
});
