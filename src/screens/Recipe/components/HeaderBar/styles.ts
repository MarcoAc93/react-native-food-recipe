import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
  headerBarTitleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  recipeByText: {
    color: COLORS.lightGray2,
    ...FONTS.body4
  },
  authorNameText: {
    color: COLORS.white2,
    ...FONTS.h3
  },
  backIcon: {
    width: 15,
    height: 15,
    tintColor: COLORS.gray2
  },
  bookmarkIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.darkGreen
  },
  backIconContainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    padding: 10,
    marginLeft: 24
  },
  bookmarkContainer: {
    marginRight: 24
  }
});
