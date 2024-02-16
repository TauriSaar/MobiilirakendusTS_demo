import {StyleSheet} from 'react-native';

import {colors} from '../../../utils/colors';

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
        color: colors.orange,
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
        color: colors.blue,
        textWeight: 'bold'
    }
});