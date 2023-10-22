import { Dimensions, StyleSheet } from 'react-native';
const screen_width = Dimensions.get('window').width;

export const dashboard = StyleSheet.create({
    badge: {
        width: screen_width * 0.9,
        height: screen_width * 0.35,
        backgroundColor: '#041C2B',
        borderRadius: 10,
        marginBottom:10,
    },
    badgeBox: {
        paddingLeft: 12,
    },
    saldoView: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    saldoName: {
        color: '#CAD1DB',
        fontSize: 16,
        fontFamily: 'ws-bold',
        marginBottom: 12,
    },
    saldoValue: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'ws-bold',
    },
    saldoProcentDown: {
        color: '#E55050',
        fontSize: 16,
        fontFamily: 'ws-bold',
        paddingLeft: 20,
    },
    saldoProcentUp: {
        color: '#00B16A',
        fontSize: 16,
        fontFamily: 'ws-bold',
        paddingLeft: 20,
    },
    saldoComment: {
        color: '#CAD1DB',
        fontSize: 14,
        fontFamily: 'ws-bold',
    },
    arrowUp: {
        width: 22,
        height: 13,
        marginTop: 4,
        marginLeft: 4,
    },
    arrowDown: {
        width: 22,
        height: 13,
        marginTop: 4,
        marginLeft: 4,
    }

});