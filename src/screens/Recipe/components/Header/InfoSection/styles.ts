import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleContainer: {
    width: '50%'
  },
  recipeNameText: {
    color: COLORS.black,
    ...FONTS.h2,
    lineHeight: 28
  },
  subInfoText: {
    color: COLORS.lightGray2,
    ...FONTS.body5,
    marginTop: 5
  },
  viewersContainer: {
    flexDirection: 'row'
  },
  viewerImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  imagePlaceholder: {
    borderRadius: 30,
    backgroundColor: COLORS.gray,
    width: 50,
    height: 50,
    marginLeft: -20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerPlaceholderText: {
    color: COLORS.white,
    ...FONTS.body5,
  },
  morePeopleText: {
    color: COLORS.lightGray2,
    ...FONTS.body5,
    lineHeight: 15,
    marginTop: 15,
    textAlign: 'right'
  }
});
