import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    innerTitle: {
        color: '#FCA34D',
        textDecorationLine: 'underline'
    },
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    titleContainer: {
        marginVertical: 54
    },
    footerText: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 16,
        color: '#4F63AC',
        textWeight: 'bold'
    }
});