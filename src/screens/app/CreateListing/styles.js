import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.blue,
    marginBottom: 16
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray,
    borderStyle: 'dotted',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 10
  },
  uploadCircle: {
    width: 32,
    height:32,
    borderRadius: 20,
    backgroundColor: colors.lightGray,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  uploadPluss: {
    color: colors.white,
    fontSize: 28,
    marginTop: -4
  },
  ImageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  imageContainer: {
    flexDirection: 'row',
    marginRight: 5,
    marginTop: 10
  },
  delete: {
    width: 20,
    height: 20,
    marginTop: -7,
    marginLeft: -20
  },
  textarea: {
    minHeight: 120,
    paddingTop: 16,
  }
});