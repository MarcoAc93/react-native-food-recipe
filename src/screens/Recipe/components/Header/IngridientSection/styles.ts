import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: COLORS.black,
    ...FONTS.h3
  },
  subText: {
    color: COLORS.lightGray2,
    ...FONTS.body5
  }
});
