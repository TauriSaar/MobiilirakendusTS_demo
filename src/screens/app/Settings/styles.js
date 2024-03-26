import {StyleSheet} from "react-native";

import {colors} from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    sectionTitle: {
        fontWeight: "500",
        fontSize: 16,
        color: colors.gray,
        marginBottom: 16,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",  
    },
    icon: {
        width: 32,
        height: 32,
    },
    button: {
        paddingVertical: 12,
        marginTop: 16,
    },
});