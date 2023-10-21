import { Dimensions, StyleSheet } from 'react-native';
const screen_width = Dimensions.get('window').width;

export const tutorialScreen = StyleSheet.create({
  skipButton: {
    color: '#14C07F',
    fontSize: 24,
    fontFamily: 'Work Sans',
    fontWeight: '700',
    wordWrap: 'break-word',
  },
  tutorialImage: {
    width: screen_width / 1.1,
    height: screen_width / 1.2,
  },
  tutorialHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10
  },
  tutorialDesc: {
    fontSize: 14,
    color: '#CAD1DB',
    textAlign: 'center',
    width: screen_width * 0.9
  }
});
