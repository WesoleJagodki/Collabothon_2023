import { Dimensions, StyleSheet } from 'react-native';

import { textStyles } from '../../TextStyle';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

export const tutorialScreen = StyleSheet.create({
  skipButton: {
    ...textStyles.small,
    position: 'absolute',
    top: screen_width * 0.1,
    right: screen_width * 0.08,
  },
  tutorialImage1: {
    width: screen_width * 0.73,
    height: screen_width * 0.6,
    textAlign: 'center',
  },
  tutorialImage2: {
    width: screen_width * 0.85,
    height: screen_width * 0.88,
    textAlign: 'center',
  },
  tutorialImage3: {
    width: screen_width * 0.85,
    height: screen_width * 0.86,
    textAlign: 'center',
  },
  tutorialHeading: {
    fontSize: 24,
    fontFamily: 'ws-bold',
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    paddingTop: 2,
    textAlign: 'center',
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
    height: 64,
    backgroundColor: '#028760',
    borderRadius: 10,
    marginBottom: 20,
    ...textStyles.buttonText,
  },
  second_image: {
    width: screen_width * 0.14,
    height: screen_width * 0.016,
    marginTop: 30,
  },
});
