import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.textGray,
    },
    image: {
        width: 32,
        height: 32,
        borderRadius: 8,
    },
    price: {
        color: colors.black,
    },
});