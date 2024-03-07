import {StyleSheet, Dimensions} from "react-native";
import { colors } from "../../../utils/colors";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: "500",
  },
    price: {
        marginVertical: 8,
        fontSize: 30,
        fontWeight: "bold",
    },
    description: {
        marginVertical: 8,
        fontWeight: "300",
        color: colors.textGray,
    },
    footer: {
        padding: 24,
        flexDirection: "row",
        alignItems: "center",

    },
    save: {
        flex: 1,
    },
    bookmarkContainer: {
        backgroundColor: colors.lightGray,
        padding: 18,
        borderRadius: 8,
        marginRight: 16,
    },
    bookmarkIcon: {
        width: 24,
        height: 24,
    },
    backContainer: {
        backgroundColor: colors.white,
        padding: 10,
        margin: 24,
        borderRadius: 8,
        position: "absolute",
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    button: {
        flex: 1,
    },
}); 