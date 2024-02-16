import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        borderColor: colors.gray,
        borderRadius: 4,
        borderWidth: 1,
        width: 22,
        height: 22
    },
    innerContainer: {
        borderColor: colors.gray,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkIcon: {
        // the check icon is already provided in the correct size
    }
});