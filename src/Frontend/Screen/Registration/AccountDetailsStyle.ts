import { Dimensions, StyleSheet } from 'react-native';
const screen_width = Dimensions.get('window').width;

export const account_detailsScreen = StyleSheet.create({
  hstack: {
    top: -screen_width * 0.15,
    left: -screen_width * 0.24 + 32,
  },
  arrow: {
    width: screen_width * 0.082,
    height: screen_width * 0.07,
  },
  image_box: {
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    borderRadius: 35,
    marginBottom: 13.6,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'ws-bold',
    fontWeight: '700',
    wordWrap: 'break-word',
    marginLeft: 20,
    paddingTop: 6,
  },
  image: {
    width: screen_width * 0.082,
    height: screen_width * 0.07,
  },
  content_box: {
    width: screen_width * 0.8,
  },
  text: {
    color: '#A6AFBD',
    fontSize: 14,
    fontFamily: 'ws-regular',
    fontWeight: '500',
    lineHeight: 19.6,
    wordWrap: 'break-word',
  },
  input: {
    borderRadius: 10,
    borderColor: '#F6F6F6',
    marginBottom: 18,
    marginTop: 5,
    borderWidth: 0.75,
    height: 50,
  },
  input_text: {
    color: '#CAD1DB',
    fontSize: 14,
    fontFamily: 'ws-regular',
    fontWeight: '500',
    lineHeight: 19.6,
    wordWrap: 'break-word',
  },
  button: {
    marginTop: 21,
    height: 64,
    backgroundColor: '#028760',
    borderRadius: 10,
  },
  button_text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'ws-bold',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.64,
    wordWrap: 'break-word',
  },
});
