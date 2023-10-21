import { Dimensions, StyleSheet } from 'react-native';
import { textStyles } from '../../TextStyle';
const screen_width = Dimensions.get('window').width;

export const chooseInterestsScreen = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
  },
  text1: {
    fontSize: 24,
    color: '#CAD1DB',
  },
  text2: {
    fontSize: 16,
    color: '#CAD1DB',
    textAlign: 'center',
  },
  headerBadgeText: {
    fontSize: 16,
    color: '#CAD1DB',
  },
  contentBadgeText: {
    fontSize: 16,
    color: '#CAD1DB',
  },
  arrow: {
    height: 24,
    width: 24,
  },
  imageBox: {
    alignSelf: 'flex-start',
  },
  image: {
    // height: screen_height*0.4,
    width: screen_width * 0.8,
    height: screen_width * 0.35,
    borderRadius: 20,
  },
  badge: {
    width: screen_width * 0.8,
    height: screen_width * 0.6,
    backgroundColor: '#081E2D',
    paddingRight: 0,
    paddingLeft: 0,
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
});
