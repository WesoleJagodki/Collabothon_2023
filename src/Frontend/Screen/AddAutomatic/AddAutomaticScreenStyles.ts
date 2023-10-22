import { Dimensions, StyleSheet } from 'react-native';
const screen_width = Dimensions.get('window').width;

export const addAutomatic = StyleSheet.create({
    toggleBadge: {
        width: screen_width * 0.37,
        height: screen_width * 0.12,
        backgroundColor: '#072537',
        paddingRight: 0,
        paddingLeft: 0,
    },
    toggleBox: {
        width: screen_width * 0.7,
        height: screen_width * 0.12,
        backgroundColor: '#041C2B',
        alignItems: 'center',
        paddingRight: 0,
        paddingLeft: 0,
        flexDirection: 'row',
        marginBottom: 47,
    },
    toggleText1: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'ws-bold',
        fontWeight: 500,
        marginLeft: 33,
    },
    toggleText2: {
        color: '#CAD1DB',
        fontSize: 16,
        fontFamily: 'ws-bold',
        fontWeight: 500,
        marginLeft: 38,
    },
    headerText: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 50,
    },
    image: {
        backgroundColor: '#041C2B',
        width: 24,
        height: 24,
    },
    imageBox: {
        width: screen_width * 0.8,
        height: screen_width * 1,
        backgroundColor: '#041C2B',
        marginBottom: 50,
    }

});
