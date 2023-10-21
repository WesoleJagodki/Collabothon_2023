import { Dimensions, StyleSheet } from 'react-native';
const screen_width = Dimensions.get('window').width;

export const loginScreen = StyleSheet.create({
    content_box: {
        width: screen_width * 0.8,
    },
    title: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'ws-bold',
        fontWeight: '700',
        wordWrap: 'break-word',
        paddingTop: 20,
    },
    subtitle: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'ws-regular',
        fontWeight: '500',
        lineHeight: 22.40,
        wordWrap: 'break-word',
        marginBottom: 40,
        marginTop: 9,
    },
    text: {
        color: '#A6AFBD',
        fontSize: 14,
        fontFamily: 'ws-regular',
        fontWeight: '600',
        lineHeight: 21,
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
        marginTop: 24,
        height: 64,
        backgroundColor: '#028760',
        borderRadius: 10,
        marginBottom: 20,
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
    text2: {
        color: '#A6AFBD',
        fontSize: 14,
        fontFamily: 'ws-regular',
        fontWeight: '600',
        lineHeight: 21,
        wordWrap: 'break-word',
        textAlign: 'right'
    },
    text3: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'ws-regular',
        fontWeight: '500',
        wordWrap: 'break-word',
        marginRight: 7,
    },
    text4: {
        color: '#028760',
        fontSize: 16,
        fontFamily: 'ws-regular',
        fontWeight: '700',
        wordWrap: 'break-word',
    },
    image: {
        height: screen_width*0.4,
        width: screen_width*0.7,
        marginTop: 50,
    }
});
