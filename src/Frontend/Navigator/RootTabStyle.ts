import { Dimensions, StyleSheet } from 'react-native';
// const screen_width = Dimensions.get('window').width;

export const rootTab = StyleSheet.create({
  contents: {
    backgroundColor: '#081D29',
    paddingBottom: 5,
    paddingTop: 5,
    height: 80,
  },
  tabText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.4,
    marginBottom: 20,
  },
  tabImage: {},
});
