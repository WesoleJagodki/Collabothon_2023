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
  tutorialImage1: {
    width: screen_width * 0.73,
    height: screen_width * 0.60,
    textAlign: 'center'
  },
  tutorialImage2: {
    width: screen_width * 0.85,
    height: screen_width * 0.88,
    textAlign: 'center'
  },
  tutorialImage3: {
    width: screen_width * 0.85,
    height: screen_width * 0.86,
    textAlign: 'center'
  },
  tutorialHeading: {
    fontSize: 24,
    fontFamily: 'ws-bold',
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    paddingTop: 2,
    textAlign: 'center'
  },
  tutorialDesc: {
    fontSize: 14,
    color: '#CAD1DB',
    textAlign: 'center',
    width: screen_width * 0.9,
    fontFamily: 'ws-regular',
  },
  buttonNext: {
    position: 'absolute',
    bottom: 50,
    width: screen_width * 0.8,
    height: 56,
    ...textStyles.buttonText
  }
});
