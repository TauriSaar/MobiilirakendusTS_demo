import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingHorizontal: 8,
        paddingVertical: 20,
        borderRadius: 8,
        width: '100%',
    },
    title: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});