import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../../constants";
const HEADER_HEIGHT = 350;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: -1000,
    paddingTop: 1000,
  },
  image: {
    height: HEADER_HEIGHT,
    width: '200%',
  },
  blurContainer: {
    position: 'absolute',
    bottom: 10,
    width: '90%',
    height: 80
  },
  blurInnerContainer: {
    flex: 1,
    borderRadius: 15,
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  recipeAuthorContainer: {
    marginLeft: 15,
    flex: 1
  },
  recipeByText: {
    color: COLORS.gray2,
    ...FONTS.body5
  },
  authorNameText: {
    color: COLORS.white,
    ...FONTS.h3
  },
  arrowOutlineContainer: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 3,
    borderRadius: 5
  },
  rightArrow: {
    width: 15,
    height: 15,
    tintColor: 'white',
    alignItems: 'flex-end'
  }
});
