import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: COLORS.darkGreen,
    ...FONTS.h2
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  subText: {
    color: COLORS.gray,
    ...FONTS.body3
  },
  searchInputContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginTop: SIZES.padding,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: COLORS.gray,
    marginLeft: SIZES.radius
  },
  textInput: {
    marginLeft: SIZES.radius,
    ...FONTS.body3,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0
  },
  moreRecipesContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGreen,
    marginTop: SIZES.radius,
    borderRadius: SIZES.radius,
    paddingVertical: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.radius
  },
  moreRecipesImage: {
    width: 75,
    height: 75
  },
  textSeeRecipes: {
    marginTop: 20,
    textDecorationLine: 'underline',
    color: COLORS.darkGreen,
    ...FONTS.body4,
  },
  trendingContainer: {
    marginTop: SIZES.padding,
  },
  trendingImageContainer: {
    height: 350,
    width: 250,
    marginTop: SIZES.radius,
    marginRight: 20,
    borderRadius: SIZES.radius,
  },
  trendingImage: {
    height: 350,
    width: 250,
    borderRadius: SIZES.radius
  },
  floatingCategory: {
    position: 'absolute',
    top: SIZES.padding,
    left: SIZES.padding,
    paddingVertical: 5,
    paddingHorizontal: SIZES.radius,
    borderRadius: 25,
    backgroundColor: COLORS.transparentGray,
  },
  categoryText: {
    color: COLORS.white,
    ...FONTS.h4
  },
  blurContainer: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
    height: 100,
    borderRadius: SIZES.radius,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    flexDirection: 'row'
  },
  blurTextTitle: {
    ...FONTS.h3,
    color: COLORS.white,
    width: '70%',
  },
  bookmarkIcon: {
    width: 15,
    height: 15,
    position: 'absolute',
    right: 20,
    top: 17,
    tintColor: COLORS.darkGreen
  },
  blurSubText: {
    position: 'absolute',
    bottom: -3,
    color: COLORS.lightGray
  },
  categoriesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.padding
  },
  categoriesText: {
    ...FONTS.h3
  },
  categoriesViewAll: {
    ...FONTS.body5,
    color: COLORS.lightGray2
  }
});
