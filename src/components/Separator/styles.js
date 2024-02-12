import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    text: {
        color: colors.blue,
        fontWeight: '500',
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: colors.lightGray,
        marginVertical: 8
    }
});