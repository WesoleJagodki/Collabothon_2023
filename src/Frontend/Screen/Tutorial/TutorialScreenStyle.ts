import { Dimensions, StyleSheet } from 'react-native';
import { textStyles } from '../../TextStyle';
const screen_width = Dimensions.get('window').width;

export const tutorialScreen = StyleSheet.create({
  skipButton: {
    ...textStyles.small,
    position: "absolute",
    top: 20,
    right: 20
  },
  tutorialImage: {
    width: screen_width * 0.8,
    height: screen_width * 0.655,
    textAlign: 'center'
  },
  tutorialHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  tutorialDesc: {
    fontSize: 14,
    color: '#CAD1DB',
    textAlign: 'center',
    width: screen_width * 0.9,
  },
  buttonNext: {
    position: 'absolute',
    bottom: 50,
    width: screen_width * 0.8,
    height: 56,
    ...textStyles.buttonText
  }
});
