import { Dimensions, StyleSheet } from 'react-native';

const screen_width = Dimensions.get('window').width;

export const registrationFinishedScreen = StyleSheet.create({
  topText: {
    flex: 0,
    margin: 20,
    marginTop: 60,
    color: '#016B4E',
  },
  middleText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bottomItem: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 60,
  },
  letsStartButton: {
    width: screen_width * 0.8,
    height: 56,
    backgroundColor: '#028760',
  },
  roboImage: {
    width: screen_width,
    height: screen_width,
  },
});
