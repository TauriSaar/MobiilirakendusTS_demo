import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get("window");
console.log("width => ", width);

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  title: {
    color: colors.textGray,
    paddingVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  price: {
    color: colors.black,
    paddingBottom: 8,
  },
  content: {
    flex: 1,
  },
    icon: {
        // the width and height of the icon is by default 24
    },
}); 