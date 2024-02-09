import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        borderColor: colors.gray,
        borderRadius: 4,
        borderWidth: 1,
        with: 22,
        height: 22
    },
    inputContainer: {
        borderColor: colors.gray,
        with: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkIcon: {
        width: 19,
        height: 9
    }
});