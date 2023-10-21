import { Dimensions, StyleSheet } from 'react-native';

const screen_width = Dimensions.get('window').width;

export const welcomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#031622',
  },
  appName: {
    color: '#14C07F',
    fontSize: 24,
    fontFamily: 'Work Sans',
    fontWeight: '700',
    wordWrap: 'break-word',
  },
  appLogo: {
    width: screen_width / 2,
    height: screen_width / 3,
  },
});
