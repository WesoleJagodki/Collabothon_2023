import { Dimensions, StyleSheet } from 'react-native';
import { textStyles } from '../../TextStyle';
const screen_width = Dimensions.get('window').width;

export const signuploginScreen = StyleSheet.create({
  box: {
    width: screen_width * 0.8,
    justifyContent: 'center',
  },

  loginImage: {
    height: screen_width * 0.6,
    width: screen_width * 0.9,
  },

  loginText1: {
    fontSize: 64,
    color: '#14C07F',
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: -1.28,
    fontFamily: 'ws-regular',
    paddingTop: 40,
  },

  loginText2: {
    fontSize: 16,
    color: '#CAD1DB',
    textAlign: 'center',
    width: screen_width * 0.9,
    fontFamily: 'ws-regular',
    marginTop: 25,
    marginBottom: 70,
  },

  button1: {
    width: screen_width * 0.8,
    height: 56,
    backgroundColor: '#028760',
    marginBottom: 40,
  },

  button2: {
    width: screen_width * 0.8,
    height: 56,
    backgroundColor: '#028760',
    marginBottom: 96,
  },
});
